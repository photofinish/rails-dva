import axios from 'axios'
import Qs from 'qs'

function createAxiosInstance(url){
  const instance =  axios.create({
    baseURL: url,
    timeout: 20000,
    headers: {
    },
    paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
  })

  instance.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  instance.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    switch (error.response.status) {
      // case 500:
      //   break
      // case 422:
      //   break
      // case 413:
      //   break
      // case 403:
      //   break
      // case 404:
      //   break
      // case 400:
      //   break
      // case 0:
      //   break
      default:
        console.log(error)
    }
    return Promise.reject(error)
  })
  return instance
}

export default createAxiosInstance()
