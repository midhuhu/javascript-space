import { get } from 'lodash';

// lodash.get()

// 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。

const object: any = {
    msg: '111',
    data: {
        detail: '222'
    }
}
console.log('get:', get(object, 'msg', get(object, 'data.detail', '333')))


// Native (ES6 - IE not supported)
let object2 = { a: [{ b: { c: 3 } }] };
let { a: [{ b: { c: result = 1 } = {} } = {}] = [] } = object2;
console.log('es6:', result)


// Native (ES11)
var object3: any = { a: [{ b: { c: 3 } }], d: 6 };
console.log('es11:', object3?.a?.[0]?.b?.c ? object3?.a?.[0]?.b?.c : object3?.d ?? 1);


// Native
function _get(obj: Object, path: string, defaultValue = '1') {
    let newpath = path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
    return newpath.reduce((i: any, k: any) => {
        return i[k]
    }, obj) || defaultValue
}
console.log('native:', _get(object3, 'a[0].b.c', '1'))
