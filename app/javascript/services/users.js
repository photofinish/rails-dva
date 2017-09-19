import request from '../utils/request'
import { PAGE_SIZE } from '../constants/index.js'

export function fetch({ page = 1 }) {
    //return request.get('/api/users', { _page: page, _limit: 5})
  const params = { _page: page, _limit: PAGE_SIZE}
  return request.get('http://jsonplaceholder.typicode.com/users', { params })
}
