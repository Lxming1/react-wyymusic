import React, { memo } from 'react'
import { BtnWrapper } from './style'

const VariousBtn = memo(({privileges, subscribedCount, shareCount, commentCount}) => {
  const btnCpn = (classname, content) => (
    <a href="#/" className={classname + " commonCss sprite_button"}>
      <i className="sprite_button">
        {classname === 'download' ? '下载' : `(${content})`}
      </i>
    </a>
  )
  return (
    <BtnWrapper>
      <a href="#/" className="playSong sprite_button" title="播放">
        <i className="sprite_button">
          <em className="ply sprite_button"></em>
          播放
        </i>
      </a>
      <a href="#/" className="addToPlayList sprite_button" title="添加到播放列表"></a>
      {btnCpn('collectToPlayList', subscribedCount)}
      {btnCpn('transfer', shareCount)}
      {btnCpn('download')}
      {btnCpn('comment', commentCount)}
    </BtnWrapper>
  )
})

export default VariousBtn