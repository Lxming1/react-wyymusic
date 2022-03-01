import React, { memo, useEffect } from 'react'
import Nav from 'pages/discover/c-cpn/nav'
import {  PlaylistItemWrapper, MainLeft, MainRight } from './style'
import { HeaderNav } from '../../style'
import PlaylistLeft from './c-cpns/playlist-left'
import PlaylistRight from './c-cpns/playlist-right'
import { useDispatch } from 'react-redux'
import { 
  getPlaylistDetail, 
  clearPlaylistDetail 
} from 'pages/discover/store/actionCreater'
import { useLocation } from 'react-router'

const XMPlaylistItem = memo(() => {
  const dispatch = useDispatch()
  const location = useLocation()
  const currentPlID = location.search.substring(4, location.search.length)

  useEffect(() => {
    dispatch(getPlaylistDetail(currentPlID))
    return () => dispatch(clearPlaylistDetail())
  }, [dispatch, currentPlID])

  return (
    <PlaylistItemWrapper>
      <HeaderNav>
        <Nav/>
      </HeaderNav>
      <div className="wrap-v2 playlistMain">
        <MainLeft>
          <PlaylistLeft/>
        </MainLeft>
        <MainRight>
          <PlaylistRight/>
        </MainRight>
      </div>
    </PlaylistItemWrapper>
  )
})

export default XMPlaylistItem