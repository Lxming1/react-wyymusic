import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { MainLeft } from './style'
import PlHeader from './c-cpns/pl-header'
import PlSonglist from './c-cpns/pl-songlist'

const PlaylistLeft = memo(() => {
  const { playlistItem } = useSelector(state => ({
    playlistItem: state.getIn(['recommendInfo','playlistDetailMes'])
  }), shallowEqual)
  
  return (
    <MainLeft>
      <PlHeader playlistItem={playlistItem}/>
      <PlSonglist playlistItem={playlistItem}/>
    </MainLeft>
  )
})

export default PlaylistLeft