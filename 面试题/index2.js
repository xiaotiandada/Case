const list = [
  {
      message: "小明开锁",
      messageIcon: 3,
      messageTime: "2019-1-9 20:30:30"
  },
  {
    message: "小明开锁",
    messageIcon: 3,
    messageTime: "2019-1-9 10:30:30"
  },
  {
      message: "小明开锁2",
      messageIcon: 3,
      messageTime: "2019-1-9 8:30:30"
  },
  {
      message: "小李开锁",
      messageIcon: 4,
      messageTime: "2019-1-10 19:30:30"
  },
  {
    message: "小明开锁2",
    messageIcon: 3,
    messageTime: "2019-1-9 00:00:00"
  },
  {
      message: "小亮开锁",
      messageIcon: 3,
      messageTime: "2019-1-13 8:30:30"
  },
  {
    message: "小明开锁2",
    messageIcon: 3,
    messageTime: "2019-1-8 00:00:00"
  },
  {
    message: "小明开锁3",
    messageIcon: 3,
    messageTime: "2019-1-8 23:59:59"
  },
  {
    message: "小亮开锁",
    messageIcon: 3,
    messageTime: "2019-1-13 10:30:30"
  },
];

// 获取某一天的开始时间，也就是00:00:00 的时间戳
const getDayStartTime = time => {
  if (!time) {
      return;
  }

  const localDate = new Date(time).toLocaleDateString();
  localDateTimeStamp = +new Date(localDate);

  return localDateTimeStamp;
};

// 获取某一天的结束时间，也就是23:59:59秒的时间戳
const getDayEndTime = time => {
  if (!time) {
      return;
  }

  // 先拿到开始时间的时间戳
  let startTime = getDayStartTime(time);

  // 一天有多少秒
  const daySeconds = 24 * 60 * 60;

  // 开始时间戳加上这个秒就是等于结束时间
  // startTime是毫秒，需要转换成秒, 由于是整点，所以不用担心小数问题
  startTime = startTime / 1000;

  // 开始时间加上这一天的秒数，就等于这一天的结束时间
  let endTime = startTime + daySeconds;
  // 这里还需要转换成对应的毫秒，方便后面去做判断
  endTime = endTime * 1000;

  // 这里需要注意一下，我们的结束时间是算得这一天的秒数，实际上也算上了第二天的开始，
  // 如果就像这样算，那么需要再判单的时候应该是小于，不能是小于等于，如果是小于等于的话就把第二天的开始时间也算进来了
  // 如果不想这样算，那就应该是24 * 60 * 60 - 1, 这样确保是23:59:59，而不是00:00:00
  return endTime;
};

// 整合数据之前的操作
const preAggreList = data => {
  if (!data || !data.length) {
      return;
  }

  return data.map(item => {
      return {
          ...item,
          startTimeStamp: getDayStartTime(item.messageTime),
          endTimeStamp: getDayEndTime(item.messageTime)
      };
  });
};

// 整合数据
const aggreList = data => {
  data = data.map(item => {
      try {
          const filterTime = data.filter(
              aggre =>
                  item.startTimeStamp <= new Date(aggre.messageTime) &&
                  item.endTimeStamp > new Date(aggre.messageTime)
          );

          return JSON.stringify(filterTime);
      } catch (e) {
          return item;
      }
  });

  console.log(data)

  let arr = [...new Set(data)];
  console.log(arr)

  return arr
};

const parserList = data => {
  if (!data || !data.length) {
      return;
  }

  return data.map(item => {
      try {
          return JSON.parse(item);
      } catch (e) {
          return item;
      }
  });
};

const compose = (...fn) => fn.reduce((a, b) => (...args) => a(b(...args)));

const handler = compose(parserList, aggreList, preAggreList)


const finalList = handler(list);
console.log(finalList);



// {
//   // https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj

//   let arr = [1,2,3,4,5]

//   // console.log(arr.reduce((accumulator, currentValue) => {
//   //   console.log(accumulator, currentValue)
//   //   return accumulator + currentValue
//   // }))

//   console.log(arr.reduceRight((accumulator, currentValue) => {
//     console.log(accumulator, currentValue)
//     return accumulator + currentValue
//   }, 100))


//   const add = (a, b) => a + b
//   const mult = (a, b) => a * b

//   console.log(add(2, mult(3,5)))


//   const users = [
//     { name: "Jeff", age: 14 },
//     { name: "Jack", age: 18 },
//     { name: "Milady", age: 22 },
//   ]

//   const filter = (cb, arr) => arr.filter(cb)
//   const map = (cb, arr) => arr.map(cb)

//   // console.log(filter(u => u.age >= 18, users))
//   // console.log(map(u => u.name, users))


//   console.log(map(u => u.name, filter(u => u.age >= 18, users)))

// }

// {
//   // compose ?
//   console.log('-------')
//   const users = [
//     { name: "Jeff", age: 14 },
//     { name: "Jack", age: 18 },
//     { name: "Milady", age: 22 },
//   ]


//   const filter = cb => arr => arr.filter(cb)
//   const map = cb => arr => arr.map(cb)

//     // console.log(map(u => u.name)(users))
//     // console.log(filter(u => u.age >= 18)(users))

//   // function compose (...fn) {
//   //   return function (args) {
//   //     return fn.reduceRight(function(arg, fn) {
//   //       // 如果有args, arg测试数据, 数据传入fn 第一次的fn则是filter
//   //       // 第一次结束 返回了filter后的数据
//   //       // 第二次使用map用filter的返回结果
//   //       return fn(arg)
//   //     }, args)
//   //   }
//   // }

//   const compose = (...fn) => args => fn.reduceRight((arg, fn) => fn(arg), args)

//   console.log(compose(map(u => u.name), filter(u => u.age >= 18))(users))
// }


// {
//   // pipe ?
//   // 统计
//   let word = ['foo', 'word', 'acc']

//   const reduce = cb => arr => arr.reduce(cb)
//   const map = cb => arr => arr.map(cb)

//   const mapWord = map(() => 1)
//   const reduceWord = reduce((acc, curr) => acc += curr, 0)

//   const pipe = (...fn) => args => fn.reduce((arg, fn) => fn(arg), args);

//   console.log(pipe(mapWord, reduceWord)(word))
// }