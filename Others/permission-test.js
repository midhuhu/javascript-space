/**
 * 利用位运算实现权限组合，写出对应的权限操作（组合权限、删除权限、判断权限、添加权限、保留指定权限)的例子
 */

// 权限定义
const R = 1 // 读权限，二进制表示为 0001
const W = 2 // 写权限，二进制表示为 0010
const X = 4 // 执行权限，二进制表示为 0100
const D = 8 // 删除权限，二进制表示为 1000

// 组合权限
// p1: 用户权限  p2: 需要组合的权限
function combine(p1, p2) {
    return p1 | p2
}

// 删除权限
// p1: 用户权限  p2: 需要删除的权限
function remove(p1, p2) {
    return p1 & ~p2
}

// 判断权限
// p1: 用户权限  p2: 需要判断的权限
function has(p1, p2) {
    return (p1 & p2) === p2
}

// 添加权限
// p1: 用户权限  p2: 需要添加的权限
function add(p1, p2) {
    return p1 | p2
}

// 保留指定权限
// p1: 用户权限  p2: 需要保留的权限
function retained(p1, p2) {
    return p1 & p2
}

// 示例
const userPer = combine(R | W, X)
console.log('用户权限:', userPer.toString(2))

const newPer = remove(userPer, R)
console.log('新权限:', newPer.toString(2))

has(newPer, R) ? console.log('新权限拥有读权限') : console.log('新权限没有读权限')

const updatedPer = add(userPer, W)
console.log('用户更新后的权限:', updatedPer.toString(2))

const retainedPer = retained(userPer, R | X)
console.log('用户保留的权限:', retainedPer.toString(2))
