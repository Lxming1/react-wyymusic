import { GETALBUM, GETBANNERMES, GETRECOMMEND } from "./contant";
import request from "services/request"

export const addBanner = (banner) => ({
  type: GETBANNERMES,
  banner
})

export const getBanner = (dispatch, getState) => {
  request('/banner').then(res => {
    dispatch(addBanner(res.banners))
  })
}

export const addRecommend = (recommend) => ({
  type: GETRECOMMEND,
  recommend
})

export const getRecommend = (dispatch, getState) => {
  request('/personalized?limit=8').then(res => {
    dispatch(addRecommend(res.result))
  })
}

export const addAlbum = (album) => ({
  type: GETALBUM,
  album
})

export const getAlbum = (dispatch, getState) => {
  request('/top/album?limit=10').then(res => {
    dispatch(addAlbum(res.albums))
  })
}