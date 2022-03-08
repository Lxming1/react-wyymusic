import React, { memo, useEffect } from 'react'
import Nav from 'pages/discover/c-cpn/nav'
import {  PlaylistItemWrapper } from './style'
import { HeaderNav } from '../../style'
import PlaylistLeft from './c-cpns/playlist-left'
import PlaylistRight from './c-cpns/playlist-right'
import { useDispatch } from 'react-redux'
import { 
  getPlaylistDetail, 
  changePlaylistDetail 
} from 'pages/discover/c-pages/recommend/store/actionCreater'
import { useLocation, Navigate } from 'react-router'

const XMPlaylistItem = memo(() => {
  const dispatch = useDispatch()
  const location = useLocation()
  const currentPlID = location.search.substring(4, location.search.length)
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getPlaylistDetail(currentPlID))
    return () => dispatch(changePlaylistDetail({}))
  }, [dispatch, currentPlID])

  return currentPlID !== '' ? (
    <PlaylistItemWrapper>
      <HeaderNav>
        <Nav/>
      </HeaderNav>
      <div className="wrap-v2 playlistMain">
        <PlaylistLeft/>
        <PlaylistRight/>
      </div>
    </PlaylistItemWrapper>
  ) : <Navigate to="/404"/>
})

export default XMPlaylistItem