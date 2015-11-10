import baseFetch from 'node-fetch'

const defaults = {
  credentials: 'same-origin',
  method: 'get',
  headers: {
    'Accept': 'application/json',
  }
}

export default function fetch(url, options) {
  options = options || defaults
  return baseFetch(url, options)
}

export function get(url, options) {
  options = options || defaults
  options.method = 'GET'
  return fetch(url, options)
}

export function post(url, options) {
  options = options || defaults
  options.method = 'post'

  if (typeof options.body == 'object') {
    options.body = JSON.stringify(options.body)
    options.headers['Content-Type'] = 'application/json'
  }

  return fetch(url, options)
}

export function json(response) {
  return response.json()
}

export function ok(response) {
  if (response.ok) {
    return response
  } else {
    return Promise.reject(response.statusText)
  }
}
