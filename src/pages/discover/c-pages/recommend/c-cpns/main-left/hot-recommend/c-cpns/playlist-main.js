import React, { memo } from 'react'
import PlaylistItem from './playlist-item'
import { PlayList } from '../style'

const Playlist = memo(({playlistMes}) => {
  const arr = []
  for(let i = 0; i< playlistMes.length / 4; i++) {
    arr.push([])
  }
  for(let i in playlistMes) {
    const index = Math.floor(i / 4)
    arr[index].push(playlistMes[i])
  }
  return (
    <PlayList>
      {
        arr.map((item, index) => (
          <div className="fourPlay" key={index}>
            {
              item.map((item1) => {
                return <PlaylistItem key={item1.id} playlistItem={item1}/>
              })
            }
          </div>
        ))
      }
    </PlayList>
  )
})

export default Playlist