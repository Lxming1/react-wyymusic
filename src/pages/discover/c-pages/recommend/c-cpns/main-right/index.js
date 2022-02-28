import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RemindLogin from './c-cpns/remind-login'
import Singer from './c-cpns/singer'
import { MainRightWrapper } from './style'
import { getArtist, getAnchor } from 'pages/discover/store/actionCreater'
import HotAnchor from './c-cpns/anchor'

const MainRight = memo(() => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtist())
    dispatch(getAnchor())
  }, [dispatch])

  return (
    <MainRightWrapper>
      <RemindLogin/>
      <div className="main">
        <Singer/>
        <HotAnchor/>
      </div>
    </MainRightWrapper>
  )
})

export default MainRight