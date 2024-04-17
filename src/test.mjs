// class A {
//     constructor() {
//         this.name = 'foo';
//         this.getName1();
//     }

// const { reverse } = require('dns');

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

function sum2(a) {
	let result = a;

	function f(b) {
		result += b;

		return f;
	}

	f[Symbol.toPrimitive] = function (_hint) {
		return result;
	};
	f.toString = function () {
		return result;
	};
	return f;
}

// const res = sum2(1) + sum2(1)(2);
// console.log(res);
// console.log(sum2(1)(2));
// console.log(sum2(1)(2)(3));

function reverseStr(s) {
	if (!s.length) {
		return '';
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
	if (typeof a !== 'object' || typeof b !== 'object') {
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

// const arr = ["FreeCodeCamp", "Is", "An", "Awesome", "Resource"];
// arr.forEach((el, index, arr) => {
//   arr[index] = el[0].toUpperCase() + el.slice(1);
// });

// console.log(arr);

// var obj = {
// 	name: 'test',
// 	azz: function () {
// 		console.log(1111, this);
// 		const setName = function (name) {
// 			this.name = name;
// 		};
// 		setName('OMG');
// 	},
// };
// console.log(obj.azz());

// function Person() {}
// var person = Person();
// var person1 = new Person();
// for (let i = 1; i < 100; i++) {
// 	console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
// }

// const obj = { a: 1, b: 2 };

// Object.preventExtensions(obj);
// obj.c = 111;
// console.log(obj);

// const scores = [1, 2, 3, 4, 5];
// const maxScore = Math.max(...scores);

// // Arrow Function as .map() callback
// const azz = scores.map((score) => +(score / maxScore).toFixed(2));
// console.log(azz);

// function logParams(first, second, first) {
// 	console.log(first, second);
// }
// logParams('Hello', 'World', '!!!'); // "Hello"  "World"  "!!!"
// const sum = new Function('a', 'b', 'return a + b');

var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };

// function varCheck() {
// 	var test = 'test';
// 	return test;
// }
// varCheck();

// const res = sum2(1) + sum2(1)(2);
// console.log(res);
// console.log(sum2(1)(2));
// console.log(sum2(1)(2)(3));

// function sum(a, b, c) {
// 	return a + b + c;
// }

// let curriedSum = curry(sum);

// alert(curriedSum(1, 2, 3)); // 6, still callable normally
// alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// alert(curriedSum(1)(2)(3));

// function curry(func) {
// 	return function curried(...args) {
// 		if (args.length >= func.length) {
// 			return func.apply(this, args);
// 		}
// 		return function (...args2) {
// 			return curried.apply(this, args.concat(args2));
// 		};
// 	};
// }

// function coldDate() {
// 	return new Observable((subscriber) => {
// 		const value = 123;
// 		subscriber.next(value);
// 	});
// }

// class Observable {
// 	constructor(private onSubscribe: (observer: Observer) => Subscription) {}

// 	subscribe(observer: Observer) {
// 	  this.onSubscribe(observer);
// 	}
// }

// const obs$ = of(null).pipe(map(() => Math.random()));
// obs$.subscribe({
// 	next: console.log,
// });
// obs$.subscribe(console.log);
// obs$.subscribe(console.log);
// obs$.subscribe(console.log);

// const stream$ = new Observable((observer) => {
// 	observer.next(1);
// 	setTimeout(() => {
// 		observer.next(2);
// 	}, 1000);
// 	setTimeout(() => {
// 		observer.error(new Error('AZZ ERROR'));
// 	}, 1500);
// 	setTimeout(() => {
// 		observer.next(777);
// 	}, 2000);
// 	setTimeout(() => {
// 		observer.complete();
// 	}, 3000);
// });

// stream$
// 	.pipe(
// 		catchError((err) => {
// 			console.log('CATCHED', err);
// 			return EMPTY;
// 		}),
// 	)
// 	.subscribe(
// 		(val) => {
// 			console.log(val);
// 		},
// 		// (err) => {
// 		// 	console.log('ERR', err);
// 		// },
// 	);

// const subject = new Subject();

// interval(500)
// 	.pipe(
// 		take(5),
// 		map(() => Math.random().toString().substring(2, 4)),
// 	)
// 	.subscribe(subject);
// myObs$

// 	.subscribe(subject);
// subject.subscribe({ next: console.log });
// eslint-disable-next-line quotes

// const azz = {
// 	currFilter: 'Jane Doe',
// 	users: [{ name: 'Jane Doe' }],
// 	filter: function () {
// 		return this.users.filter(function (user) {
// 			return user.name === this.currFilter;
// 		});
// 	},
// };

// function one() {
// 	const a = 111;
// 	return function () {
// 		console.log(globalThis);
// 	};
// }

// console.log(one()());
// console.log(1);

// Promise.resolve(2).then(console.log);
// console.log(3);

// setTimeout(() => console.log(4));

// const foo2 = () => {
// 	console.log('foo1');
// 	setTimeout(foo2);
// };

// foo2();

// const foo1 = () => {
// 	console.log('foo1');
// 	return Promise.resolve().then(foo1);
// };

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

// console.log(typeof name);

// let name = 123;

// function curry(func) {
// 	return function curried(...args) {
// 		if (args.length >= func.length) {
// 			return func.apply(this, args);
// 		} else {
// 			return function (...args2) {
// 				console.log(111, ...args2);
// 				return curried.apply(this, args.concat(args2));
// 			};
// 		}
// 	};
// }

// function curry(func) {
// 	return function curried(...args) {
// 		if (args.length >= func.length) {
// 			return func.apply(this, args);
// 		} else {
// 			return function (...args2) {
// 				return curried.apply(this, args.concat(args2));
// 			};
// 		}
// 	};
// }

// function sum(a, b, c) {
// 	return a + b + c;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3)); // 6, still callable normally
// console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// console.log(curriedSum(1)(2)(3));

// function throttle(mainFunction, delay) {
// 	let timerFlag = null; // Variable to keep track of the timer

// 	return (...args) => {
// 		// If there is no timer currently running
// 		if (timerFlag === null) {
// 			mainFunction(...args); // Execute the main function

// 			timerFlag = setTimeout(() => {
// 				// Set a timer to clear the timerFlag after the specified delay
// 				timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
// 			}, delay);
// 		}
// 	};
// }

// const user = {
// 	name: 'Azz',
// 	getName() {
// 		const func = function () {
// 			return this.name;
// 		};
// 		return func.bind(this);
// 	},
// };
// console.log(user.getName()());

// import { of } from 'rxjs';
// of([1, 2, 3, 4, 5])
// 	.pipe(switchMap((e) => of(e)))
// 	.subscribe(console.log);

// const higherOrder = of([1, 2])
// 	.pipe(
// 		map(() => interval(1000)),
// 		mergeAll(),
// 	)
// 	.subscribe((x) => console.log(x));

// let publisher$ = interval(1000).pipe(take(5), publish());

// const one$ = of(1, 2).pipe(delay(1000));
// const two$ = of(3, 4).pipe(delay(800));
// one$.pipe(
// 	switchMap((one) => two$.pipe(map((two) => `${one} + ${two}`))),
// ).subscribe((re) => {
// 	console.log(re);
// });
// combineLatest([one$, two$])
// 	.pipe(mergeAll())
// 	.subscribe((res) => {
// 		console.log(res);
// 	});

// const first$ = interval(1000).pipe(
// 	map(() => 'FIRST'),
// 	take(3),
// );
// const second$ = interval(800).pipe(
// 	map(() => 'SECOND'),
// 	take(2),
// );
// merge(first$, second$)
// 	.pipe(combineLatestAll())
// 	.subscribe((res) => {
// 		console.log(res);
// 	});

// const tick$ = connectable(timer(1_000), {
// 	connector: () => new Subject(),
// });

// tick$.connect((res) => {
// 	console.log(111, res);
// });

// function FizzBuzz() {
// 	for (let i = 0; i < 100; ) {
// 		console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
// 	}
// }
// FizzBuzz();

import {
	delay,
	from,
	interval,
	of,
	map,
	take,
	share,
	tap,
	Observable,
	Subject,
	mergeAll,
	merge,
	zip,
	concatAll,
	connect,
	filter,
	first,
	EMPTY,
	range,
	BehaviorSubject,
	ReplaySubject,
	shareReplay,
	concatMap,
	switchMap,
} from 'rxjs';

const testMap = (operator) => {
	from([0, 1, 2, 3, 4])
		.pipe(operator((x) => of(x).pipe(delay(500))))
		.subscribe({
			next: console.log,
			error: () => {},
			complete: (res) => console.log(operator.name + 'completed'),
		});
};

// testMap(switchMap);
// testMap(mergeMap);
// testMap(concatMap);
// testMap(exhaustMap);

// const testReplaySubj = new ReplaySubject();
// let i = 0;
// interval(1000)
// 	.pipe(map(() => 'EVENT' + i++))
// 	.subscribe(testReplaySubj);

// testReplaySubj.subscribe((res) => {
// 	console.log(res);
// });

// setTimeout(() => {
// 	testReplaySubj.subscribe((res) => {
// 		console.log('THIS IS SUB2', res);
// 	});
// }, 5000);

// const source$ = interval(1000).pipe(
// 	tap((x) => console.log('Processing: ', x)),
// 	map(() => {
// 		let i = 0;
// 		return 'EVENT' + i++;
// 	}),
// 	take(3),
// 	share(),
// );
// source$.subscribe((x) => console.log('subscription 1: ', x));
// setTimeout(() => {
// 	source$.subscribe((x) => console.log('subscription 2: ', x));
// }, 1000);
// const source2$ = interval(1000).pipe(
// 	map(() => 'EVENT' + i++),
// 	take(6),
// 	shareReplay(3),
// );
// source2$.subscribe((x) => console.log('subscription 1: ', x));
// source2$.subscribe((x) => console.log('subscription 2: ', x));

// setTimeout(() => {
// 	source2$.subscribe((y) => console.log('sub C: ', y));
// }, 11000);

// function makeHot(cold) {
// 	const subject = new Subject();
// 	cold.subscribe(subject);
// 	return new Observable((observer) => subject.subscribe(observer));
// }
// of([1, 2, 3]).subscribe((res) => {
// 	console.log('of' + res);
// });
// from([1, 2, 3]).subscribe((res) => {
// 	console.log('from' + res);
// // });
// function makeHot(cold) {
// 	const subject = new Subject();
// 	cold.subscribe(subject);
// 	return new Observable((observer) => subject.subscribe(observer));
// }

// const cold$ = interval(1000).pipe(
// 	tap((x) => console.log('SESSION' + x)),
// 	take(3),
// 	map(() => 'EVENT'),
// );

// const hot$ = makeHot(cold$);
// hot$.subscribe((e) => {
// 	console.log('SUB1', e);
// });
// hot$.subscribe((e) => {
// 	console.log('SUB2', e);
// });

// merge(of(1, 2, 3), from([4, 5, 6])).subscribe(console.log);

// const age$ = of(27, 25, 29);
// const name$ = of('Foo', 'Bar', 'Beer').pipe(delay(1000));
// const isDev$ = of(true, true, false);

// zip(age$, name$, isDev$)
// 	.pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
// 	.subscribe(console.log);

// const int = interval(1000).pipe(
// 	// tap((x) => console.log('SESSION' + x)),
// 	take(1),
// 	map(() => 'EVENT'),
// );

// int.pipe(concatAll()).subscribe((re) => {
// 	console.log(re);
// });
// const source$ = of(1, 2, 3, 4, 5).pipe(
// 	tap({
// 		subscribe: () => console.log('subscription started'),
// 		next: (n) => console.log(`source emitted ${n}`),
// 	}),
// );

// source$
// 	.pipe(
// 		// Notice in here we're merging 3 subscriptions to `shared$`.
// 		connect((shared$) =>
// 			merge(
// 				shared$.pipe(map((n) => `all ${n}`)),
// 				shared$.pipe(
// 					filter((n) => n % 2 === 0),
// 					map((n) => `even ${n}`),
// 				),
// 				shared$.pipe(
// 					filter((n) => n % 2 === 1),
// 					map((n) => `odd ${n}`),
// 				),
// 			),
// 		),
// 	)
// 	.subscribe(console.log);
// range(1, 10)
// 	.pipe(first((el) => el > 3))
// 	.subscribe(
// 		(res) => console.log('On next reached.', res),
// 		() => console.log('On error reached.'),
// 	);

// const obs1$ = new Subject();
// const obs2$ = new Subject();
// obs1$
// 	.pipe(
// 		map((v) => obs2$.pipe(map((v2) => v + ' ' + v2))),
// 		mergeAll(),
// 	)
// 	.subscribe((v) => console.log(v));

// obs1$.next('1');
// obs2$.next('2');

// obs1$.next('3');
// obs2$.next('4');

// obs1$.next('5');
// obs2$.next('6');

// obs1$.next('7');
// obs2$.next('8');

// const rep$ = new ReplaySubject(1);

// rep$.next(111);

// const one = rep$.subscribe(console.log);
// const two = rep$.subscribe(console.log);

// one.unsubscribe();
// two.unsubscribe();
// const tree = rep$.subscribe(console.log);
// rep$.next(222);
// rep$.next(222);
// rep$.next(222);

// const source$ = from([1, 2, 3, 4]).pipe(
// 	tap((x) => console.log('event started ', x)),
// 	concatMap((el) => of(el).pipe(delay(1000))),
// 	shareReplay(1),
// );

// source$.subscribe((n) => console.log(`1 source emitted ${n}`));

// setTimeout(() => {
// 	source$.subscribe((n) => console.log(`2 source emitted ${n}`));
// }, 4000);
// function makeHot(cold) {
// 	const subject = new Subject();
// 	cold.subscribe(subject);
// 	return new Observable((observer) => subject.subscribe(observer));
// }

// makeHot

// function makeHot(cold) {
// 	const subj = new Subject();
// 	cold.subscribe(subj);
// 	return new Observable((obs) => subj.subscribe(obs));
// }
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

// of([1, 2, 3, 4, 5])
// 	.pipe(switchMap((e) => of(e)))
// 	.subscribe(console.log);

// const a = "xyaabbb"
// const b = "lllmopq"
// fun(a, b) -> "ablmopqxy"

// function merge2(a, b) {
// 	const set = new Set(a + b);
// 	return Array.from(set).join('').sort();
// }

// merge('xyaabbb', 'lllmopq'); //"ablmopqxy"

// queueMicrotask(() => console.log('start'));
// setTimeout(() => console.log('1'), 0);
// const promise = new Promise((resolve, reject) => {
// 	console.log('2');
// 	resolve();
// });
// promise.then(() => console.log('3'));
// console.log('finish');

// const randomTimer = interval(1000).pipe(
// 	map(() => Math.random()),
// 	shareReplay({ refCount: true, bufferSize: 1 }),
// 	takeUntil(this.destroy$),
// );

// randomTimer.pipe(switchMap(() => this.apiService.ping())).subscribe();

// const structure = [
// 	'a.js',
// 	'b.js',
// 	{
// 		src: [
// 			'some.js',
// 			'other.js',
// 			{
// 				components: ['someComponent.js', { azz: ['one', 'two'] }],
// 			},
// 		],
// 	},
// ];

function flatten(struct, prefix = '') {
	let res = [];
	for (const s of struct) {
		if (typeof s === 'string') {
			res.push(prefix + s);
		} else if (typeof s === 'object') {
			const [key, value] = Object.entries(s)[0];
			res.push(...flatten(value, `${prefix}${key}/`));
		}
	}
	return res;
}

// console.log(flatten(structure));

/*
[
  'a.js',
  'b.js',
  'src/some.js',
  'src/other.js',
  'src/components/someComponent.js'
]
*/
