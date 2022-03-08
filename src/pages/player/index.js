import React, { memo, useEffect } from 'react'
import { HeaderNav } from '../discover/style'
import Nav from 'pages/discover/c-cpn/nav'
import { SongWrapper } from './style'
import SongLeft from './c-cpns/song-left'
import SongRight from './c-cpns/song-right'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addSongPageMes, getCurrentSong } from './store/actionCreater'

const XMSong = memo(() => {
  const dispatch = useDispatch()
  const location = useLocation()
  const currentSongID = location.search.substring(4, location.search.length)
  useEffect(() => {
    dispatch(getCurrentSong(currentSongID, false))
    return () => dispatch(addSongPageMes({}))
  }, [dispatch, currentSongID])

  return (
    <SongWrapper>
      <HeaderNav>
        <Nav/>
      </HeaderNav>
      <div className="wrap-v2 songMain">
        <SongLeft/>
        <SongRight/>
      </div>
    </SongWrapper>
  )
})

export default XMSong