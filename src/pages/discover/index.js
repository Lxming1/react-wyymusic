import React, { memo } from 'react';
import { Outlet } from 'react-router';
import GoTop from 'components/go-top';
import Nav from './c-cpn/nav'
import { HeaderNav } from './style'

export default memo(function XMDiscover() {
  return (
    <div>
      <HeaderNav>
        <Nav/>
      </HeaderNav>
      <Outlet/>
      <GoTop/>
    </div>
  )
});
