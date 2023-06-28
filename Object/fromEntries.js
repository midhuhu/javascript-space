/*
 * @Author: zhuluqiang
 * @Description: 把键值对列表转换为一个对象。与entries()方法相反。
 * @Date: 2022-08-03 11:24:57
 * @LastEditTime: 2022-11-08 11:09:51
 */

// 类似 Array 、 Map 或者其它实现了可迭代协议的可迭代对象。
// Map
const entries = new Map([
    ['name', '张三'],
    ['age', 18],
])
// Array
const arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];


const obj1 = Object.fromEntries(entries)
const obj2 = Object.fromEntries(arr)
console.log(obj1) // { name: '张三', age: 18 }
console.log(obj2) // { 0: 'a', 1: 'b', 2: 'c' }

