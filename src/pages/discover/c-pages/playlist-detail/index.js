import React, { memo } from 'react'
import Nav from 'pages/discover/c-cpn/nav'
import { PlaylistItemWrapper } from './style'
import { HeaderNav } from '../../style'

const XMPlaylistItem = memo(() => {
  return (
    <PlaylistItemWrapper>
      <HeaderNav>
        <Nav/>
      </HeaderNav>
    </PlaylistItemWrapper>
  )
})

export default XMPlaylistItem