import React, { memo } from 'react'
import PlaylistHeader from 'components/playlisst-header'
import { formatDate } from 'utils/format-utils'
import { useDispatch } from 'react-redux'
import { getCurrentSong } from 'pages/player/store/actionCreater'

const PlSonglist = memo(({playlistItem}) => {
  const songlistRight = () => {
    const style = {
      height: '33px',
      lineHeight: '33px',
      position: 'absolute',
      color: '#666',
      right: 0,
      top: 0
    }
    return (
      <span style={style}>
        播放：<strong style={{color: '#c20c0c'}}>{playlistItem.playCount}</strong>次
      </span>
    )
  }
  const dispatch = useDispatch()

  const playSong = (id) => {
    dispatch(getCurrentSong(id, true))
  }

  const songTime = value => {
    let date = new Date(value);
    return formatDate(date, 'mm:ss')
  }
  return (
    <div className="leftSonglist">
      <PlaylistHeader 
        title='歌曲列表' 
        count={`${playlistItem.trackCount}首歌`} 
        rightMes={songlistRight()}/>
      <div className="songlist">
        <table>
          <thead>
            <tr>
              <th className="sprite_table" style={{width: '74px'}}><div></div></th>
              <th className="sprite_table" style={{width: '235.75px'}}><div className="sprite_table">歌曲标题</div></th>
              <th className="sprite_table" style={{width: '111px'}}><div className="sprite_table">时长</div></th>
              <th className="sprite_table" style={{width: '89.45px'}}><div className="sprite_table">歌手</div></th>
              <th className="sprite_table" style={{width: '127.8px'}}><div className="sprite_table">专辑</div></th>
            </tr>
          </thead>
          <tbody>
            { playlistItem.tracks &&
              playlistItem.tracks.map((item, index) => (
                <tr key={item.id} style={index % 2 === 0 ? {backgroundColor: '#f7f7f7'} : {}}>
                  <td style={{display: 'flex', justifyContent:'space-between'}}>
                    <span className='index'>{index+1}</span>
                    <i className="sprite_table playIcon" onClick={e => playSong(item.id)}></i>
                  </td>
                  <td className='name' title={item.name}><a href="#/">{item.name}</a></td>
                  <td><span style={{color:'#666'}}>{songTime(item.dt)}</span></td>
                  <td title={item.ar.map(item => item.name).join('/')}>
                    <a href="#/" style={{color:'#333'}}>{item.ar.map(item => item.name).join('/')}</a>
                  </td>
                  <td title={item.al.name}><a href="#/" style={{color:'#333'}}>{item.al.name}</a></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
})

export default PlSonglist