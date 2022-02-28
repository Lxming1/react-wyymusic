import React, { memo, useState } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import Menu from './c-cpns/menu';
import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function XMAppHeader() {
  const location = useLocation()
  const currentPath = location.pathname
  const showDivider = path => currentPath.substring(0, 9) === path
  const noDivider = currentPath === '/' || showDivider('/discover') || showDivider('/playlist')

  const mes = "音乐/视频/电台/用户"
  const [placeholder, setPlaceholder] = useState(mes)

  return (
    <HeaderWrapper height={ noDivider ? '70px' : '75px' }>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" 
            className="logo sprite_01">网易云音乐</a>   {/* logo-icon */}
          <Menu/>                         {/* select-item */}
          <i className="hot sprite_01"/>   {/* hot-icon */}
        </HeaderLeft>
        <HeaderRight>
          <div className="search sprite_01">  {/* search input */}
            <input 
              placeholder={placeholder} 
              onFocus={e => setPlaceholder('')} 
              onBlur={e => setPlaceholder(mes)}/>
          </div>
          <div className="creator">
            <NavLink to="creatorcenter">创作者中心</NavLink>
          </div>
          <a href="#/" className="login">登录</a>
        </HeaderRight>
      </div>
      <div className="divider"/>
    </HeaderWrapper >
  )
});
