import React, { memo } from 'react'
import { PlayListItem } from '../style'
import { getImgSize } from 'utils/format-utils'

const PlaylistItem = memo(({playlistItem}) => {
  const wan = (num) => {
    const newNum = num > 10000 ? (num / 10000).toFixed(0) + '万' : num
    return newNum
  }
  return (
    <PlayListItem>
      <div className="pic">
        <img src={getImgSize(playlistItem.picUrl, 140)} alt={playlistItem.name}/>
        <a href={`#/playlist?id=${playlistItem.id}`} 
          title={playlistItem.name} 
          className="sprite_covor boli"> </a>
        <div className='bottomBar sprite_covor'>
          <div className="bottomLeft">
            <span className='leftIcon sprite_icon'/>
            <span className='playCount'>{wan(playlistItem.playCount)}</span>
          </div>
          <span className="rightIcon sprite_icon"/>
        </div>
      </div>
      <a className="bottomMes" title={playlistItem.name} href="#/">
        <span>{playlistItem.name}</span>
        {/* <span>{}</span> */}
      </a>
    </PlayListItem>
  )
})

export default PlaylistItem