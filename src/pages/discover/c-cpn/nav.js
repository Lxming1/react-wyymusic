import React, { memo, useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { headerLinks } from 'common/local-data';
import { useLocation } from 'react-router';

export default memo(function Nav() {
  const location = useLocation()
  const [actived, setActived] = useState(true);
  useLayoutEffect(() => {
    // 第一次渲染时定向到第一个页面
    setActived(location.pathname === '/')
  }, [location.pathname]);
  
  return (
    <div className="content wrap-v1">
      {headerLinks[0].children.map((item, index) => (
        <Link key={item.title} to={item.path} 
        // 第一次渲染时定向到第一个页面
          className={(actived && index === 0 && 'active')
            || (item.path === location.pathname ? 'active' : undefined)}>
              {/* 歌单处有个icon，所以样式不同，className不同 */}
          <span className={index === 2 ? 'RPadding' : 'title'}>
            {item.title}
            {index === 2 ? <span className="sprite_R R"/> : undefined}
          </span>
        </Link>
        ))}
      <div className="effect"/>
    </div>
  )
});
