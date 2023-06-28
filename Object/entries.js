/**
 *  Object.entries()  
 *  chrome 54  edge  14
 *  返回一个给定对象自身可枚举属性的键值对数组
 *  2022-11-08 回顾
 */

const object1 = {
    a: 'somestring',
    b: 42
}
const objectC = Object.entries(object1)
console.log(objectC)    // [ [ 'a', 'somestring' ], [ 'b', 42 ] ]

for (const [key, value] of objectC) {
    console.log(`${key}: ${value}`)       // a: somestring  b: 42
}


// getFoo 不可枚举
const myObj = Object.create(
    {},
    {
        getFoo: {
            value() {
                return this.foo
            }
        }
    }
)
myObj.foo = 'bar'
console.log(Object.entries(myObj))      // [ ['foo', 'bar'] ]

// 非对象会进行拆分
console.log(Object.entries('foo'))      // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

var obj = { foo: "bar", baz: 42 }
console.log(Object.entries(obj))        // [ [ 'foo', 'bar' ], [ 'baz', 42 ] ])
var map = new Map(Object.entries(obj))
console.log(map)     // Map { foo: "bar", baz: 42 }