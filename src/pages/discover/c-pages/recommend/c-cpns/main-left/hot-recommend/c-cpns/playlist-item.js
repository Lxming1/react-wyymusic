import React, { memo } from 'react'
import { PlayListItem } from '../style'
import { getImgSize } from 'utils/format-utils'
import { wan } from 'utils/format-utils'
import { getPlaylistDetailApi } from 'services/recommend'
import { useDispatch } from 'react-redux'
import { addAndPlayOne } from 'utils/play-list-song'

const PlaylistItem = memo(({playlistItem}) => {
  const dispatch = useDispatch()
  
  const playSong = () => {
    const id = playlistItem.id
    getPlaylistDetailApi(id).then(res => {
      addAndPlayOne(res.playlist.tracks, dispatch)
    })
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
            <span className='playCount'>{wan(playlistItem.playCount, 10000)}</span>
          </div>
          <span className="rightIcon sprite_icon" onClick={e => playSong()}/>
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