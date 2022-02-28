import React, { memo, useEffect } from 'react'
import CommonSongNav from 'components/recommend-header'
import { useDispatch } from 'react-redux'
import { getRecommedToplist } from 'pages/discover/store/actionCreater'
import { ToplistWrapper } from './style'
import ToplistMain from './c-cpns/toplist-main'

const Toplist = memo(() => {
  // 头部导航栏
  const message = {
    bigTitle: '榜单',
    path: '#/discover/toplist'
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommedToplist())
  }, [dispatch])

  return (
    <ToplistWrapper>
      <CommonSongNav {...message}/>
      <ToplistMain/>
    </ToplistWrapper>
  )
})

export default Toplist