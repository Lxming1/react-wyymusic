import { Slider } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { PlayControWrapper } from './style'
import { formatDate } from 'utils/format-utils'
import { shallowEqual, useSelector } from 'react-redux'

export const AppPlayerBar = memo(() => {
  // 播放暂停状态
  const [playOrStop, setPlayOrStop] = useState(true)
  // 播放模式
  const [playState, setPlayState] = useState(0)
  // 记录当前播放到歌曲的哪一部分
  const [currentTime, setCurrentTime] = useState(0)

  const playStateTitle = ['随机', '单曲循环', '循环']
  // 改变播放模式
  const changePlayState = () => {
    if (playState + 1 < 3) {
      setPlayState(playState+1)
    }else {
      setPlayState(0)
    }
  }
  // 改变播放暂停状态
  const changeState = () => {
    setPlayOrStop(!playOrStop)
  }
  // 歌曲总时长
  const songTime = value => {
    let date = new Date(value);
    return formatDate(date, 'mm:ss')
  }
  // onChange事件绑定slider，使该组件变成受控组件
  const changeProgress = time => {
    setCurrentTime(time)
  }

  const onAfterChange = (x) => {
    // console.log(x)
  }
  // 从store获取当前播放的音乐
  const { song } = useSelector(state => ({
    song: state.getIn(['songInfo', 'currentSong'])
  }), shallowEqual)

  useEffect(() => {
    // 切换音乐时从0开始播放
    setCurrentTime(0)
  },[song])

  return (
    <PlayControWrapper className="sprite_player">
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
            <div title="播放/暂停" onClick={e => changeState()}
              className={(playOrStop ? 'playBtn' : 'stopBtn') + " sprite_player centerBtn"}></div>
            <div title="下一首" className="sprite_player nextBtn"></div>
          </div>
          <div className="picBox">
            <img src={song && song.al && song.al.picUrl} alt="" className="pic"/>
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
              <a href="" title="来自专辑" className="sprite_player link"></a>
            </div>
            <div className="playBar">
              <Slider
                min={0}
                max={song && song.dt}
                value={currentTime}   /** 受控组件 */
                onChange={changeProgress} 
                onAfterChange={onAfterChange}
                tipFormatter={null} />
              <div className="time">
                <span className="now-time">{songTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{song && songTime(song.dt)}</span>
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
      </div>
    </PlayControWrapper>
  )
})