// let myName : string = 'Mark';
// let age : number = 32;


// let sentence: string = `Hello, My Name is ${myName}.


// I'll be ${age +1} years old next month.`;

// console.log(sentence);



// let u:undefined=undefined;

// let v:void = undefined;

// let union : string | null= null;

// union = "Mark";

// const person1 = {
//   name :'Mark',
//   age:39
// }

// const person2 = Object.create({
//     name:'Mark',
//     age:39
//   })

// let obj:object = {};
// obj = {name:"Mark"};
// obj = [{name:"Mark"}];


// let list: (number | string)[] = [1, 2, 3, '4'];


// let list2 : Array<number> = [1,2,3];

// let x: [string, number];
// x = ["hello", 32];

// const person :[string, number] = ['mark', 12];

// const [first, second] = person;

// console.log(typeof first);
// console.log(typeof second);

//주석

// function returnAny(message: any): any {
//   console.log(message);
// }

// const any1 = returnAny('리턴은 아무거나');

// any1.toString();

// let looselyTyped: any = {};

// const d = looselyTyped.a.b.c.d;

// function leakingAny(obj: any) {
//   const a :number = obj.num;
//   const b = a + 1;
//   return b;
// }

// const c = leakingAny({num :0});
// c.indexOf('0');


// declare const maybe: unknown;
// if (typeof maybe === 'number') {
//   const aNumber: number = maybe;
// }

// if (maybe === true) {
//   const aBoolean: boolean = maybe;

//   const aString: string = maybe;
// };

// if (typeof maybe === 'string') {
//   const astring: string = maybe;
//   const aBoolean: boolean = maybe;
// }


// function error(message: string): never {
//   throw new Error(message);
// }

// function fail() {
//   return error('failed');
// }

// function infiniteLoop(): never {
//   while (true) {}

// }


// declare const a: string | number;

// if (typeof a !== "string") {
//   a;
// }

// type Indexable < T > = T extends string ? T & {
//   [index: string]: any
// } : never;

// type ObjectIndexable = Indexable<{}>;


// const b: Indexable<{}> = '';

function returnVoid(message: string):void{
  console.log(message);
  return undefined;
}


const r = returnVoid("리턴이 없다.");

console.log(typeof r);
