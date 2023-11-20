
const target = { sum: 0 }

const add = new Proxy(target, {
    get(target, prop, rec) {
        if (prop === Symbol.toPrimitive) {
            let total = target.sum
            target.sum = 0
            return () => total
        }
        target.sum += Number(prop)
        return rec
    }
})


console.log('add1', add[1][2][3] + 4)
console.log('add2', add[10][20] + 30)
console.log('add3', add[100][200][300] + 400)

