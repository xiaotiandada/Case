// 基于localstorage
// TODO
// const { default: axios } = require("axios")

class ItemCache {
  constructor(data, timeout) {
    this.data = data
    // 设定超时时间，设定为多少秒
    this.timeout = timeout
    // 创建对象时候的时间，大约设定为数据获得的时间
    this.cacheTime = (new Date()).getTime()
  }
}

class ExpiresCache {
  static cacheMap = new Map()

  static isOverTime(name) {
    const data = ExpiresCache.cacheMap.get(name)

    // 没有数据 一定超时
    if (!data) return true

    // 获取系统当前时间戳
    const currentTime = (new Date()).getTime()

    // 获取当前时间与存储时间的过去的秒数
    const overTime = (currentTime - data.cacheTime) / 1000

    // 如果过去的秒数大于当前的超时时间，也返回null让其去服务端取数据
    if (Math.abs(overTime) > data.timeout) {
      ExpiresCache.cacheMap.delete(name)
      return true
    }

    // 不超时
    return false
  }

  // 当前 data 在 cache 中是否超时
  static has(name) {
    return !ExpiresCache.isOverTime(name)
  }
  // Delete cache 中的 data
  static delete(name) {
    return ExpiresCache.cacheMap.delete(name)
  }

  static get(name) {
    const isDataOverTime = ExpiresCache.isOverTime(name)
    //如果 数据超时，返回null，但是没有超时，返回数据，而不是 ItemCache 对象
    return isDataOverTime ? null : ExpiresCache.cacheMap.get(name).data
  }

  // 默认存储20分钟
  static set(name, data, timeout = 1200) {
    // 设置 itemCache
    const itemCache = new ItemCache(data, timeout)
    //缓存
    ExpiresCache.cacheMap.set(name, itemCache)
    console.log('ExpiresCache.cacheMap', ExpiresCache.cacheMap)
  }
}

// generate key
function generateKey(name, params) {
  const generateKeyError = new Error("Can't generate key from name and argument")
  const paramsStringify = JSON.stringify(params)

  try {
    return `${name}:${paramsStringify}`
  } catch (error) {
    console.log(generateKeyError)
    return false
  }
}

const getWare = async (params) => {
  const key = generateKey('getWare', params)
  let data = key ? ExpiresCache.get(key) : key
  if (!data) {
    const res = await axios.get('https://api.smartsignature.io/tags/hotest?pagesize=20&page=1', params)
    // 使用 10s 缓存，10s之后再次get就会 获取null 而从服务端继续请求
    ExpiresCache.set(key, res.data.data, 10)
    return res.data.data
  }
  return data
}

document.querySelector('#api1').addEventListener('click', async () => {
  const res = await getWare({ pagesize: 20, page: 1 })
  console.log('res1', res)
}, false)

document.querySelector('#api2').addEventListener('click', async () => {
  const res = await getWare({ pagesize: 20, page: 2 })
  console.log('res2', res)
}, false)

document.querySelector('#api3').addEventListener('click', async () => {
  const res = await getWare({ pagesize: 20, page: 3 })
  console.log('res3', res)
}, false)