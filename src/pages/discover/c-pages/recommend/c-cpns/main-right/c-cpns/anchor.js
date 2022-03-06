import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { getImgSize } from 'utils/format-utils'

const HotAnchor = memo(() => {
  const { anchor } = useSelector(state => ({
    anchor: state.getIn(['recommendInfo', 'anchorMes'])
  }), shallowEqual)
  return (
    <div className="hotAnchor">
      <div className="head">
        <span>热门主播</span>
      </div>
      <div className="anchorMain">
        {
          anchor.map((item, index) => {
            return (
              <div key={item.id} className='anchorItem' title={item.name}>
                <img src={getImgSize(item.picUrl, 40)} alt={item.name} />
                <div className='anchorIntroduce'>
                  <a href="#/" className='text-nowrap' title={item.name}>{item.name}</a>
                  <span className='text-nowrap' title={item.rcmdtext}>{item.rcmdtext}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
})

export default HotAnchor