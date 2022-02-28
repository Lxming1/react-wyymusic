import React, { memo } from 'react'
import { SongNav } from './style'

const CommonSongNav = memo(({bigTitle, path, navItem}) => {
  return (
    <SongNav>
      <div className="headNav sprite_02">
        <div className="headLeft">
          <a href={path} className="bigTitle">{bigTitle}</a>
          {navItem && 
            <div className='navItemCpn'>
              {
                navItem.map((item, index) => (
                  <span key={index}>
                    {index !== 0 && <span className="line">|</span>}
                    <a href={path+'?cat='+item}>{item}</a>
                  </span>
                ))
              }
            </div>
          }
        </div>
        <div className="headRight">
          <a href={path} className='more'>更多</a>
          <span className='sprite_02'/>
        </div>
      </div>
    </SongNav>
  )
})

export default CommonSongNav