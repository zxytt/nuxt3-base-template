import http from '../utils/request'

export function getDataApi() { 
  return http.get('/api/cars')
}