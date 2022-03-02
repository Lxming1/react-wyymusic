import React, { memo } from 'react'
import { PlayListItem } from '../style'
import { getImgSize } from 'utils/format-utils'
import { wan } from 'utils/format-utils'

const PlaylistItem = memo(({playlistItem}) => {
  
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
            <span className='playCount'>{wan(playlistItem.playCount, 10000)}</span>
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