import request from './request'

export const getSongApi = id => {
  return request(`/song/detail?ids=${id}`)
}