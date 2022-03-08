import React, { memo } from 'react'
import { PlayListItem } from '../style'
import { getImgSize } from 'utils/format-utils'
import { wan } from 'utils/format-utils'
import { getPlaylistDetailApi } from 'services/recommend'
import { getCurrentSong } from 'pages/player/store/actionCreater'
import { useDispatch } from 'react-redux'
import { getSongApi } from 'services/player'
import { changeSongList } from 'pages/player/store/actionCreater'

const PlaylistItem = memo(({playlistItem}) => {
  const dispatch = useDispatch()
  
  const playSong = () => {
    getPlaylistDetailApi(playlistItem.id).then(res => {
      // res.privileges && dispatch(getCurrentSong(res.privileges[0].id, true))
      const mySongList = []
      const promiseList = []
      let playFrist = true
      res.privileges.map((item, index) => {
        const id = item.id
        promiseList.push(getSongApi(id).then(res => {
          const songMes = {...res.songs[0]}
          mySongList.push(songMes)
          if (playFrist) {
            dispatch(getCurrentSong(mySongList[0].id, true))
            playFrist = false
          }
        }))
      })
      Promise.all(promiseList).then(() => {
        dispatch(changeSongList(mySongList))
      })
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