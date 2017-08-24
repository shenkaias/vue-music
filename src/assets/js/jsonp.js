import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) { // 第一个err 为null时(没有出错)，表示请求成功
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    // url += '&' + k + '=' + encodeURIComponent(value)
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : '' // 当url不为空时，去掉第一个'&'
}
