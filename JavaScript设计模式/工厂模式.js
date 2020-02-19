console.log('工厂模式');


// 战士
class Warrior {
  constructor() {
    this.occupation = '战士'
    this.skill = '单一狂砍'
    this.blood = 100
    this.hit = 150
    // other
  }
}

// 法师
class Mage {
  constructor() {
    this.occupation = '法师'
    this.skill = '集体冰冻'
    this.blood = 100
    this.hit = 120
  }
}

// 射手
class Archer {
  constructor() {
    this.occupation = '射手'
    this.skill = '全局轰炸'
    this.blood = 100
    this.hit = 80
  }
}

// 工厂对象
// class、function、object 设计处理函数
class RoleFactory {
  constructor() {}
  createRole(role) {
    let roler = null
    switch(role) {
      case 'Warrior':
        roler = new Warrior()
        break
      case 'Mage':
        roler = new Mage()
        break
      case 'Archer':
        roler = new Archer()
        break
      default:
        roler = null
    }
    return roler
  }
}

const duel = (rolesA, rolesB) => {
  let winner = null
  if (rolesA.hit > rolesB.hit) {
    winner = rolesA
  } else if (rolesA.hit < rolesB.hit) {
    winner = rolesB
  } else {
    winner = null
  }

  if (winner) {
    console.log(`胜利者是: ${winner.occupation}, 他的技能是: ${winner.skill}, 攻击力: ${winner.hit}`)
  } else {
    console.log(`这是平局 ${rolesA.occupation}和${rolesB.occupation}`)
  }
}

let roleFactory = new RoleFactory
let warrior = roleFactory.createRole('Warrior')
let mage = roleFactory.createRole('Mage')
let archer = roleFactory.createRole('Archer')

console.log('warrior', warrior);
console.log('mage', mage);
console.log('archer', archer);

duel(warrior, mage)