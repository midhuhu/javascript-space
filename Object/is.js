/*
 * @Author: zhuluqiang
 * @Description: 判断两个值是否为同一个值
 * @Date: 2022-11-08 15:18:23
 * @LastEditTime: 2022-11-08 15:50:47
 * Object.is(value1, value2) : (被比较的第一个值,被比较的第二个值)
 */


/**
 * 都是 undefined
 * 都是 null
 * 都是 true 或都是 false
 * 都是相同长度、相同字符、按相同顺序排列的字符串
 * 都是相同对象（意味着都是同一个对象的值引用）
 * 都是数字且
 *      都是 +0
 *      都是 -0
 *      都是 NaN
 *      都是同一个值，非零且都不是 NaN
 */
const a = []
const b = []
console.log(Object.is(a, a))      // true
console.log(Object.is(a, b))      // false
console.log(Object.is(a, []))      // false
console.log(Object.is(20, 20))      // true
