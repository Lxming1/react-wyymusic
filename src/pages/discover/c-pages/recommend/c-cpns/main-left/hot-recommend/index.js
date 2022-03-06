import React, { memo, useEffect, useMemo } from 'react'
import CommonSongNav from 'components/recommend-header'
import PlayList from './c-cpns/playlist-main'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { getRecommend } from 'pages/discover/c-pages/recommend/store/actionCreater'

const HotRecommend = memo(() => {
  // 头部导航栏
  const message = useMemo(()=>({
    bigTitle: '热门推荐',
    path: '#/discover/playlist',
    navItem: ['华语', '流行', '摇滚', '民谣', '电子']
  }), [])
  // 推荐歌单信息
  const { playlistMes } = useSelector(state => ({
    playlistMes: state.getIn(['recommendInfo','recommendMes'])
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