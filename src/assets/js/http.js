import axios from 'axios'
import {codeState} from '@/assets/js/code'
import {vm} from '@/main'
import {routePath} from '@/router/routePath'

axios.defaults.withCredentials = true

/*********************************************************
 * Fetch 请求参数
 * url =》 请求路径
 *
 *  data =》 请求数据
 *是否校验token
 *data.necessary: false：不校验，true：校验
 *
 *file =》 是否上传文件： false：不上传， true：上传
 *
 *
 */
axios.default.timeout = 6000000
axios.interceptors.response.use(res => {
  let code = res.data.code
  switch (code) {
    // 正常交互
    case codeState.SUCCESS:
      // if (res.data.msg) {
      //   setLocalStorage({token: res.data.msg})
      // }
      break
    case codeState.ERROR:
      /*vm.$message({
        message: res.data.message,
        showClose: true,
        type: 'warning',
        duration: 2000
      })*/
      break
    case codeState.AUTH_ERROR:
      /*vm.$message({
        message: '授权过期，请重新登录',
        showClose: true,
        type: 'warning',
        duration: 2000
      })
      vm.$router.push(routePath.login)*/
      break
    default:
      vm.$router.push(routePath.ErrorPage)
  }
  return res
}, error => {
  /*vm.$message({
    message: error,
    showClose: true,
    type: 'warning',
    duration: 2000
  })*/
  console.log("error")
})

export function Fetch(url, data, method, file) {
  if ('GET' == method) {
    var symbolSr = new RegExp('/:');
    if (symbolSr.test(url)) {
      for (var key in data) {
        url = url.replace(':' + key, data[key]);
      }
    } else {
      url += data;
    }
  }
  if (file) {
    // 需要上传文件
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        data: data,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        method: method,
        withCredentials: true
      }).then(response => {
          resolve(response)
        }
      )
        .catch(error => {
            reject(error)
          }
        )
    })
  } else {
    // 不需要上传文件
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        data: data,
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            if ((typeof data[it]) === 'object') {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(JSON.stringify(data[it])) + '&'
            } else {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
          }
          return ret
          // let ret = qs.stringify(data)
          // return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: method,
        withCredentials: true
      }).then(response => {
          resolve(response)
        }
      )
        .catch(error => {
            reject(error)
          }
        )
    })
  }
}
