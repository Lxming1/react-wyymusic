import React, { memo } from 'react'
import { getImgSize } from 'utils/format-utils'

const DiscsItem = memo(({item}) => {
  const playSong = () => {
    console.log(item)
  }
  return (
    <div className='discsItem sprite_02' title={item.artist.name}>
      <div className="discsImg">
        <img src={getImgSize(item.blurPicUrl, 100)} alt={item.name}/>
        <a href="#/" className="sprite_covor bag1"> </a>
        <i className="sprite_icon playIcon" title='播放' onClick={e => playSong()}></i>
      </div>
      <a className='discsName' href="#/">{item.name}</a>
      <a className='artistName' href='#/'>{item.artist.name}</a>
    </div>
  )
})

export default DiscsItem