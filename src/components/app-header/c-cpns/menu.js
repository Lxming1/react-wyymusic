import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { headerLinks } from 'common/local-data';

export default memo(function Menu() {
  const location = useLocation()
  const currentPath = location.pathname
  
  const childClickActive = item => (
    // 某些路由要使发现音乐处于活跃
    ['/', '/discover', '/playlist', '/song'].includes(currentPath.substring(0, 9)) 
    && item.title === '发现音乐'
  )
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
