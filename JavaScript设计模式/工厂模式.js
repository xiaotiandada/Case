console.log('工厂模式');

// 攻击力1-100
const attackPower = () => Math.floor(Math.random() * 100 + 1)

// 战士
class Warrior {
  constructor() {
    this.occupation = '战士'
    this.skill = '单一狂砍'
    this.blood = 100
    this.hit = attackPower()
    // other
  }
}

// 法师
class Mage {
  constructor() {
    this.occupation = '法师'
    this.skill = '集体冰冻'
    this.blood = 100
    this.hit = attackPower()
  }
}

// 射手
class Archer {
  constructor() {
    this.occupation = '射手'
    this.skill = '全局轰炸'
    this.blood = 100
    this.hit = attackPower()
  }
}

// 工厂对象
// class、function、object
class RoleFactory {
  constructor() {}
  createRole(role) {
    let roles = {
      Warrior: Warrior,
      Mage: Mage,
      Archer: Archer
    }

    const Character = roles[role]
    return role ? new Character() : new Warrior()

  }
}

// 创建角色
let roleFactory = new RoleFactory
let warrior = roleFactory.createRole('Warrior')
let mage = roleFactory.createRole('Mage')
let archer = roleFactory.createRole('Archer')

console.log('warrior:', warrior);
console.log('mage:', mage);
console.log('archer:', archer);

console.log('----------')

// 随机角色
const randomRole = (data, number) => {
  if (!data || !data.length || !number) return

  let randomRole = []

  for (let i = 0; i < data.length; i++) {
    let sub = Math.floor(Math.random() * data.length )
    randomRole.push(...data.splice(sub, 1))
  }
  return randomRole
}

// 战斗
const duel = roles => {
  // 最强角色
  let maxRole = null
  // 最高攻击力
  let maxHit = -1
  roles.map(item => {
    console.log(item)
    // 如果攻击力大于最大攻击力
    if (item.hit > maxHit) {
      // 设置当前角色
      maxRole = item
      // 攻击力也替换
      maxHit = item.hit
    } else if (item.hit === maxHit) {
      // 清空
      maxRole = null
      maxHit = -1
    }

  })

  return maxRole
}

const compose = (...fn) => fn.reduce((a, b) => (...args) => a(b(...args)))

let winner = compose(duel, randomRole)([warrior, mage, archer], 2)

if (winner) {
  console.log(`胜利者是: ${winner.occupation}, 他的技能是: ${winner.skill}, 攻击力: ${winner.hit}`)
} else {
  console.log(`这是平局`)
}