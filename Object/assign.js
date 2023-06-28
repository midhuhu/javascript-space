/**
 *  chrome 45  edge 12
 */
/**
 *  target 目标对象，接收源对象属性的对象，也是修改后的返回值。
 *  sources 源对象，包含将被合并的属性。
 *  浅拷贝属性 
 *  target 与 returPoint 相同
 *  2022-11-08 回顾
 */
const target = { a: 1, b: 1 }
const sources = { b: 4, c: 8 }
const returnPoint = Object.assign(target, sources)
// { a: 1, b: 4, c: 8 }

target.a = 5
returnPoint.b = 0
sources.b = 10  // 不会改变returnPoint的值和target的值

// console.log(returnPoint)    // { a: 5, b: 0, c: 8 }
// console.log(target)     // { a: 5, b: 0, c: 8 }
// console.log(sources)    // { b: 10, c: 8 }

/**
 *  深拷贝
 */
const target1 = { a: 1, b: 1 }
const deepReturn = JSON.parse(JSON.stringify(target1))
// { a: 1, b: 1 }
target1.a = 0
// { a: 0, b: 1 }
// console.log(target1)    // { a: 0, b: 1 }
// console.log(deepReturn);  // deep clone { a: 1, b: 1 }

/**
 *  合并对象
 *  属性会被后续参数中具有相同属性的其他对象覆盖。
 */
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
// console.log(obj)    // { a: 1, b: 2, c: 3 }

/**
 *  拷贝symbol 属性
 */
const o4 = { a: 1 };
const o5 = { [Symbol('a')]: 2 };
const obj2 = Object.assign({}, o4, o5);

// console.log(obj2)    // { a: 1, [Symbol('a')]: 2 }
// console.log(Object.getOwnPropertySymbols(obj2))     // [Symbol(a)]

/**
 *  原型链 和 不可枚举属性 不可被复制
 */
const obj3 = Object.create(
    { a: 1 },  //  a is prototype chain（原型链）.
    {
        bar: { value: 2 }, // bar is not enumerable(不可枚举).
        baz: { value: 3, enumerable: true }
    }
);
const copy = Object.assign({}, obj3);

// console.log(copy)   // { baz: 3 }

/**
 *  基本类型
 *  Primitives will be wrapped, null and undefined will be ignored.
 *  Note, only string wrappers can have own enumerable properties.
 */
const v1 = 'abcd'       // 只有v1可以被复制
const v2 = true
const v3 = 10
const v4 = Symbol('foo')

const copy2 = Object.assign({}, v1, null, v2, undefined, v3, v4)

// console.log(copy2)      // { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

/**
 *  异常会打断后续操作
 * 
 *  拷贝访问器 getter() 
 */
const obj5 = {
    a: 1,
    get b() {
        return 2;
    }
}
const copy3 = Object.assign({}, obj5);
// console.log('------------------');
// console.log(copy3);

//TODO 实现过程
function completeAssign(target, ...sources) {
    sources.forEach(source => {
        // console.log(1, source);
        // console.log(2, Object.keys(source));
        let descriptors = Object.keys(source).reduce((descriptors, key) => {
            // console.log(3, key, descriptors);
            descriptors[key] = Object.getOwnPropertyDescriptor(source, key)
            // console.log(4, descriptors);
            return descriptors
        }, {})
        // console.log(5, descriptors);
        Object.getOwnPropertySymbols(source).forEach(sym => {
            let descriptor = Object.getOwnPropertyDescriptor(source, sym)
            if (descriptor.enumerable) {
                descriptors[sym] = descriptor
            }
        })
        Object.defineProperties(target, descriptors)
    })
    return target
}

const m1 = { a: 1, b: 2 };
const m2 = { b: 3, c: 4 };
const obj6 = completeAssign({}, m1, m2);
// console.log('------------------');
// console.log(obj6);