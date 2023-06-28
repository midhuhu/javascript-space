/*
 * @Author: zhuluqiang
 * @Description: 判断一个对象是否是可扩展的（是否可以在它上面添加新的属性） Chrome 6  Edge 12
 * @Date: 2022-12-13 15:12:27
 * @LastEditTime: 2022-12-13 15:28:11
 * 
 * Object.isExtensible(obj)
 */

// 新定义的对象是可以扩展的
let empty = {}
let emptylog = Object.isExtensible(empty)
console.log('emptylog',emptylog)

// 可变对象是不可拓展的
Object.preventExtensions(empty)
let prevent_emptylog = Object.isExtensible(empty)
console.log('prevent_emptylog',prevent_emptylog)

// 密封对象是不可拓展的
let sealed = Object.seal(empty)
let sealed_emptylog = Object.isExtensible(sealed)
console.log('sealed_emptylog',sealed_emptylog)

// 冻结的对象是不可拓展的
let frozen = Object.freeze(empty)
let frozen_emptylog = Object.isExtensible(frozen) 
console.log('frozen_emptylog',frozen_emptylog)

// 非对象报错
console.log('no Object',Object.isExtensible(1))
