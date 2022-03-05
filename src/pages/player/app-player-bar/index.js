import { Slider } from 'antd'
import React, { memo, useEffect, useRef, useState } from 'react'
import { PlayControWrapper } from './style'
import { formatDate, getImgSize } from 'utils/format-utils'
import { shallowEqual, useSelector } from 'react-redux'
import defaultPic from 'assets/img/default_album.png'

export const AppPlayerBar = memo(() => {
  // 播放暂停状态
  const [playOrStop, setPlayOrStop] = useState(true)
  // 播放模式
  const [playState, setPlayState] = useState(0)
  // 记录当前播放到歌曲的哪一部分
  const [currentTime, setCurrentTime] = useState(0)

  const playStateTitle = ['随机', '单曲循环', '循环']

  // 控制播放状态tip
  const [showTip, setShowTip] = useState(false)
  // 保存timeout事件状态
  const [timer, setTimer] = useState(null)
  // 改变播放模式
  const changePlayState = () => {
    // 点击点击前清除上一次的setTimeout事件，所以要将该事件保存状态
    clearTimeout(timer)
    setShowTip(true)
    setPlayState(() => playState + 1 < 3 ? playState + 1 : 0)
    setTimer(setTimeout(() => setShowTip(false), 2000))
  }
  // 改变播放暂停状态
  const changeState = () => {
    setPlayOrStop(!playOrStop)
    playOrStop ? songRef.current.play() : songRef.current.pause()
  }
  // 歌曲总时长
  const songTime = value => {
    let date = new Date(value);
    return formatDate(date, 'mm:ss')
  }
  // onChange事件绑定slider，使该组件变成受控组件
  const changeProgress = time => {
    // 拖动时禁止记录当前播放状态
    setCanLoad(false)
    // 点击或拖动播放条时保存当前时间戳便于右侧展示时间
    setCurrentTime(time)
  }

  const onAfterChange = time => {
    // 松开拖动条允许记录当前播放状态
    setCanLoad(true)
    // 拖动播放条获取松开时的时间戳，再改变当前音乐播放的位置
    songRef.current.currentTime = time / 1000
  }
  
  // 从store获取当前播放的音乐
  const { song } = useSelector(state => ({
    song: state.getIn(['songInfo', 'currentSong'])
  }), shallowEqual)

  // 判断当前有无歌曲
  const songIsNull = JSON.stringify(song) == "{}"

  // 歌曲url信息
  const songUrl = song.songUrl
  
  // audio标签ref
  const songRef = useRef()

  // 控制首次进入
  const [first, setFirst] = useState(true)
  // 切换音乐
  useEffect(() => {
    setCurrentTime(0)
    // 首次进入时显示播放按钮（未播放状态）
    if (first) {
      setPlayOrStop(true)
      setFirst(false)
    }
    return () => {
      // 切换音乐时控制按钮状态
      if (!first) {
        songRef.current && songRef.current.load()
        songRef.current && songRef.current.play()
        setPlayOrStop(false)
      }
    }
  }, [song])


  const [canLoad, setCanLoad] = useState(true)
  const songTimeUpdate = () => {
    const currentSongTime = songRef.current.currentTime
    //音乐播放时保存当前播放位置的时间戳
    canLoad && setCurrentTime(currentSongTime * 1000)
    if(songRef.current.duration === currentSongTime){
      setPlayOrStop(true)
    }
  }

  return (
    <PlayControWrapper className="sprite_player">
      <audio ref={songRef} onTimeUpdate={songTimeUpdate} loop={playState === 1}>
        <source src={songUrl && songUrl.url} type={`audio/${songUrl && songUrl.type}`}/>
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
              className={(playOrStop ? 'playBtn' : 'stopBtn') + " sprite_player centerBtn"}></div>
            <div title="下一首" className="sprite_player nextBtn"></div>
          </div>
          <div className="picBox">
            <img src={song && song.al && getImgSize(song.al.picUrl, 34) || defaultPic} alt=""/>
            <a href="" className="picWrapper sprite_player"></a>
          </div>
          {/* 中间部分滑动条 */}
          <div className="center">
            <div className="playHead">
              <a href="" className="songName">{song && song.name}</a>
              <span className="arName">{
                song && song.ar && song.ar.map((item, index, arr) => (
                  <span key={index}>{item.name}{index != arr.length-1 && '/'}</span>
                ))
              }</span>
              {!songIsNull && <a href="" title="来自专辑" className="sprite_player link"></a>}
            </div>
            <div className="playBar">
              <Slider
                min={0}
                max={song && song.dt}
                tipFormatter={null} 
                value={currentTime}   /** 受控组件 */
                onChange={changeProgress} 
                onAfterChange={onAfterChange}
              />
              <div className="time">
                <span className="now-time">{songTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{!songIsNull ? songTime(song.dt) : '00:00'}</span>
              </div>
            </div>
          </div>
          {/* 右边部分留个icon */}
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

        <div className='tip sprite_player' style={{display: showTip ? 'block' : 'none'}}>{playStateTitle[playState]}</div>
      </div>
    </PlayControWrapper>
  )
})