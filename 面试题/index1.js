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

// [
//   [
//     {
//       message: '卡片开锁',
//       messageIcon: 3,
//       messageTime: '2019-10-26 01:32:10'
//     }
//   ],
//   [
//     {
//       message: '卡片开锁',
//       messageIcon: 3,
//       messageTime: '2019-10-26 01:32:10'
//     }
//   ]
// ]

// 按照时间排序
const timeSort = arr => arr.sort((a, b) => +new Date(b.messageTime) - +new Date(a.messageTime))

// 按天处理数据组
const dayGroup = arr => {
  // 没有直接返回
  if (arr.length === 0) return []

  let dayArr = []
  let x = 0
  let y = 0
  // 默认第一天的时间
  let currentTime = arr[0].messageTime

  // 是否为同一天
  const isADay = (a, b) => new Date(a).toDateString() === new Date(b).toDateString()

  // 解法思路
  // x = 0 y = 0
  // true y++           只改变y
  // false x++ y = 0    改变x 重置y
  for(let i = 0; i < arr.length; i++) {

    // 判断当前的时间是否和上一天相同
    if (isADay(currentTime, arr[i].messageTime)) {

      // 如果没有数组则添加一个空数组
      if (!dayArr[x]) dayArr[x] = []

      // 如果从不同的天数切换过来,并且xy有数据则++
      if (dayArr[x][y]) y++
      dayArr[x][y] = arr[i]
      y++
    } else {
      x++
      y=0
      // 如果没有数组则添加一个空数组
      if (!dayArr[x]) dayArr[x] = []
      dayArr[x][y] = arr[i]
    }
    currentTime = arr[i].messageTime
  }

  return dayArr
}

const compose = (...fn) => fn.reduce((a, b) => (...args) => a(b(...args)))

let dayList = compose(dayGroup, timeSort)(lockMessageList)

console.log(dayList)

var app = new Vue({
  el: '#app',
  data: {
    lockList: dayList
  },
  computed: {
    lockListLength() {
      let len = 0
      this.lockList.forEach(el => len += el.length)
      return len
    }
  }
})