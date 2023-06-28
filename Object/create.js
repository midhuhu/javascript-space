/**
 *  chrome 5  /  edge 12
 *  Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）
 *  2022-11-08 回顾
 */
const obj = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. I am ${this.age} years old. I am a ${this.isHuman ? 'human' : 'robot'}.`);
    }
}
const obj2 = Object.create(obj);
obj2.name = 'John';
obj2.age = 30;
obj2.isHuman = true;

obj2.printIntroduction();
// console.log(obj);  // { isHuman: false, printIntroduction: [Function: printIntroduction] }
// console.log(obj2);  // { name: 'John', age: 30, isHuman: true }


/**
 *  null
 */
const obj3 = {}
const obj4 = Object.create(null);
// console.log('obj3 is:' + obj3);  // is:[object Object]
// console.log('is:' + obj4);  // Cannot convert object to primitive value
obj4.toString = Object.prototype.toString
/**
 *   toString 方法是这个对象自身的属性，而非继承自对象的原型
 *  ▷{toString: ƒ}
 *      ▷toString: ƒ toString()
 *          ▷length: 0
 *          ▷name: "toString"
 *          ▷arguments: (...)
 *          ▷caller: (...)
 *          ▷[[Prototype]]: ƒ ()
 *          ▷[[Scopes]]: Scopes[0]
 */
// console.log('obj4 is:' + obj4); // is:[object Object]


/**
 *  以 null 为原型的对象通常用于作为 map 的替代。因为 Object.prototype 原型自有的属性的存在会导致一些错误
 */
const obj5 = { alice: 18, bob: 27 };
function hasPerson(name) {
    return name in obj5;
}
function getAge(name) {
    return obj5[name];
}
/**
 *  obj5：{alice: 18, bob: 27}
        alice: 18
        bob: 27
        ▷[[Prototype]]: Object
            ▷constructor: ƒ Object()
            ▷hasOwnProperty: ƒ hasOwnProperty()
            ▷isPrototypeOf: ƒ isPrototypeOf()
            ▷propertyIsEnumerable: ƒ propertyIsEnumerable()
            ▷toLocaleString: ƒ toLocaleString()
            ▷toString: ƒ toString()
            ▷valueOf: ƒ valueOf()
            ▷__defineGetter__: ƒ __defineGetter__()
            ▷__defineSetter__: ƒ __defineSetter__()
            ▷__lookupGetter__: ƒ __lookupGetter__()
            ▷__lookupSetter__: ƒ __lookupSetter__()
            ▷__proto__: (...)
            ▷get __proto__: ƒ __proto__()
            ▷set __proto__: ƒ __proto__()
 */
// console.log(hasPerson("hasOwnProperty")) // true
// console.log(getAge("toString")) // [Function: toString]


/**
 *  使用以 null 为原型的对象消除了这种潜在的问题，且不会给 hasPerson 和 getAge 函数引入太多复杂的逻辑
 */
const obj6 = Object.create(null, {
    alice: { value: 18, enumerable: true },
    bob: { value: 27, enumerable: true },
});
/**
 *  obj6：{alice: 18, bob: 27}
 */
function hasPerson2(name) {
    return name in obj6;
}
function getAge2(name) {
    return obj6[name];
}
// console.log(hasPerson2("hasOwnProperty")) // false
// console.log(getAge2("toString")) // undefined

/**
 *  create 实现 类式继承
 */
function Shape() {
    this.x = 0;
    this.y = 0;
}
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    // console.log('Shape moved.');
}
//TODO call()
function Circle() {
    Shape.call(this);
    // call super constructor.
    this.radius = 0;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.move = function (x, y) {
    Shape.prototype.move.call(this, x, y);
    // console.log('Circle moved.');
}
const circle = new Circle();
circle.move(1, 1);
// console.log(circle); // Circle { x: 1, y: 1, radius: 0 }