
const target = { sum: 0 }

const handler = {
    get(target, prop, rec) {
        // Symbol.toPrimitive 是一个内置的 Symbol 值，
        // 它是作为对象的函数值属性存在的，当一个对象转换为对应的原始值时，会调用此函数。
        if (prop === Symbol.toPrimitive) {
            let temp = target.sum
            target.sum = 0
            return () => temp
        }
        target.sum += Number(prop)
        return rec
    }
}
const add = new Proxy(target, handler)


console.log('add', add[1][2][3] + 4)
