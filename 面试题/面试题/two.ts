const statusFormat = (data: number) => {
  const status = {
    // -1: '更多',
    0: '临时密码',
    1: '动态密码',
    2: '远程开锁',
    3: '密码管理',
    4: '指纹管理',
    5: '卡管理',
    6: '蓝牙开锁'
  }

  // 数字转数组
  const dataList = (data + '').split('')
  let list = []
  for (let i = 0; i < dataList.length; i++) {
    if (i > 3) break
    list.push({
      // 根据code title 显示icon 和 标题
      code: i < 3 ? dataList[i] : -1,
      title: i < 3 ? status[dataList[i]] || '未知' : '更多'
    })
  }
  return list
}

console.log(statusFormat(235406789))