import { 
  ClEARPLISTDETAIL,
  GETALBUM,
  GETANCHOR,
  GETARTIST, 
  GETBANNERMES, 
  GETPLAYLISTDETAIL, 
  GETRECOMMEND, 
  GETRMDTOPLIST 
} from "./contant";
import { 
  getBannerApi, 
  getRecommendApi,
  getAlbumApi,
  getToplistApi,
  getToplistItemApi,
  getArtistApi,
  getAnchorApi,
  getPlaylistDetailApi
} from "services/recommend";

// 轮播图
export const changeBanner = (banner) => ({
  type: GETBANNERMES,
  banner
})

export const getBanner = () => {
  return dispatch => {
    getBannerApi().then(res => {
      dispatch(changeBanner(res.banners))
    })
  }
}

// 热门推荐
export const changeRecommend = (recommend) => ({
  type: GETRECOMMEND,
  recommend
})

export const getRecommend = () => {
  return dispatch => {
    getRecommendApi().then(res => {
      dispatch(changeRecommend(res.result))
    })
  }
}

// 新碟上架
export const changeAlbum = (album) => ({
  type: GETALBUM,
  album
})

export const getAlbum = () => {
  return dispatch => {
    getAlbumApi().then(res => {
      dispatch(changeAlbum(res.albums))
    })
  }
}

// 榜单
export const changeRecommendToplist = (recommendToplist) => ({
  type: GETRMDTOPLIST,
  recommendToplist
})

export const getRecommedToplist = () => {
  return dispatch => {
    getToplistApi().then(res => {
      const mes = res.list.filter((item, index) => index < 3)
      const promiseList = []
      for (let i in mes) {
        promiseList.push(getToplistItemApi(mes[i]).then(res1 => {
          mes[i].tracks = res1.playlist.tracks.filter((item, index) => index < 10)
        }))
      }
      Promise.all(promiseList).then(res => {
        dispatch(changeRecommendToplist(mes))
      })
    })
  }
}

// 歌手
export const changeArtist = (artist) => ({
  type: GETARTIST,
  artist
})

export const getArtist = () => {
  return dispatch => {
    getArtistApi().then(res => {
      dispatch(changeArtist(res.list.artists.filter((item, index) => index < 5)))
    })
  }
}

// 主播
export const changeAnchor = (anchor) => ({
  type: GETANCHOR,
  anchor
})

export const getAnchor = () => {
  return dispatch => {
    getAnchorApi().then(res => {
      dispatch(changeAnchor(res.djRadios))
    })
  }
}

// 歌单详情
export const changePlaylistDetail = playlistItem => ({
  type: GETPLAYLISTDETAIL,
  playlistItem
})

export const clearPlaylistDetail = () => ({
  type: ClEARPLISTDETAIL
})

export const getPlaylistDetail = id => {
  return dispatch => {
    getPlaylistDetailApi(id).then(res => {
      dispatch(changePlaylistDetail(res.playlist))
    })
  }
}