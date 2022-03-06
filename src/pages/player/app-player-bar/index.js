import { Slider } from 'antd'
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PlayControWrapper } from './style'
import { formatDate, getImgSize } from 'utils/format-utils'
import { shallowEqual, useSelector } from 'react-redux'
import defaultPic from 'assets/img/default_album.png'

export const AppPlayerBar = memo(() => {
    
  /**   获取歌曲信息    */
  const { song } = useSelector(state => ({
    song: state.getIn(['songInfo', 'currentSong'])
  }), shallowEqual)
  
  /**     状态      */
  const [first, setFirst] = useState(true)              // 控制首次进入
  const [playOrStop, setPlayOrStop] = useState(true)    // 播放暂停状态
  const [currentTime, setCurrentTime] = useState(0)     // 记录当前播放到歌曲的哪一部分（时间戳）
  const [canLoad, setCanLoad] = useState(true)          // 判断当前是否为拖动状态，拖动状态不给自动改变拖动条
  const [playState, setPlayState] = useState(0)         // 循环、单曲循环、随机  
  const [showTip, setShowTip] = useState(false)         // 点击循环、单曲循环、随机的tip
  const [timer, setTimer] = useState(null)              // 保存tip的setTimeout事件

  /**     ref      */
  const songRef = useRef()    // audio标签ref
  
  /**     变量      */
  const songIsNull = JSON.stringify(song) === "{}"                  //当前有没有音乐
  const songTime = value => formatDate(new Date(value), 'mm:ss')    //当前播放的时间
  const songUrl = song.songUrl && song.songUrl.url                  //音乐的地址
  const songType = `audio/${song.songUrl && song.songUrl.type}`     //音乐类型
  const playAndPauseClassName =                                     //播放暂停按钮切换的className
    (playOrStop ? 'playBtn' : 'stopBtn') 
    + " sprite_player centerBtn"; 
  const arPic = (song && song.al && getImgSize(song.al.picUrl, 34)) || defaultPic   //图片
  const songName = song && song.name      //歌曲名
  const arName = (                        //作者名
    song && song.ar && song.ar.map((item, index, arr) => (
      <span key={index}>{item.name}{index !== arr.length-1 && '/'}</span>
    ))
  )
  const songAllTime = useMemo(() => song && song.dt, [song])          //歌曲总时长（时间戳）
  const duration = !songIsNull ? songTime(songAllTime) : '00:00'      //歌曲总时长（格式化后）
  const playStateTitle = ['随机', '单曲循环', '循环']                  //播放状态

  /***    事件    */
  const changePlayState = () => {       //改变循环模式
    clearTimeout(timer)                 // 点击点击前清除上一次的setTimeout事件，所以要将该事件保存状态
    setShowTip(true)
    setPlayState(() => playState + 1 < 3 ? playState + 1 : 0)
    setTimer(setTimeout(() => setShowTip(false), 2000))
  }

  const changeState = () => {                     // 改变播放暂停状态
    setPlayOrStop(!playOrStop)
    playOrStop ? songRef.current.play() : songRef.current.pause()
  }

  //传入自定义组件需要用useCallback或useMemo包裹，提高性能
  const changeProgress = useCallback(time => {    // onChange事件绑定slider，使该组件变成受控组件
    setCanLoad(false)                             // 拖动时禁止记录当前播放状态
    setCurrentTime(time)                          // 点击或拖动播放条时保存当前时间戳便于右侧展示时间
  }, [])
  
  const onAfterChange = useCallback(time => {     // 松开拖动条事件
    setCanLoad(true)                              // 松开拖动条允许记录当前播放状态
    songRef.current.currentTime = time / 1000     // 拖动播放条获取松开时的时间戳，再改变当前音乐播放的位置
    if (playOrStop){
      setPlayOrStop(!playOrStop)
      songRef.current.play()
    }
  }, [])

  const songTimeUpdate = e => {                                      //返回歌曲播放状态
    const currentSongTime = e.target.currentTime
    canLoad && setCurrentTime(currentSongTime * 1000)                //音乐播放时保存当前播放位置的时间戳
    e.target.duration === currentSongTime && setPlayOrStop(true)     //播放结束更改为暂停按钮
  }

  /***    生命周期      */
  useEffect(() => {
    setCurrentTime(0)
    if (first) {        
      setPlayOrStop(true)             // 首次进入时显示播放按钮（未播放状态）
      setFirst(false)
    }
    return () => {
      if (!first) {                    
        if (songRef.current){
          songRef.current.load()      //切换时先结束当前音乐播放
          songRef.current.play()
        }
        setPlayOrStop(false)          // 切换音乐时控制按钮状态
      }
    }
  }, [song, first])

  return (
    <PlayControWrapper className="sprite_player">
      <audio ref={songRef} onTimeUpdate={songTimeUpdate} loop={playState === 1}>
        <source src={songUrl} type={songType}/>
      </audio>
      <div className="wrapper ">
        <div className="updn">
          <div className="left sprite_player">
            <span className="btn sprite_player"></span>
          </div>
          <div className="right sprite_player"></div>
        </div>

        {/* <div className="sprite_player bg"></div>

        <div className="sprite_player lock"></div> */}
        
        <div className="wrap wrap-v2">
          {/* 前面三个按钮和头像 */}
          <div className="btns">
            <div title="上一首" className="sprite_player preBtn"></div>
            <div title="播放/暂停" onClick={() => changeState()}
              className={playAndPauseClassName}></div>
            <div title="下一首" className="sprite_player nextBtn"></div>
          </div>
          <div className="picBox">
            <img src={arPic} alt=""/>
            <a href="" className="picWrapper sprite_player"></a>
          </div>
          {/* 中间部分滑动条 */}
          <div className="center">
            <div className="playHead">
              <a href={`#/song?id=${song.id}`} className="songName">{songName}</a>
              <span className="arName">{arName}</span>
              {!songIsNull && <a href="" title="来自专辑" className="sprite_player link"></a>}
            </div>
            <div className="playBar">
              <Slider
                min={0}
                max={songAllTime}
                tipFormatter={null} 
                value={currentTime}   /** 受控组件 */
                onChange={changeProgress} 
                onAfterChange={onAfterChange}
              />
              <div className="time">
                <span className="now-time">{songTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{duration}</span>
              </div>
            </div>
          </div>
          {/* 右边部分六个icon */}
          <div className="operator">
            <div className="opLeft sprite_player">
              <span className="showState" title="开启画中画"></span>
              <span className="sprite_player collect" title="收藏"></span>
              <span className="sprite_player tansfer" title="分享"></span>
            </div>
            <div className="opRight sprite_player">
              {/* 调节音量 */}
              <span className="sprite_player sound"></span>
              {/* 切换播放顺序 */}
              <span 
                onClick={e => changePlayState()}
                title={playStateTitle[playState]}
                className={`sprite_player playState${playState}`}/>
              <div className="sprite_player playlist" title="播放列表">
                <span className="sprite_player">14</span>
              </div>
            </div>
          </div>
        </div>
        {/* tip */}
        <div className='tip sprite_player' style={{display: showTip ? 'block' : 'none'}}>
          {playStateTitle[playState]}
          </div>
      </div>
    </PlayControWrapper>
  )
})