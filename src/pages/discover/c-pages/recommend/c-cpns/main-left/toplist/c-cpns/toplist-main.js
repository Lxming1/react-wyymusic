import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import ToplistItem from './toplist-item'

const ToplistMain = memo(() => {
  const { toplist } = useSelector(state => ({
    toplist: state.getIn(['recommendInfo', 'recToplistMes'])
  }), shallowEqual)
  console.log(toplist)
  return (
    <div className='toplistMain'>
      {
        toplist?.map((item, index) => {
          return <ToplistItem item={item} key={item.id} index={index}/>
        })
      }
    </div>
  )
})

export default ToplistMain