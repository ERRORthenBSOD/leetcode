// class A {
//     constructor() {
//         this.name = 'foo';
//         this.getName1();
//     }

const { reverse } = require("dns");

//     getName1() {
//         console.log('FOO ' + this.name);
//     }
// }

// class B extends A {
//     constructor() {
//         super();
//         this.name = 'bar';
//         this.getName();
//     }

//     getName() {
//         console.log('BAR ' + this.name);
//     }
// }

// new B();

// var expect = function (val) {
//     return {
//         toBe: function (val2) {
//             if (val === val2) {
//                 return true;
//             } else {
//                 throw new Error('Not Equal');
//             }
//         },
//         notToBe: function (val2) {
//             if (val !== val2) {
//                 return true;
//             } else {
//                 throw new Error('Equal');
//             }
//         },
//     };
// };

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var map = function (arr, fn) {
//     let newArr = [];
//     arr.forEach((el) => {
//         newArr.push(fn(el));
//     });
//     return newArr;
// };

// console.log(
//     map([1, 2, 3], function plusone(n) {
//         return n + 1;
//     })
// );

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var filter = function (arr, fn) {
//     const filtered = [];
//     for (let i = 0; i < arr.length; i++) {
//         const el = fn(arr[i], i);
//         el && filtered.push(el);
//     }
//     return filtered;
// };

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//     if (intervals.length <= 1) {
//         return intervals;
//     }
//     intervals.sort((a, b) => a[0] - b[0]);
//     const result = [intervals[0]];
//     for (const interval of intervals) {
//         let [currStart, currEnd] = interval;
//         if (result.at(-1)[1] < currStart) {
//             result.push(interval);
//         } else {
//             result.at(-1)[1] = Math.max(result.at(-1)[1], currEnd);
//         }
//     }
//     return result;
// };

// console.log(
//     merge([
//         [1, 3],
//         [2, 6],
//         [8, 10],
//         [15, 18],
//     ])
// ); // [[1,6],[8,10],[15,18]]

// /**
//  * @param {number[][]} intervals
//  * @param {number[]} newInterval
//  * @return {number[][]}
//  */
// var insert = function (intervals, newInterval) {
//     if (!intervals.length) {
//         return [newInterval];
//     }
//     const l = intervals.length;
//     const res = [];
//     let i = 0;

//     while (i < l && newInterval[0] > intervals[i][1]) {
//         res.push(intervals[i]);
//         i++;
//     }

//     while (i < l && newInterval[1] >= intervals[i][0]) {
//         newInterval = [
//             Math.min(newInterval[0], intervals[i][0]),
//             Math.max(newInterval[1], intervals[i][1]),
//         ];
//         i++;
//     }
//     res.push(newInterval);

//     while (i < l) {
//         res.push(intervals[i]);
//         i++;
//     }
//     return res;
// };

// console.log(
//     insert(
//         [
//             [1, 3],
//             [6, 9],
//         ],
//         [2, 5]
//     )
// ); // [[1,5],[6,9]]
// console.log(
//     insert(
//         [
//             [1, 2],
//             [3, 5],
//             [6, 7],
//             [8, 10],
//             [12, 16],
//         ],
//         [4, 8]
//     )
// );

// [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]

// /**
//  * @param {number[][]} points
//  * @return {number}
//  */
// var findMinArrowShots = function (points) {
//     if (points.length === 1) {
//         return 1;
//     }
//     points.sort((a, b) => a[1] - b[1]);
//     console.log(points);

//     let arrows = 1;
//     let arrowPos = points[0][1];
//     for (const p of points) {
//         if (arrowPos < p[0]) {
//             arrows++;
//             arrowPos = p[1];
//         }
//     }
//     return arrows;
// };
// console.log(
//     findMinArrowShots([
//         [3, 9],
//         [7, 12],
//         [3, 8],
//         [6, 8],
//         [9, 10],
//         [2, 9],
//         [0, 9],
//         [3, 9],
//         [0, 6],
//         [2, 8],
//     ])
// );

// const promiseAll = function (functions) {
// 	return new Promise((resolve, reject) => {
// 		if (!functions.length) {
// 			resolve([]);
// 		}

// 		const result = Array.from({ length: functions.length }, () => null);
// 		let resolvedCount = 0;
// 		functions.forEach(async (pr, i) => {
// 			try {
// 				result[i] = await pr();
// 				resolvedCount++;
// 				if (resolvedCount === functions.length) {
// 					resolve(result);
// 				}
// 			} catch (err) {
// 				reject(err);
// 			}
// 		});
// 	});
// };
// promiseAll([
//     () => new Promise((res) => res(42)),
//     () =>
//         new Promise((resolve, reject) =>
//             setTimeout(() => reject('Error'), 100)
//         ),
// ]).then(console.log);

// promiseAll([
// 	() => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
// 	() => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
// 	() => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
// ]).then(console.log);

// var timeLimit = function (fn, t) {
// 	return async function (...args) {
// 		try {
// 			const timer = setTimeout(
// 				() => Promise.reject('Time Limit Exceeded'),
// 				t,
// 			);
// 			const val = await fn(...args);
// 			clearTimeout(timer);
// 			Promise.resolve(val);
// 		} catch (err) {
// 			Promise.reject(err);
// 		}
// 	};
// };

// console.log(
// 	timeLimit(async () => {
// 		throw 'Error';
// 	}),
// );

// console.log(process);

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
// var chunk = function (arr, size) {
// 	const res = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const index = Math.floor(i / size);
// 		if (!res[index]) {
// 			res[index] = [arr[i]];
// 		} else {
// 			res[index].push(arr[i]);
// 		}
// 	}
// 	return res;
// };

// var chunk = function (arr, size) {
// 	const res = [];
// 	for (let i = 0; i < arr.length; i += size) {
// 		res.push(arr.slice(i, i + size));
// 	}
// 	return res;
// };

// var chunk = (arr, size) =>
// 	arr.length === 0
// 		? []
// 		: [arr.slice(0, size), ...chunk(arr.slice(size), size)];

// console.log(chunk([1, 2, 3, 4, 5], 1));
// console.log(chunk([8, 5, 3, 2, 6], 6));

// /**
//  * @param {Array<Record<string, number>>} arr1
//  * @param {Array<Record<string, number>>} arr2
//  * @return {Array<Record<string, number>>}
//  */
// var join = function (arr1, arr2) {
// 	const hashMap = new Map();

// 	for (const o of arr1) {
// 		hashMap.set(o.id, o);
// 	}
// 	for (const o of arr2) {
// 		if (o.id in hashMap) {
// 			hashMap.set(o.id, Object.assign(hashMap.get(o.id), o));
// 		} else {
// 			hashMap.set(o.id, o);
// 		}
// 	}
// 	return Array.from(hashMap.values()).sort((a, b) => a.id - b.id);
// };

// const arr1 = [
// 	{ id: 1, x: 2, y: 3 },
// 	{ id: 2, x: 3, y: 6 },
// ];
// const arr2 = [
// 	{ id: 2, x: 10, y: 20 },
// 	{ id: 3, x: 0, y: 0 },
// ];

// console.log(join(arr1, arr2));

// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// /**
//  * @param {Array<any>} arr
//  * @param {number} depth
//  * @return {Array<any>}
//  */
// var flat = function (arr, depth) {
// 	if (!depth) {
// 		console.log(11111111);
// 		return arr;
// 	}

// 	const res = [];
// 	for (const el of arr) {
// 		if (Array.isArray(el)) {
// 			const val = flat(el, depth - 1);
// 			console.log('val', val);
// 			res.push(...val);
// 		} else {
// 			res.push(el);
// 		}
// 	}
// 	console.log(222222, res);
// 	return res;
// };

// console.log(
// 	flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2),
// );
// const myEnum = Object.freeze({
// 	ONE: 'This is one',
// 	TWO: 'This is two',
// });
// const myObj = Object.create(null);
// const myObj2 = { a: 123, b: 334, __proto__: myObj };
// // console.log(myObj2);
// const myObj3 = structuredClone(myObj2, { transfer: [] });
// Object.is(NaN, NaN); // true
// const reg = new FinalizationRegistry(() => {
// 	console.log('THATS ALL FOLKS');
// });

// reg.register(['aaa']);
// console.log('Main job ends');

// const azz = {};

// Object.defineProperty(azz, 'color', {
// 	value: '',
// 	writable: true,
// 	enumerable: true,
// 	configurable: true,
// });
// console.log(azz);
// azz.color = 111;
// console.log(azz);

// const curry = function (func) {
// 	return function curried(...args) {
// 		if (args.length >= func.length) {
// 			return func.apply(this, args);
// 		} else {
// 			return function (...otherArgs) {
// 				console.log(...args, ...otherArgs);
// 				return curried.apply(this, [...args, ...otherArgs]);
// 			};
// 		}
// 	};
// };

// function sum(a, b, c) {
// 	return a + b + c;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3));
// console.log(curriedSum(1)(2, 3));
// console.log(curriedSum(1)(2)(3));
// console.log([1, 2, 3] + [4, 5, 6]); // 1,2,34,5,6

// function sum2(a) {
// 	let result = a;

// 	function f(b) {
// 		result += b;

// 		return f;
// 	}

// 	f[Symbol.toPrimitive] = function (_hint) {
// 		return result;
// 	};
// 	f.toString = function () {
// 		return result;
// 	};
// 	return f;
// }

// const res = sum2(1) + sum2(1)(2);
// console.log(res);
// console.log(sum2(1)(2));
// console.log(sum2(1)(2)(3));

function reverseStr(s) {
  if (!s.length) {
    return "";
  }
  return reverseStr(s.slice(1)) + s.at(0);
}

// console.log(reverseStr("hello"));

function deepComparison(a, b) {
  if (a === b) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (typeof a !== "object" || typeof b !== "object") {
    return false;
  }

  const aKeys = Object.getOwnPropertyNames(a);
  const bKeys = Object.getOwnPropertyNames(b);
  if (aKeys.length !== bKeys) {
    return false;
  }
  for (const key in aKeys) {
    if (!Object.hasOwn(b)) {
      return false;
    }
    if (!deepComparison(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
