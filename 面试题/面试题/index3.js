// 根据index2的灵感, 自己模仿的

// 去掉第一个数据处理 换成排序

let lockMessageList = [
  {
    user: '爸爸',
    message: '指纹开锁',
    messageIcon: 1,
    messageTime: '2019-11-28 00:00:00'
  },
  {
    message: '密码开锁',
    messageIcon: 2,
    messageTime: '2019-11-28 01:32:20'
  },
  {
    message: '卡片开锁',
    messageIcon: 3,
    messageTime: '2019-11-28 23:59:59'
  },
  {
    user: '妈妈',
    message: '指纹开锁',
    messageIcon: 1,
    messageTime: '2019-11-28 09:22:20'
  },
  {
    user: '爸爸',
    message: '指纹开锁',
    messageIcon: 1,
    messageTime: '2019-11-27 09:32:20'
  },
  {
    message: '密码开锁',
    messageIcon: 2,
    messageTime: '2019-11-25 09:12:20'
  },
  {
    message: '卡片开锁',
    messageIcon: 3,
    messageTime: '2019-11-26 02:32:20'
  },
  {
    message: '卡片开锁',
    messageIcon: 3,
    messageTime: '2019-11-26 04:32:20'
  },
  {
    message: '卡片开锁',
    messageIcon: 3,
    messageTime: '2019-11-26 02:12:20'
  },
  {
    user: '妈妈',
    message: '指纹开锁',
    messageIcon: 1,
    messageTime: '2019-11-18 06:32:20'
  },
  {
    user: '妈妈',
    message: '指纹开锁',
    messageIcon: 1,
    messageTime: '2019-11-18 06:22:20'
  },
  {
    message: '卡片开锁2',
    messageIcon: 3,
    messageTime: '2019-10-26 01:32:10'
  },
  {
    message: '卡片开锁1',
    messageIcon: 3,
    messageTime: '2019-10-26 11:11:11'
  },
  {
    message: '卡片开锁',
    messageIcon: 3,
    messageTime: '2018-10-26 11:11:10'
  },
]

// 排序
const sortList = arr => arr.sort((a, b) => +new Date(b.messageTime) - +new Date(a.messageTime))

// 比对数据
const aggreLis = arr => {
  if (!arr || !arr.length) return arr

  // 是否为同一天
  const isADay = (a, b) => new Date(a).toDateString() === new Date(b).toDateString()

  let aggrrData = arr.map(item => {
    try {
      const filterItem = arr.filter(aggre => isADay(item.messageTime, aggre.messageTime))
      return JSON.stringify(filterItem)
    } catch (error) {
      return item
    }
  })

  return [...new Set(aggrrData)]
}

// 解析数据
const parseList = arr => {
  if (!arr || !arr.length) return arr

  return arr.map(item => {
    try {
      return JSON.parse(item)
    } catch (error) {
      return item
    }
  })
}

const compose = (...fn) => fn.reduce((a, b) => (...args) => a(b(...args)))


let lockList = compose(parseList, aggreLis, sortList)(lockMessageList)
console.log(lockList)

var app = new Vue({
  el: '#app',
  data: {
    lockList: lockList
  },
  computed: {
    lockListLength() {
      let len = 0
      this.lockList.forEach(el => len += el.length)
      return len
    }
  }
})
