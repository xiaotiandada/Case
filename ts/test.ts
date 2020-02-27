
declare const Promise: any;

new Promise((resolve: any) => {
  resolve()
}).then(() => {
  console.log(1)

  for (let i = 0; i < 10; i++) {
    console.log('for', i)    
  }
  console.log(2)
}).then(() => {
  console.log(3)
})


const { data: { orderId } } = {data: {orderId:  1}}

console.log(orderId)