/*
 * chrome 5  / edge 12
 * @Author: zhuluqiang
 * @Description: 如果指定的对象自身有指定的属性，则静态方法 Object.hasOwn() 
 *               返回 true。如果属性是继承的或者不存在，该方法返回 false。
 *               hasOwn(instance, prop):( 要测试的 JavaScript 实例对象, 要测试属性的 String 类型的名称或者 Symbol )
 * @Date: 2022-11-08 14:20:47
 * @LastEditTime: 2022-11-08 15:01:40
 */

const object1 = {
    a: 1,
    b: 2,
    c: 3
}
console.log(Object.keys(object1))

// console.log(Object.hasOwn(object1,'a'))     // true
// console.log(Object.hasOwn(object1,'d'))     // false
object1.d = 1
// console.log(Object.hasOwn(object1,'d'))     // true
object1.d = null
// console.log(Object.hasOwn(object1,'d'))     // true
object1.d = undefined
// console.log(Object.hasOwn(object1,'d'))     // true

// 通过原型链继承的属性
// console.log(Object.hasOwn(object1,'toString'))     // false
// console.log('toString' in object1)     // true

/**
 * 数组可通过索引来验证是否存在
 */
const object2 = ['1','2','3','4','5']
// console.log(Object.hasOwn(object2, 3))      // true
// console.log(Object.hasOwn(object2, 5))      // false