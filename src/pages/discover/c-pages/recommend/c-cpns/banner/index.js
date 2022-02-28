import React, { memo, useRef, useState, useLayoutEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getBanner } from 'pages/discover/store/actionCreater'
import { Carousel } from 'antd';
import { BannerWrapper } from './style';

const Banner = memo(() => {
  // 获取轮播图图片
  const dispatch = useDispatch()
  const { banner } = useSelector(state => ({
    banner: state.getIn(['discoverInfo', 'bannerMes'])
  }), shallowEqual)

  // 发起请求
  useLayoutEffect(() => {
    dispatch(getBanner())
  }, [dispatch])

  // 记录当前展示的图片下标
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // 轮播图Ref
  const carouselRef = useRef()

  // 获取当前展示的图片
  const imageUrl = banner[currentIndex] && banner[currentIndex].imageUrl + '?imageView&blur=40x20'
  
  // 轮播图切换图片时操作函数
  const beforeChange = newIndex => {
    setCurrentIndex(newIndex)
  }

  // 轮播图切换图片时对应className的改变
  const dotClassName = index => (
    'bannerDots sprite_banner ' + 
    ((currentIndex === index) ? 'active' : '')
  )

  // 点击圆点切换操作
  const dotClick = index => {
    setCurrentIndex(index)
    carouselRef.current.goTo(index)
  }

  // 点击左右切换操作
  const leftClick = () => carouselRef.current.prev()
  const rightClick = () => carouselRef.current.next()

  // 下载部分展示内容
  const downLoadMes = 'PC 安卓 iPhone WP iPad Mac 六大客户端'

  // 自定义dots
  const myDots = dots => (
    <ul style={{height: '20px'}}>
      {
        dots.map((item, index) => 
          <li 
            key={index} 
            onClick={() => dotClick(index)}
            className={dotClassName(index)}/>
        )
      }
    </ul>
  )

  // 轮播图片
  const bannerItem = (
    banner.map(item => {
      return (
        <div key={item.encodeId} className="bannerItem">
          <img src={item.imageUrl} alt={item.typeTitle}/>
        </div>
      )
    })
  )

  return (
    <BannerWrapper imageUrl={imageUrl}>
      <div className="wrap-v2" style={{position: 'relative'}}>
        <span className="sprite_banner leftBtn" 
          onClick={() => leftClick()}/>
        <div className="bannerMain">
          <Carousel
            autoplay
            effect="fade" 
            ref={carouselRef}
            pauseOnDotsHover='false'
            appendDots={dots => myDots(dots)}
            beforeChange={(oldI, newI) => beforeChange(newI)}>
            { bannerItem }
          </Carousel>
          <div className="download">
            <a className="downloadBtn" href="#/download"> </a>
            <p>{ downLoadMes }</p>
          </div>
        </div>
        <span 
          className="rightBtn sprite_banner" 
          onClick={() => rightClick()}/>
      </div>
    </BannerWrapper>
  )
})

export default Banner