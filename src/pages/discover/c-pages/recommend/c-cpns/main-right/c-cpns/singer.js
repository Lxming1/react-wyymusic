import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { getImgSize } from 'utils/format-utils'

const Singer = memo(() => {
  const { singer } = useSelector(state => ({
    singer: state.getIn(['recommendInfo','artistMes'])
  }), shallowEqual)
  return (
    <div className="singer">
      <div className="head">
        <span>入驻歌手</span>
        <a href="#/discover/artist">{"查看全部 >"}</a>
      </div>
      <div className="singerMain">
        {
          singer.map(item => {
            return (
              <a key={item.id} className="singerItem" href="#/discover/artist">
                <img src={getImgSize(item.img1v1Url, 62)} alt={item.name}></img>
                <div className="singerIntroduce">
                  <div className='singerName'>{item.name}</div>
                  <div className='singerAlias'>{'专辑：' + item.albumSize}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="footer">
        <a className="applyMusician sprite_button" 
          href="https://music.163.com/st/musician" 
          target="_blank"  
          rel="noreferrer">
          <i className="sprite_button">申请成为网易音乐人</i>
        </a>
      </div>
    </div>
  )
})

export default Singer