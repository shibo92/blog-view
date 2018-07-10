export function copyDeep(origin) {
  if (origin instanceof Object) {
    if (isArray(origin)) {
      var target = []
      for (var i = 0; i < origin.length; i++) {
        target.push(copyDeep(origin[i]))
      }
      return target
    } else {
      var target = {}
      for (var item in origin) {
        target[item] = copyDeep(origin[item])
      }
      return target
    }
  } else {
    return origin
  }
}

function isArray(value) {
  return !!value && value instanceof Array
}

function copyArr(arrOrigin) {
  var arr = []
  for (var i = 0; i < arrOrigin.length; i++) {
    arr.push(arrOrigin[i])
  }
  return arr
}

function copyObj(objOrigin) {
  var obj = {}
  for (var item in objOrigin) {
    obj[item] = objOrigin[item]
  }
  return obj
}
