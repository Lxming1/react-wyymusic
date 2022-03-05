import request from './request'

export const getSongApi = id => {
  return request(`/song/detail?ids=${id}`)
}

export const getSongUrl = id => {
  return request(`/song/url?id=${id}`)
}