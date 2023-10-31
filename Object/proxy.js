/**
 * 代理 Proxy代理对象
 * 用于创建一个对象的代理，是用于监听一个对象的相关操作。代理对象可以监听我们对原对象的操作。
 */

const obj = {
    name: 'LiLei',
    age: 18,
    like: () => {
        return this === proxy3
    },
    say: {
        one: {
            two: '001'
        },
    }
}

const proxy = new Proxy(obj, {})
// console.log('proxy', proxy.name)


/**
 * new Proxy(对象，捕获器) 包含两个参数
 * 在实例化Proxy对象时，第二个参数传入的是捕获器集合，我们在其对象内定义一个get捕获器，用于监听获取对象值的操作。
 * 捕获器列表：
 * has()： in 操作符的捕捉器。
 * get()： 属性读取操作的捕捉器。
 * set()： 属性设置操作的捕捉器
 * deleteProperty()： delete 操作符的捕捉
 * getPrototypeOf()：Object.getPrototypeOf 方法的捕捉器
 * setPrototypeOf()： Object.setPrototypeOf 方法的捕捉器
 * isExtensible()： Object.isExtensible 方法的捕捉器(判断是否可以新增属性)
 * preventExtensions()： Object.preventExtensions 方法的捕捉器
 * getOwnPropertyDescriptor()：Object.getOwnPropertyDescriptor 方法的捕捉器
 * defineProperty()：Object.defineProperty 方法的捕捉
 * ownKeys()：Object.getOwnPropertyNames 方法和Object.getOwnPropertySymbols 方法的捕捉器
 * apply()： 函数调用操作的捕捉器
 * construct()： new 操作符的捕捉器。
 */

// 代理obj这个对象，并传入get捕获器
const proxy2 = new Proxy(obj, {
    // get捕获器
    get: (target, key) => {
        console.log(`捕获到对象获取${key}属性的值操作`);
        return target[key];
    },
    set: (target, key, value) => {
        // 可以对修改进行判断
        console.log(`捕获到对象设置${key}属性的值变更为${value}`);
        if (key === 'age' && typeof value === 'number') {
            target[key] = value;
        } else {
            throw new TypeError('age must be a number')
        }
    },
    // deleteProperty: (target, key) => {
    //     console.log(`捕获到对象删除${key}属性的值操作`);
    //     delete target[key]
    // },
})
// console.log('proxy2', proxy2.name)
// console.log('proxy2', proxy2.age = '20')
// console.log('proxy2', delete proxy2.age)


/**
 * 深层次监听
 */
console.log('proxy2', proxy2.say.one.two = 13)
console.log('proxy2', proxy2.say)



/**
 * 内部的this指向问题，会因为代理而发生改变，指向当前代理的值
 */

const proxy3 = new Proxy(obj, {})

// console.log('obj', obj.like())
// console.log('proxy3', proxy3.like())

