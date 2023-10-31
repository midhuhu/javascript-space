

const extend = (sup, base) => {
    console.log('1', sup, base)

    // 获取base的原型构造函数属性
    let descriptor = Object.getOwnPropertyDescriptor(base.prototype, 'constructor')
    console.log('2', descriptor)

    // 将base的原型设置为sup的原型
    base.prototype = Object.create(sup.prototype || {})

    // 创建一个代理对象，用于代理base的构造函数
    const proxy = new Proxy(base, {
        // 重写base的构造函数
        construct: (target, args) => {
            // 创建一个新的对象，并将原型设置为base的原型
            var obj = Object.create(base.prototype);
            // 调用this的apply方法，传入target，obj，args
            this.apply(target, obj, args);
            // 返回新的对象
            return obj;
        },
        // 重写base的apply方法
        apply: (target, that, args) => {
            // 调用sup的apply方法
            sup.apply(that, args);
            // 调用base的apply方法
            base.apply(that, args);
        }
    })

    // 重新定义base的原型构造函数属性
    descriptor.value = proxy;
    Object.defineProperty(base.prototype, "constructor", descriptor);

    // 返回代理对象
    return proxy;
}

// 定义Person函数，接收一个参数name
const Person = (name) => {
    this.name = name
}

// 定义一个函数Boy，用于创建一个Person类的实例
var Boy = extend(Person, function (name, age) {
    // 传入参数name和age
    this.age = age;
    // 将age赋值给this.age
});
