/**
 *  chrome 5  / edge 12
 *  直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
 *  Object.defineProperty(obj, prop, descriptor)
 *  2022-11-08 回顾
 */

const a = {c: 1}
Object.defineProperty(a,'property1',{
    value: 11,
    writable: false     // 是否可修改
})
a.property1 = 22

const b = {d: 2}
Object.defineProperty(b,'property1',{
    value: 11,
    writable: true
})
b.property1 = 22
// console.log(a,a.property1, b,b.property1)       // (11 22)