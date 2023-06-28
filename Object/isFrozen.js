/*
 * @Author: zhuluqiang
 * @Description: 判断一个对象是否被冻结
 * @Date: 2022-12-13 15:59:33
 * @LastEditTime: 2022-12-13 16:35:29
 */

// 冻结的情况
// 1. 可变不确定的非拓展对象
let prevent_frozen = Object.preventExtensions({})
console.log('prevent_frozen',Object.isFrozen(prevent_frozen))

// 2. 删除属性
let del_frozen = { p: 1 }
console.log('del_frozen - 1',Object.isFrozen(del_frozen))
Object.preventExtensions(del_frozen) // 将对象设为不可拓展
console.log('del_frozen - 2',Object.isFrozen(del_frozen))
delete del_frozen.p // 再删除对象中的元素
console.log('del_frozen - 3',Object.isFrozen(del_frozen)) // 此时变为冻结状态

// Object.freeze() 解冻一个对象