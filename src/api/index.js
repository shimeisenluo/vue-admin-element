import request from '@/utils/request'


export function login (data) {
  return request({
    url: '/servie/user/login',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '/servie/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/servie/user/logout',
    method: 'post'
  })
}

export function getList (params) {
  return request({
    url: '/servie/table/list',
    method: 'get',
    params
  })
}