import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatDate, getImgSize } from 'utils/format-utils'
import { parseLyric } from '../../../../utils/parse-lyric'
import { getCurrentSong } from '../../store/actionCreater'
import { SongListWrapper, MianWrapper } from './style'

const SongList = memo(({song, songList, currentBg, closeSongList, songIndex, currentTime}) => {
  console.log(song)
  const dispatch = useDispatch()
  const arName = (ar) => {
    let name = '';
    ar.forEach((item, index, arr) => {
      name += item.name + (index !== arr.length-1 ? '/' : '')
    })
    return name
  }
  const songTime = value => formatDate(new Date(value), 'mm:ss')
  const activeSong = index => songIndex === index ? {color: '#fff'} : {}

  const playSong = (id) => {
    // console.log(id)
    dispatch(getCurrentSong(id, true))
  }
  const lyric = parseLyric(song?.lyric)

  const activeLyricStyle = (item, index, arr) => {
    const style = 
      (item.time < currentTime && arr[index+1].time > currentTime) ?
      {color: '#fff', fontSize: '14px'} : {}
    return style
  }
  return (
    <SongListWrapper>
      <header>
        <div className='head-box'>
          <div className='left'>
            <span className='showCount'>播放列表({songList.length})</span>
            <div className='mainCenter'>
              <a href="" className='leftIc'>
                <i className='sprite_songlist col'></i>
                <span className='first'>收藏全部</span>
              </a>
              <span className='line'></span>
              <a href="" className='rightIc'>
                <i className='sprite_songlist del'></i>
                <span className='second'>清除</span> 
              </a>
            </div>
          </div>
          <div className='right'>
            <span>{song.name}</span>
          </div>
          <span className='close sprite_songlist' onClick={e => closeSongList(false)}></span>
        </div>
        
      </header>
      <MianWrapper>
        <img src={currentBg} alt="" className='bgImg'/>
        <div className='mskLeft'></div>
        <div className="mainLeft">
          <ul>
            {
              songList.map((item, index) => (
                <li key={item.id} className="songItem" onClick={e => playSong(item.id)}>
                  <div className='listLeft'>
                    {songIndex === index && <i className='playIcon sprite_songlist'></i>}
                    <span className='songName' style={activeSong(index)}>{item.name}</span>
                  </div>
                  <div className='fourIcon' style={songIndex === index ? {display: 'flex'} : {}}>
                    <i className='sprite_songlist collectIcon'></i>
                    <i className='sprite_songlist shareIcon'></i>
                    <i className='sprite_songlist downloadIcon'></i>
                    <i className='sprite_songlist delIcon'></i>
                  </div>
                  <div className='listRight'>
                    <span className='author' style={activeSong(index)}>{arName(item.ar)}</span>
                    <span className='songTime' style={activeSong(index)}>{songTime(item.dt)}</span>
                    <a className='link sprite_songlist' title="来自歌单"></a>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='mskRight'></div>
        <div className="mainRight">
          {
            lyric.map((item, index, arr) => (
              <p key={index} style={activeLyricStyle(item, index, arr)}>{item.content}</p>
            ))
          }
        </div>
      </MianWrapper>
    </SongListWrapper>
  )
})

export default SongList