import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { wan } from 'utils/format-utils'
import { getCurrentSong } from '../../pages/player/store/actionCreater'
import { BtnWrapper } from './style'

const VariousBtn = memo(({song, subscribedCount, shareCount, commentCount}) => {

  const dispatch = useDispatch()

  // console.log(song)
  const playSong = () => {
    if (typeof song === 'object'){
      dispatch(getCurrentSong(song[0].id, true))
    } else if (typeof song === 'number') {
      dispatch(getCurrentSong(song, true))
    }
  }

  const btnCpn = (classname, content) => (
    <a href="#/" className={classname + " commonCss sprite_button"}>
      <i className="sprite_button">
        {classname === 'download' ? '下载' : (
          typeof content !== 'number' ? content : `(${content})`
        )}
      </i>
    </a>
  )

  return (
    <BtnWrapper>
      <span className="playSong sprite_button" title="播放" onClick={e => playSong()}>
        <i className="sprite_button">
          <em className="ply sprite_button"></em>
          <span className='playT'>播放</span>
        </i>
      </span>
      <a href="#/" className="addToPlayList sprite_button" title="添加到播放列表"> </a>
      {btnCpn('collectToPlayList', wan(subscribedCount, 100000))}
      {btnCpn('transfer', wan(shareCount, 100000))}
      {btnCpn('download')}
      {btnCpn('comment', commentCount)}
    </BtnWrapper>
  )
})

export default VariousBtn