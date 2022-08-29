import {
  GETALBUM,
  GETANCHOR,
  GETARTIST,
  GETBANNERMES,
  GETPLAYLISTDETAIL,
  GETRECOMMEND,
  GETRMDTOPLIST,
} from './contant'
import {
  getBannerApi,
  getRecommendApi,
  getAlbumApi,
  getArtistApi,
  getAnchorApi,
  getPlaylistDetailApi,
} from 'services/recommend'

// 轮播图
export const changeBanner = (banner) => ({
  type: GETBANNERMES,
  banner,
})

export const getBanner = () => {
  return (dispatch) => {
    getBannerApi().then((res) => {
      dispatch(changeBanner(res.banners))
    })
  }
}

// 热门推荐
export const changeRecommend = (recommend) => ({
  type: GETRECOMMEND,
  recommend,
})

export const getRecommend = () => {
  return (dispatch) => {
    getRecommendApi().then((res) => {
      dispatch(changeRecommend(res.result))
    })
  }
}

// 新碟上架
export const changeAlbum = (album) => ({
  type: GETALBUM,
  album,
})

export const getAlbum = () => {
  return (dispatch) => {
    getAlbumApi().then((res) => {
      dispatch(changeAlbum(res.albums))
    })
  }
}

// 榜单
export const changeRecommendToplist = (recommendToplist) => ({
  type: GETRMDTOPLIST,
  recommendToplist,
})

export const getRecommedToplist = () => {
  return (dispatch) => {
    const promiseList = []
    const ids = [19723756, 3779629, 2884035]
    for (let id of ids) {
      promiseList.push(getPlaylistDetailApi(id))
    }
    Promise.all(promiseList).then(res => {
      const arr = []
      res.forEach(item => {
        const songObj = item.playlist
        const tracks = songObj.tracks.slice(0, 10)
        songObj.tracks = tracks
        arr.push(songObj)
      })
      return arr
    }).then((res) => {
      dispatch(changeRecommendToplist(res))
    }).catch(err => {
      console.log(err)
    })
  }
}

// 歌手
export const changeArtist = (artist) => ({
  type: GETARTIST,
  artist,
})

export const getArtist = () => {
  return (dispatch) => {
    getArtistApi().then((res) => {
      dispatch(changeArtist(res.list.artists.filter((item, index) => index < 5)))
    })
  }
}

// 主播
export const changeAnchor = (anchor) => ({
  type: GETANCHOR,
  anchor,
})

export const getAnchor = () => {
  return (dispatch) => {
    getAnchorApi().then((res) => {
      dispatch(changeAnchor(res.djRadios))
    })
  }
}

// 歌单详情
export const changePlaylistDetail = (playlistItem) => ({
  type: GETPLAYLISTDETAIL,
  playlistItem,
})

export const getPlaylistDetail = (id) => {
  return (dispatch) => {
    getPlaylistDetailApi(id).then((res) => {
      dispatch(changePlaylistDetail(res.playlist))
    })
  }
}
