import request from "services/request"

// 轮播图
export const getBannerApi = () => {
  return request('/banner')
}
// 热门推荐
export const getRecommendApi = () => {
  return request('/personalized?limit=8')
}
// 新碟上架
export const getAlbumApi = () => {
  return request('/top/album?limit=10')
}
// 榜单
export const getToplistApi = () => {
  return request('/toplist')
}
// 榜单详情
export const getToplistItemApi = item => {
  return request(`/top/list?id=${item.id}`)
}
// 入驻歌手
export const getArtistApi = () => {
  return request('/toplist/artist?limit=5')
}
// 热门主播
export const getAnchorApi = () => {
  return request('/dj/hot?limit=10')
}
// 歌单详情
export const getPlaylistDetailApi = id => {
  return request(`/playlist/detail?id=${id}`)
}

