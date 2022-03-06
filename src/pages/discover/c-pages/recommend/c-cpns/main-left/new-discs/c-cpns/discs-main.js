import { Carousel } from 'antd'
import React, { memo } from 'react'
import { useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { DiscsMainWrapper } from '../style'
import DiscsItem from './discs-item'

const DiscsMain = memo(() => {
  const { albumMes } = useSelector(state => ({
    albumMes: state.getIn(['recommendInfo', 'albumMes'])
  }), shallowEqual)

  const carouselRef = useRef()
  const arr = []
  for(let i = 0; i< albumMes.length / 5; i++) {
    arr.push([])
  }
  for(let i in albumMes) {
    const index = Math.floor(i / 5)
    arr[index].push(albumMes[i])
  }

  return (
    <DiscsMainWrapper>
      <span className="leftBtn sprite_02" onClick={() => carouselRef.current.prev()}></span>
      <div className="carousel">
        {/* 走马灯组件包含的第一层子组件默认是inline-block布局，
          若要在一层中包含多个item，则需要在第二层开始设置布局 */}
        <Carousel dots={false} ref={carouselRef} speed={1300}>
          {
            arr.map((item, index) => (
              <div className="mainBox" key={index}>
                <div className="mainMes">
                  {
                    item.map((item1) => (
                      <DiscsItem item={item1} key={item1.id}/>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
      <span href="" className="rightBtn sprite_02" onClick={() => carouselRef.current.next()}></span>
    </DiscsMainWrapper>
  )
})

export default DiscsMain