//문자
// String.prototype.indexOf() 문자의 순서
// String.prototype.slice()  문자 자르기
// String.prototype.replace() 문자 교체, 제거
//console.log(str.match(/.+(?=@)/)[0]) 정규표현식 이용
//console.log(str.trim()) 띄어쓰기 제거

//숫자
//const str = pi.toFixed(2); 소숫점 2째짜리 까지만 표현 (String 형으로 자동 변경됨)
// const integer = parseInt(str); int 형으로 형변환
// const float = parseFloat(str); float 형으로 형변환

//Math
// console.log('abs', Math.abs(-12));  //절대값 표현 12
// console.log('min', Math.min(2,8)); // 최소값 반환 2
// console.log('max', Math.Max(2,8)); // 최대값 반환 8
// console.log('ceil', Math.ceil(3.14)); // 올림 4
// console.log('floor', Math.floor(3.14)); // 내림 3
// console.log('round', Math.round(3.5)); // 반올림 4
// console.log('random', Math.random()); // 0.XXXX 형태로 난수 발생

//JS 데이터 실습





// import _ from 'lodash'
// import getType from './getType'
// //import {random, user as Qrad} from './getRandom'
// import * as R from './getRandom'

// console.log(_.camelCase('the hello world'));
// console.log(getType([1,2,3]));
// // console.log(random());
// console.log('sss');
// console.log(R);



// const usersA = [{
//     userId: '1',
//     name: 'Qrad??'
//   },
//   {
//     userId: '2',
//     name: 'Neo'
//   }
// ]

// const usersB = [{
//   userId: '1',
//   name: 'Qrad!!'
// },
// {
//   userId: '3',
//   name: 'Army'
// }
// ]

// const usersC = usersA.concat(usersB);
// console.log('concat', usersC);

// console.log('uniq', _.uniqBy(usersC, 'userId'))


// const usersD = _.unionBy(usersA, usersB,'userId')
// console.log(usersD)


import _ from 'lodash'
const users =[
{userId: '1', name:'TT'},
{userId: '2', name:'AA'},
{userId: '3', name:'EE'},
{userId: '4', name:'QQ'},
{userId: '5', name:'YY'},
{userId: '6', name:'UU'},
{userId: '7', name:'II'}
]

const foundUser = _.find(users, {name:'EE'}); 
const foundUserIndex = _.findIndex(users, {name:'EE'});
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name:'TT'})
console.log(users)