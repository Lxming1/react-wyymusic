import React, { memo, useEffect } from 'react'
import CommonSongNav from 'components/recommend-header'
import { useDispatch } from 'react-redux'
import { getAlbum } from 'pages/discover/store/actionCreater'
import DiscsMain from './c-cpns/discs-main'

const NewDiscs = memo(() => {
  // 头部导航栏
  const message = {
    bigTitle: '新碟上架',
    path: '#/discover/album'
  }
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlbum())
  }, [dispatch])

  return (
    <div style={{marginTop: '35px'}}>
      <CommonSongNav {...message}/>
      <DiscsMain/>
    </div>
  )
})

export default NewDiscs