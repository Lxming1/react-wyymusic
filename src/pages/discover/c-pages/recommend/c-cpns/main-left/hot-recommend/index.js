import React, { memo, useEffect } from 'react'
import CommonSongNav from 'components/recommend-header'
import PlayList from './c-cpns/playlist-main'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { getRecommend } from 'pages/discover/store/actionCreater'

const HotRecommend = memo(() => {
  // 头部导航栏
  const navItem = ['华语', '流行', '摇滚', '民谣', '电子']
  const message = {
    bigTitle: '热门推荐',
    path: '#/discover/playlist',
    navItem
  }
  // 推荐歌单信息
  const { playlistMes } = useSelector(state => ({
    playlistMes: state.getIn(['discoverInfo','recommendMes'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch])

  return (
    <div>
      <CommonSongNav {...message}/>
      <PlayList playlistMes={playlistMes}/>
    </div>
  )
})

export default HotRecommend