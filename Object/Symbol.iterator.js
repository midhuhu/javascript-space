
/**
 *  面试官问：你能不能实现让下面的代码a的值为1，b的值为2？
 * 
 *  let [a, b] = { a: 1, b: 2 }
 *  console.log(a, b);
 */

/**
 * 迭代器的知识点考察，使以下代码运行正常，不报错
 * 当前报错：TypeError: {(intermediate value)(intermediate value)} is not iterable
 * 意为：TypeError: 中间值不可迭代
 */

/**
 * 题解：
 * 那我们首先要对 {a:1, b:2} 进行迭代化处理，让{ a: 1, b: 2 } 这个对象具有可迭代属性
 * 因为要保证题目等式保持不变，则要在对象原型上挂上[Symbol.iterator]，返回出一个数组[1,2]。
 * 对象身上有个方法Object.values(obj)可以以数组的形式返回出键值，得到数组就可以用[Symbol.iterator]了
 */

/**
 * 题解一
 */
Object.prototype[Symbol.iterator] = function () {
    // 返回一个 Array 类型的可迭代对象
    return Object.values(this)[Symbol.iterator]()
}
/**
 * 题解二
 */
Object.prototype[Symbol.iterator] = function* () {
    for (const key in this) {
        yield this[key]
    }
}


let [a, b] = { a: 1, b: 2 }

console.log(a, b);
