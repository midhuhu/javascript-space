/**
 *  Object.freeze()
 *  可以冻结一个对象。一个被冻结的对象再也不能被修改
 *  freeze() 返回和传入的参数相同的对象
 */

// 冻结对象
const obj = {
    prop: 42
}

Object.freeze(obj)

obj.prop = 33   // 无法修改

// console.log(obj.prop)   // 42

// 冻结数组
let a = [0]
Object.freeze(a)     // 现在数组不能被修改了。

a[0] = 1    // 无法修改
// a.push(2)   // Cannot add property 1, object is not extensible
// console.log(a)


// 浅冻结
obj1 = {
    internal: {},
    list: []
}
console.log(obj1)
Object.freeze(obj1)
// obj1.internal = {a:1}    // 修改失败
obj1.internal.a = 42    // 修改成功
obj1.list = [1,2]   // 修改失败
obj1.list.key = 1   // 修改成功
// console.log(obj1)