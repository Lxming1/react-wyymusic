import React, { memo } from 'react'
import { getImgSize } from 'utils/format-utils'

const ToplistItem = memo(({item, index}) => {
  const leftArr = [20, 20.4, 20.9]
  const left = leftArr[index]
  const jumpLink = `#/discover/toplist?id=${item.id}`
  const toplistColor = index => {
    return index + 1 < 4 ? '#c10d0c' : '#666666'
  }

  return (
    <div className='toplistItem'>
      <div className='top'>
        <div className='imgWrapper' title={item.name} style={{marginLeft: left}}>
          <img src={getImgSize(item.coverImgUrl, 80)} alt={item.name}/>
          <a href={jumpLink} className="sprite_covor"> </a>
        </div>
        <div className='rightMes'>
          <a href={jumpLink} className="title" title={item.name}>{item.name}</a>
          <div className='rightIcon'>
            <a className='playIcon sprite_02 icon' title="播放" href="#/"> </a>
            <a className='collectIcon sprite_02 icon' title='收藏' href="#/"> </a>
          </div>
        </div>
      </div>
      <ol className='main'>
        {
          item.tracks.map((item, index) => {
            return (
              <li key={item.id} className='mainItem' title={item.name}>
                <span style={{color: toplistColor(index)}}>{index+1}</span>
                <a href='#/discover/toplist' className="name">{item.name}</a>
                <div className="oper">
                  <a href="#/" title="播放" className="play sprite_02"> </a>
                  <a href="#/" title="添加到播放列表" className="addToList sprite_icon2"> </a>
                  <a href="#/" title="收藏" className="collect sprite_02"> </a>
                </div>
              </li>
            )
          })
        }
        <li><a href="#/discover/artist" className="all">{'查看全部>'}</a></li>
      </ol>
    </div>
  )
})

export default ToplistItem