const baseURL = useRuntimeConfig().public.baseURL

const request = async (url, options) => { 
  const token = useCookie('token')
  const headers = {
    'Authorization': `Bearer ${token.value}`
  }
  const reqUrl = process.dev ? useRequestURL().origin + url : baseURL + url
  return new Promise((resolve, reject) => { 
    useFetch(reqUrl, { ...options }).then(({ data, error }) => { 
      if (error.value) { 
        reject(error.value)
        return
      }
      resolve(data.value)
    }).catch(err => { 
      reject(err)
    })
  })
}

const http = {
  get: (url, query, headers) => request(url, { method: 'GET', query }, headers),
  post: (url, data, headers) => request(url, { method: 'POST', data }, headers),
  put: (url, data) => request(url, { method: 'PUT', data }),
  delete: (url, data) => request(url, { method: 'DELETE', data })
}

export default http