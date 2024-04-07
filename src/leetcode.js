// Promise.resolve("foo")
//   .then(() => Promise.resolve("bar"))
//   .then(function (result) {
//     console.log(result);
//   });

const { Observable, of, map } = require('rxjs');

// /**
//  * @param {Object|Array} obj
//  * @return {Object|Array}
//  */
// var compactObject = function (obj) {
//   if (Array.isArray(obj)) {
//     return obj.filter(Boolean).map(compactObject);
//   } else {
//     if (Object.keys(obj).length) {
//       for (const key in obj) {
//         if (
//           Array.isArray(obj[key]) ||
//           (obj[key] && typeof obj[key] === "object")
//         ) {
//           obj[key] = compactObject(obj[key]);
//         } else {
//           if (!obj[key]) {
//             delete obj[key];
//           }
//         }
//       }
//     }
//   }
//   return obj;
// };

// console.log(compactObject({ a: null, b: [false, 1] }));
// console.log(compactObject([null, 0, 5, [0], [false, 16]]));

// eslint-disable-next-line no-constant-condition
// let z = 1;
// if (true) {
// 	var azz = 123;
// 	let z = 2;
// }
// function two() {
// 	var azz2 = 123;
// }

// let z = { d: 10 };
// let b = z;
// b.d = 11;
// console.log(b, z);

// if (b.d == z.d) {
// 	console.log('BAD');
// }

// let a = 1;
// console.log(22, typeof a.toString());
// if (typeof a == 'number') {
// 	console.log(111111111);
// }

// let z = { d: 10 };
// let b = z;

// z.a = 123;
// console.log(z, b);

// const user = {
// 	name: 'Azz',
// 	getName() {
// 		return function () {
// 			return this.name;
// 		};
// 	},
// };

// console.log(user.getName().bind(user)());
// function coldDate() {
// 	return new Observable((subscriber) => {
// 		const value = new Date().toLocaleTimeString();
// 		subscriber.next(value);
// 	});
// }

// const observable = coldDate();

// const s1 = observable.subscribe(console.log);

// setTimeout(() => {
// 	const s2 = observable.subscribe(console.log);
// }, 2000);

// setTimeout(() => {
// 	const s3 = observable.subscribe(console.log);
// }, 4000);
