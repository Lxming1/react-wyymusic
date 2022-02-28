import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { headerLinks } from 'common/local-data';

export default memo(function Menu() {
  const location = useLocation()
  const currentPath = location.pathname
  
  const childClickActive = item => {
    // path为'/playlist'时活跃
    const playlistActive = currentPath === '/playlist' && item.title === '发现音乐'
    // path包含'/discover'时活跃
    const showDiver = currentPath.substring(0, 9) === '/discover'
    // 切换子路由时保证当前发现音乐nav活跃
    const isActive = (item.title === '发现音乐' && showDiver) || playlistActive
    return isActive
  }
  const menuActiveClassName = item => childClickActive(item) ? 'active' : undefined
  const showBottomIcon = item => (item.path === currentPath || childClickActive(item))

  const jumpNew = (path, e) => {
    // 'http' starts with a new page
    if (path.substring(0, 4) !== 'http') return
    e.preventDefault()
    window.open(path)
  }

  return (
    <div className="select-list">
      {headerLinks.map(item => (
        <NavLink 
          to={item.path} 
          key={item.path} 
          onClick={e => jumpNew(item.path, e)} 
          className={ menuActiveClassName(item) }>
          { item.title }   {/* title */}
          { showBottomIcon(item) ?     
            <i className="sub sprite_01"/> : undefined}    {/* bottom icon of active */}
        </NavLink>
      ))}
    </div>
  );
});
