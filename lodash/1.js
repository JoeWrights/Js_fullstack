var _ = require('lodash');
// var _ = require('lodash/core');
// var fp = require('lodash/fp');
// var array = require('lodash/array');
// var object = require('lodash/fp/object');
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');

//chunk:数组切分
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkArr = _.chunk(arr, 2);
console.log(chunkArr);  //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]

//compact，去除假值。（将所有的空值，0，NaN过滤掉）
console.log(_.compact(['1', 2, '', 0, NaN]));  //[ '1', 2 ]

//uniq，数组去重(只能对一层数组去重，数组里嵌套数组和对象去不了重)
console.log(_.uniq([1, 2, 2]));  //[ 1, 2 ]

//filter和reject，过滤集合，传入匿名函数。
console.log(_.filter([1, 2], item => item > 1)); //[2]

//reject:根据条件去除某元素
var foo = [
  {id: 0, name: 'Joe', age: 33},
  {id: 1, name: 'JoeWright', age: 21} 
];
console.log(_.reject(foo, ['age', 33]));  //[ { id: 1, name: 'JoeWright', age: 21 } ]
console.log(_.reject([1, 2], item => item > 1)); //[1]
console.log(_.filter([
  {
    sex: 'male',
    age: 21
  },
  {
    sex: 'female',
    age: 20
  },
  {
    sex: 'female',
    age: 20
  }
], item => {
  return item.age > 20;
}));  //[ { sex: 'male', age: 21 } ]

//map
console.log(_.map([
  {
    sex: 'male',
    age: 21
  },
  {
    sex: 'female',
    age: 20
  },
  {
    sex: 'female',
    age: 20
  }
], item => {
  return item.sex;
}));  //[ 'male', 'female', 'female' ]

//merge,参数合并
console.log(_.merge(
  {
    a: [ { b: 1 }, { c: 2 } ]
  },
  {
    a: [ { d: 1 }, { e: 2 } ]
  }
));  //{ a: [ { b: 1, d: 1 }, { c: 2, e: 2 } ] }

//difference:返回一个新数组，去除相同的部分
console.log(_.difference([2, 1], [2, 3]));  //[ 1 ]

//differenceBy
console.log(_.differenceBy([1.2, 2.3], [2, 3.5], Math.floor));  //[ 1.2 ]
console.log(_.differenceBy([{'a':1}, {'a':2}], [{'a':1}], 'a'));  //[ { a: 2 } ]

//