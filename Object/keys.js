/*
 * @Author: zhuluqiang
 * @Description: 返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
 * @Date: 2022-12-13 16:39:33
 * @LastEditTime: 2022-12-13 16:39:47
 */

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));