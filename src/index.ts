// import './style.css';

// type F = (x: number) => number;

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
const arrayToLinkedList = (arr: number[]) =>
	arr.reduceRight<null | ListNode>(
		(last, val) =>
			(last =
				last === null ? new ListNode(val) : new ListNode(val, last)),
		null,
	);

// function compose(functions: F[]): F {
//   return functions.reduceRight((acc, fn) => fn(acc), x);
//   return function (x) {
//     if (functions.length) {
//       for (let i = functions.length - 1; i >= 0; i--) {
//         x = functions[i](x);
//       }
//     }
//     return x;
//   };
// }

// const fn = compose([(x) => x + 1, (x) => 2 * x]);

// fn(4);

// type Fn = (n: number, i: number) => any;

// function filter(arr: number[], fn: Fn): number[] {
//   let filteredArr: number[] = [];
//   arr.forEach((n, i) => {
//     if (fn(n, i)) {
//       filteredArr.push(n);
//     }
//   });
//   return filteredArr;
// }

// const azz = filter([0, 10, 20, 30], function greaterThan10(n) {
//   return n > 10;
// });
// console.log(azz);
// function* fibGenerator(): Generator<number, any, number> {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     a = b;
//     b += a;
//     // [a, b] = [b, a + b];
//   }
// }

// const gen = fibGenerator();
// gen.next().value;
// gen.next().value;
// gen.next().value;
// console.log(gen.next().value);

// function add3(x: number, y: number, z: number) {
//   return x + y + z;
// }

// function curry(fn: Function) {
//   return function curried(...args: any[]) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2: any[]) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// const curriedAdd = curry(add3);
// console.log(curriedAdd(1, 2, 3, 4, 5, 6));
// "use strict";

// async function doTest() {
//   try {
//     await new Promise((res, rej) => {
//       throw "AZZ";
//     });
//   } catch (error) {
//     console.log("ERROR: " + error);
//   }
// }

// doTest();

// function chunk(arr: any[], size: number): any[][] {
//     const result = [];

//     arr.forEach((x, i) => {
//         const k = Math.floor(i / size);
//         console.log('k', k);
//         if (!result[k]) {
//             result[k] = [];
//         }
//         console.log(result);
//         result[k].push(x);
//     });

//     return result;
// }

// console.log(chunk([1, 2, 3, 4, 5], 1));
// console.log(chunk([1, 9, 6, 3, 2], 3));

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("INTERSECTION OBSERVED!");
//       console.log(entry);
//     }
//   });
// });

// observer.observe(document.getElementById("ad"));

// function showNotification() {
//   Notification.requestPermission().then((res: NotificationPermission) => {
//     if (res === "granted") {
//       new Notification("Who did zat shit?", {
//         body: "This is the body!",
//         badge: "this is the badge",
//       });
//     }
//   });
// }
// showNotification();

// type ToBeOrNotToBe = {
//   toBe: (val: any) => boolean;
//   notToBe: (val: any) => boolean;
// };

// function expect(val: any): ToBeOrNotToBe {
//   return {
//     toBe: (expextedValue) => {
//       if (expextedValue === val) {
//         return true;
//       }
//       throw new Error("Not Equal");
//     },
//     notToBe: (expextedValue: any) => {
//       if (expextedValue !== val) {
//         return true;
//       }
//       throw new Error("Equal");
//     },
//   };
// }

// console.log(expect(5).toBe(null));

// type P = Promise<number>

// async function addTwoPromises(promise1: P, promise2: P): P {
//     return new Promise((resolve, reject)=>{
//         return Promise.all([promise1, promise2]).then((pArr)=> pArr.reduce((acc, val)=> acc + val, 0))
//     })
// };

// const staff = new Map<string, string>();

// staff.set("foo", "bar");
// staff.set("foo2", "bar2");

// console.log(staff.keys());
// console.log(staff.values());
// Array.from(staff.entries()).forEach((element) => {
//   console.log(Object.assign({}, element));
// });

// let azz = [5, 6, 2, 7, 4];

// function maxProductDifference(nums: number[]): number {
//     let sortedArr = [...nums].sort((a, b) => b - a);
//     let length = sortedArr.length;
//     return (sortedArr[0] * sortedArr[1]) - (sortedArr[length-1] * sortedArr[length-2])
// };

// function maxProductDifference(nums: number[]): number {
//   let sortedArr = nums.sort((a, b) => b - a);
//   let length = sortedArr.length;
//   return sortedArr[0] * sortedArr[1] - sortedArr[length - 1] * sortedArr[length - 2];
// }
// type JSONValue =
//   | null
//   | boolean
//   | number
//   | string
//   | JSONValue[]
//   | { [key: string]: JSONValue };
// type Fn = (value: JSONValue) => number;

// function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
//   arr.sort((a, b) => fn(a) - fn(b));
//   return arr;
// }

// console.log(sortBy([5, 4, 1, 2, 3], (x: number) => x));

// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
// type Fn = (...args: JSONValue[]) => void

// function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
//     setInterval((()=> )() , t)
//     return function azz(){}
// };

// function countCharacters(words: string[], chars: string): number {
//   let result: number = 0;
//   const dict = chars.split("").reduce((acc, val) => {
//     if (acc.has(val)) {
//       acc.set(val, acc.get(val) + 1);
//     } else {
//       acc.set(val, 1);
//     }
//     return acc;
//   }, new Map());

//   for (let i = 0; i < words.length; i++) {
//     const clonedDict = new Map(dict);
//     let length = words[i].length;
//     while (length--) {
//       const char = words[i][length];
//       const charIndex = clonedDict.get(char);
//       if (clonedDict.has(char) && charIndex > 0) {
//         clonedDict.set(char, charIndex - 1);
//         if (length === 0) {
//           result += words[i].length;
//         }
//       } else {
//         break;
//       }
//     }
//   }
//   return result;
// }

// console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
// console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
// console.log(
//   countCharacters(
//     [
//       "dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin",
//       "ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb",
//       "ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl",
//       "boygirdlggnh",
//       "xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx",
//       "nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop",
//       "hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx",
//       "juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr",
//       "lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo",
//       "oxgaskztzroxuntiwlfyufddl",
//       "tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp",
//       "qnagrpfzlyrouolqquytwnwnsqnmuzphne",
//       "eeilfdaookieawrrbvtnqfzcricvhpiv",
//       "sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz",
//       "yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue",
//       "hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv",
//       "cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo",
//       "teyygdmmyadppuopvqdodaczob",
//       "qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs",
//       "qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs",
//     ],
//     "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"
//   )
// );

// // countCharacters(["cat"], "atach");
// 1 + 2 + 3 + 4 = 10.

//  1 + (1 + 1)
// function totalMoney(n: number): number {
// let total = 0;

// let days = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < n; i++) {
//   total += days[i % 7];
//   days[i % 7]++;
// }
// console.log(total);
// return total;

// let sum = 0;
// let day = 1;
// let week = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + (day + week);
//   day++;
//   if (i % 7 === 0) {
//     week++;
//     day = 1;
//   }
// }
// return sum;
//   const remnant = n % 7;
//   const intWeeksAmount = (n - remnant) / 7;
//   console.log(intWeeksAmount);
//   return (
//     intWeeksAmount * (28 + (7 * (intWeeksAmount - 1)) / 2) +
//     ((1 + 2 * intWeeksAmount + remnant) / 2) * remnant
//   );
// }
// totalMoney(4);
// totalMoney(10);
// totalMoney(20);

// function imageSmoother(img: number[][]): number[][] {
// let result: number[][] = [];
// let imageHeight = img.length;
// let imageWidth = img[0].length;
// for (let i = 0; i < imageHeight; i++) {
//   result[i] = [];
//   for (let ii = 0; ii < imageWidth; ii++) {
//     const neighbors = [
//       img[i - 1]?.[ii - 1],
//       img[i - 1]?.[ii],
//       img[i - 1]?.[ii + 1],
//       img[i]?.[ii - 1],
//       img[i]?.[ii],
//       img[i]?.[ii + 1],
//       img[i + 1]?.[ii - 1],
//       img[i + 1]?.[ii],
//       img[i + 1]?.[ii + 1],
//     ].filter((el) => el);
//     const average = Math.floor(
//       neighbors.reduce((acc, val) => acc + val, 0) / neighbors.length
//     );

//     result[i][ii] = average;
//   }
// }
// return result;
// }

// imageSmoother([
//   [100, 200, 100],
//   [200, 50, 200],
//   [100, 200, 100],
// ]);

// function largestOddNumber(num: string): string {
//   if (Number(num.slice(-1)) % 2 !== 0) {
//     return num;
//   }
//   let numLength = num.length;
//   let maxOdd = "";
//   while (--numLength) {
//     const slicedStr = num.slice(0, numLength);
//     if (Number(slicedStr.slice(-1)) % 2 !== 0) {
//       maxOdd = slicedStr;
//       break;
//     }
//   }
//   return maxOdd;
// }

// largestOddNumber("52"); // "52"
// largestOddNumber("10133890"); // "1013389
// largestOddNumber("239537672423884969653287101"); // "239537672423884969653287101";

// function numberOfMatches(n: number): number {
//   let matchesCount = 0;
//   let teamsCount = n;

//   function playTour(): number {
//     let matches = Math.floor(teamsCount / 2);
//     teamsCount -= matches;
//     return matches;
//   }

//   while (teamsCount !== 1) {
//     matchesCount += playTour();
//   }

//   return matchesCount;
//   return n-1
// }
// numberOfMatches(14);

// function largestGoodInteger(num: string): string {
//   let goodString = "";
//   for (let i = 0; i < num.length; i++) {
//     if (
//       num[i + 2] !== undefined &&
//       num[i] === num[i + 1] &&
//       num[i] === num[i + 2]
//     ) {
//       if (goodString && Number(goodString[0]) > Number(num[i])) {
//         continue;
//       } else {
//         goodString = num[i].repeat(3);
//       }
//     }
//   }
//   return goodString;
// }
// console.log(largestGoodInteger("6777133339"));
// console.log(largestGoodInteger("2300019"));
// console.log(largestGoodInteger("3200014888"));

// function waitThreeSeconds(): void {
//     var ms = 3000 + new Date().getTime();
//     // @ts-ignore
//     while (new Date() < ms) {
//     } //
//     console.log("FINISHED");
// }
//
// waitThreeSeconds();

// function buyChoco(prices: number[], money: number): number {
//     prices = prices.filter((el) => el <= money - 1)
//     console.log(prices)
//     if (!prices.length) return money;
//     prices.sort((a, b) => a - b)
//     console.log(prices)
//     if ((prices[0] + prices[1]) <= money) {
//         money -= (prices[0] + prices[1])
//     }
//     console.log(money)
//     return money;
// }
//
// // buyChoco([1, 2, 2, 5], 3)
// buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62)  // 22

// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
//
// function join(arr1: { [key: string]: number }[], arr2: { [key: string]: number }[]): JSONValue[] {
// const joined = arr1.concat(arr2)
// const merged: { [key: number]: any } = {};
//
// joined.forEach((el) => {
//     const {id} = el;
//     if (id in merged) {
//         merged[id] = {...merged[id], ...el}
//     } else {
//         merged[id] = {...el}
//     }
// })
//
// return Object.values(merged).sort((a, b) => a.id - b.id)
//     const map = new Map();
//     arr1.forEach(el => map.set(el.id, el))
//     for (const el of arr2) {
//         if (map.has(el.id)) {
//             const prevObj = map.get(el.id);
//             map.set(el.id, {...prevObj, ...el})
//         } else {
//             map.set(el.id, el)
//         }
//     }
//     return Array.from(map.values()).sort((a, b) => a.id - b.id);
// };
//
// join([
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ], [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ])

// type Fn<T> = () => Promise<T>

// function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
//     return new Promise((resolve, reject) => {
//         let functionsCount = functions.length;
//         const resolvedArr: T[] = [];
//         functions.forEach((f, i) => {
//                 f().then((val) => {
//                     resolvedArr[i] = val;
//                     functionsCount--
//                     if (functionsCount === 0) {
//                         resolve(resolvedArr)
//                     }
//                 }).catch(reject)
//             }
//         )
//     })
// }

// promiseAll([
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]).then((res) => {
//     console.log(111111, res)
// })

// promiseAll([
//     () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
//     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ]).then((res) => {
//     console.log(111111, res)
// })
//
// promiseAll([
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))]).then((res) => {
//     console.log(111111, res)
// })

// const PENDING = 0;
// const FULFILLED = 1;
// const REJECTED = 2;

// function CustomPromise(executor) {
//     let state = PENDING;
//     let value: any = null;
//     let handlers: Function[] = [];
//     let catchers: Function[] = []

//     function resolve(result: any) {
//         if (state !== PENDING) return;
//         state = FULFILLED;
//         value = result;
//         handlers.forEach(f => f(value))
//     }

//     function reject(err: any) {
//         if (state !== PENDING) return;
//         state = REJECTED;
//         value = err;
//         catchers.forEach(f => f(value))
//     }

//     this.then = function (callback: Function) {
//         if (state === FULFILLED) return callback(value)
//         else handlers.push(callback)
//     }

//     this.catch = function (callback: Function) {
//         if (state === REJECTED) return callback(value)
//         else catchers.push(callback)
//     }

//     executor(resolve, reject)
// }

// type Callback = (...args: any[]) => any;
// type Subscription = {
//   unsubscribe: () => void;
// };

// class EventEmitter {
//   events: Map<string, Callback[]> = new Map();

//   subscribe(eventName: string, callback: Callback): Subscription {
//     const eventCallbacks = this.events.get(eventName);
//     if (this.events.has(eventName)) {
//       eventCallbacks.push(callback);
//     } else {
//       this.events.set(eventName, [callback]);
//     }
//     return {
//       unsubscribe: () => {
//         const eventCallbacks = this.events.get(eventName);
//         if (!eventCallbacks) {
//           return;
//         }
//         this.events.set(
//           eventName,
//           eventCallbacks.filter((cb) => cb !== callback)
//         );
//         if (eventCallbacks.length === 0) {
//           this.events.delete(eventName);
//         }
//       },
//     };
//   }

//   emit(eventName: string, args: any[] = []): any[] {
//     const result: any[] = [];
//     if (!this.events.has(eventName)) {
//       return result;
//     }

//     this.events.get(eventName).forEach((cb) => result.push(cb(...args)));
//     return result;
//   }
// }

// function countNumSum(char: string, str: string): number {
//   let sum = 0;
//   str.split("").forEach((c) => {
//     c === char && sum++;
//   });
//   return sum;
// }

// function countMax(length: string, r: string) {
//   let leftScore = countNumSum("0", length);
//   let rightScore = countNumSum("1", r);
//   return leftScore + rightScore;
// }

// function maxScore(s: string): number {
//   let max = 0;
//   let left = "";
//   let right = s;

//   for (let i = 0; i < s.length - 1; i++) {
//     left += s.charAt(i);
//     right = s.slice(i + 1, s.length);
//     max = Math.max(countMax(left, right), max);
//   }
//   return max;
// }

// maxScore("011101");
// maxScore("1111");

// function minOperations(s: string): number {
//     let start0 = 0;
//     let start1 = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (i % 2 === 0) {
//             if (s[i] === '0') {
//                 start1 += 1;
//             } else {
//                 start0 += 1;
//             }
//         } else {
//             if (s[i] === '1') {
//                 start1 += 1;
//             } else {
//                 start0 += 1;
//             }
//         }
//     }
//     return Math.min(start0, start1);
// }
// minOperations("0100");
// minOperations("10");
// minOperations("1111");
// console.log(minOperations('10010100')); // 3;
// type JSONValue =
//     | null
//     | boolean
//     | number
//     | string
//     | JSONValue[]
//     | { [key: string]: JSONValue };
// type Obj = Record<string, JSONValue> | Array<JSONValue>;

// function compactObject(obj: Obj): Obj {
//     if (Array.isArray(obj)) {
//         const newObj = [];
//         for (let val of obj) {
//             if (val) {
//                 if (typeof val === 'object') {
//                     val = compactObject(val);
//                 }
//                 newObj.push(val);
//             }
//         }
//         return newObj;
//     } else {
//         const newObj: Obj = {};
//         for (let [key, value] of Object.entries(obj)) {
//             if (value) {
//                 if (typeof value === 'object') {
//                     value = compactObject(value);
//                 }
//                 newObj[key] = value;
//             }
//         }
//         return newObj;
//     }
// }
// console.log(compactObject({ a: null, b: [false, 1] }));
// console.log(compactObject([null, 0, 5, [0], [false, 16]]));
// console.log(
//     compactObject({
//         o: 11,
//         a: 68,
//         m: 18,
//         v: true,
//         b: false,
//         h: null,
//         r: false,
//         p: 93,
//         length: true,
//         k: '',
//         n: 79,
//         f: 18,
//         u: null,
//         j: null,
//         e: null,
//         z: {
//             d: true,
//             t: null,
//             o: 21,
//             w: null,
//             m: 82,
//             k: 35,
//             length: 26,
//             r: 45,
//             b: false,
//             z: 0,
//             i: null,
//             c: 33,
//             p: 69,
//             j: 27,
//             e: 53,
//             q: 97,
//             h: true,
//             a: true,
//             n: true,
//             f: 73,
//             u: null,
//         },
//         w: 12,
//         y: 0,
//         q: '',
//         t: null,
//         s: true,
//         x: false,
//         c: true,
//         i: false,
//         g: 29,
//     })
// );

// console.log(
//     compactObject({
//         length: [
//             [
//                 {
//                     e: null,
//                     i: 54,
//                     d: 9,
//                     z: 48,
//                     u: 44,
//                     o: '',
//                     j: null,
//                     length: null,
//                     n: null,
//                     b: 0,
//                 },
//             ],
//         ],
//     })['length'][0][0]
// );

// function numDecodings(s: string): number {
//     const map = new Map<number, number>();
//     const decodeWays = (nums: number[], length: number) => {
//         //if n is 0 that means we have decoded our string , there is one possible way
//         if (length === 0) {
//             return 1;
//         }

//         //cache check
//         if (map.has(length - 1)) return map.get(length - 1);

//         //First option is include the decode the charecter alone
//         const opt1 = nums[length - 1];

//         //second option is combine the charecter with its adjacent charecter
//         //avoid leading zeros
//         const opt2 =
//             length - 2 >= 0 && nums[length - 2] !== 0
//                 ? nums[length - 2] * 10 + nums[length - 1]
//                 : 0;
//         let ans1 = 0;
//         let ans2 = 0;

//         //if that single charecter is not zero
//         if (opt1 > 0) {
//             ans2 = decodeWays(nums, length - 1);
//         }

//         //combined charecters must be decodable
//         if (opt2 > 0 && opt2 <= 26) {
//             ans1 = decodeWays(nums, length - 2);
//         }

//         //cache
//         map.set(length - 1, ans1 + ans2);

//         //return sum of both possible options
//         return ans1 + ans2;
//     };

//     const nums = s.split('').map((item) => +item);
//     return decodeWays(nums, nums.length);
// }

// function numDecodings(s: string): number {
//     const cache = Array.from({ length: s.length + 1 }, () => -1);
//     function numDecodingsCachable(s: string): number {
//         console.log('s', s);
//         if (s.length === 0) {
//             return 1;
//         }
//         if (cache[s.length - 1] !== -1) {
//             console.log('CACHE');
//             return cache[s.length - 1];
//         }
//         let res = 0;
//         if (s[s.length - 1] !== '0') {
//             res = numDecodingsCachable(s.substring(0, s.length - 1));
//         }

//         const lastSubstring = Number(s.substring(s.length - 2));
//         console.log('lastSubstring', lastSubstring);
//         if (s.length >= 2 && lastSubstring >= 10 && lastSubstring <= 26) {
//             res += numDecodingsCachable(s.substring(0, s.length - 2));
//         }

//         cache[s.length - 1] = res;

//         return res;
//     }

//     return numDecodingsCachable(s);
// }

// function numDecodings(s: string): number {
//     console.log('s', s);
//     const dp: Array<number> = Array(s.length + 1).fill(0);
//     console.log('dp1', dp);
//     dp[0] = 1;
//     dp[1] = s[0] === `0` ? 0 : 1;
//     console.log('dp2', dp);
//     for (let i = 2, n = s.length + 1; i < n; i++) {
//         const oneDigit: number = parseInt(s.substring(i - 1, i));
//         const twoDigit: number = parseInt(s.substring(i - 2, i));
//         console.log('oneDigit', oneDigit);
//         console.log('twoDigit', twoDigit);
//         if (oneDigit > 0) dp[i] += dp[i - 1];

//         if (twoDigit > 9 && twoDigit < 27) dp[i] += dp[i - 2];
//         console.log('dp3', dp);
//     }

//     return dp.pop();
// }

// numDecodings('226');

// function fib(n: number): number {
//     if (n <= 2) {
//         return 1;
//     }

//     const cache = new Map();
//     let count = 0;
//     while (--n) {
//         let newl = n - 1;
//         const val = fib(newl);
//         console.log(cache.has(newl));
//         if (cache.has(newl)) {
//             console.log('CACHE');
//             return cache.get(newl);
//         } else {
//             count += val;
//             cache.set(n - 2, count);
//         }
//     }

//     return count;
// }

// function fib2(n: number, cache: Map<number, number> = new Map()): number {
//     if (cache.has(n)) {
//         console.log(n);
//         console.log('CACHE');
//         return cache.get(n);
//     }
//     if (n <= 2) {
//         return 1;
//     }
//     const val = fib2(n - 1, cache) + fib2(n - 2, cache);

//     cache.set(n, val);
//     return val;
// }

// // console.log(fib(5));
// console.log('RESULT', fib2(5));
// type JSONValue =
//     | null
//     | boolean
//     | number
//     | string
//     | JSONValue[]
//     | { [key: string]: JSONValue };

// declare global {
//     interface Function {
//         callPolyfill(
//             context: Record<string, JSONValue>,
//             ...args: JSONValue[]
//         ): JSONValue;
//     }
// }

// Function.prototype.callPolyfill = function (context, ...args): JSONValue {
//     return this.call(context, ...args);
// };

// function increment() {
//     this.count++;
//     return this.count;
// }

// console.log(increment.callPolyfill({ count: 1 }));

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */

// function numRollsToTarget(n: number, k: number, target: number): number {
//     let diceRemaining = n;
//     let rolledSum = 0;
//     let numberOfWays = 0;
//     const mod = 1e9 + 7;

//     function rollDice(dices: number, result: number): number {
//         if(dices === 0 || result <= 0){
//             return 0;
//         }

//         for (let i = 1; i <= k; i++) {
//             rolledSum += i;
//             if (rolledSum === target) {
//                 numberOfWays++;
//                 return;
//             }
//         }
//     }
//     rollDice();
//     console.log(numberOfWays);
//     return numberOfWays;
// }

// function numRollsToTarget(n: number, k: number, target: number): number {
//     const mod = 1e9 + 7;
//     let map = new Map();

//     function rollDice(dices: number, valueToRoll: number): number {
//         const key = `(${dices}, ${valueToRoll})`;
//         if (dices === 0) {
//             if (valueToRoll === 0) {
//                 return 1;
//             }
//             if (valueToRoll > 0) {
//                 return 0;
//             }
//         }
//         if (map.has(key)) {
//             return map.get(key);
//         }

//         map.set(key, 0);

//         for (let i = 1; i <= k && valueToRoll - i >= 0; i++) {
//             const waysToRoll = rollDice(dices - 1, valueToRoll - i);
//             map.set(key, (map.get(key) + waysToRoll) % mod);
//         }
//         return map.get(key);
//     }
//     return rollDice(n, target);
// }

// console.log(numRollsToTarget(1, 6, 3));
// console.log(numRollsToTarget(2, 6, 7));
// console.log(numRollsToTarget(30, 30, 500));

// type MultidimensionalArray = (MultidimensionalArray | number)[];

// function* inorderTraversal(
//     arr: MultidimensionalArray
// ): Generator<number, void, unknown> {
//     for (const el of arr) {
//         if (Array.isArray(el)) {
//             yield* inorderTraversal(el);
//         } else {
//             yield el;
//         }
//     }
// }

// const gen = inorderTraversal([1, [2, 3]]);
// console.log(gen.next().value, gen.next().value, gen.next().value);

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
// Maintain the running sum and max value for repeated letters.

// Handling consecutive same chars and add them all at the same time, but keep the max value in these chars and remove it in the end.

// function minCost(colors: string, neededTime: number[]): number {
//     let minTime = 0;
//     let runningSum = 0;
//     let maxValue = 0;
//     for (let i = 0; i <= colors.length - 1; i++) {
//         if (colors[i] === colors[i + 1]) {
//             runningSum += runningSum
//                 ? neededTime[i + 1]
//                 : neededTime[i] + neededTime[i + 1];
//             maxValue = Math.max(maxValue, neededTime[i], neededTime[i + 1]);
//         } else {
//             if (maxValue) {
//                 minTime += runningSum - maxValue;
//                 maxValue = 0;
//                 runningSum = 0;
//             }
//         }
//     }
//     return minTime;
// }

// minCost('abaac', [1, 2, 4, 3, 5]);
// minCost('abc', [1, 2, 3]);
// minCost('aabaa', [1, 2, 3, 4, 1]);
// minCost('aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]); // 26

// Hint1: When you reach a sequence of non-duplicating characters, you can just skip them since there's no need for remove.
// Hint2: When you reach a sequence of n duplicating characters, the removal time is equal to the sum of removal time of all characters then subtract by the max removal time of characters, because we do not want to remove the character that takes the longest time to remove.
// For example: "aaaa" and [1,2,3,4].
// The removal time is (1+2+3+4) - 4 = 6.

// type Fn = (...params: any[]) => Promise<any>;

// function timeLimit(fn: Fn, t: number): Fn {
//     return async function (...args) {
//         return Promise.race([
//             fn(...args),
//             new Promise((resolve, reject) => {
//                 setTimeout(() => reject('Time Limit Exceeded'), t);
//             }),
//         ]);
//     };
// }
// const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
// limited(150).catch(console.log);

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// class TimeLimitedCache {
//     map = new Map<number, { value: number; duration: number; date: number }>();

//     set(key: number, value: number, duration: number): boolean {
//         if (this.map.has(key)) {
//             const val = this.map.get(key);
//             if (val.date - new Date().getTime() + val.duration > 0) {
//                 this.map.set(key, {
//                     value,
//                     duration,
//                     date: new Date().getTime(),
//                 });
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//         this.map.set(key, {
//             value,
//             duration,
//             date: new Date().getTime(),
//         });
//         return false;
//     }

//     get(key: number): number {
//         if (this.map.has(key)) {
//             const { date, duration, value } = this.map.get(key);

//             if (date - new Date().getTime() + duration > 0) {
//                 return value;
//             } else {
//                 this.map.delete(key);
//                 return -1;
//             }
//         }
//         return -1;
//     }

//     count(): number {
//         let count = 0;
//         this.map.forEach(({ date, duration }, k) => {
//             if (date - new Date().getTime() + duration > 0) {
//                 count++;
//             } else {
//                 this.map.delete(k);
//             }
//         });
//         return count;
//     }
// }

// function delay(milliseconds: number) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, milliseconds);
//     });
// }

// const timeLimitedCache = new TimeLimitedCache();
// console.log(timeLimitedCache.set(1, 42, 1000)); // false
// console.log(timeLimitedCache.get(1)); // 42
// console.log(timeLimitedCache.count()); // 1
// // delay(1500).then(() => {});

// type MultiDimensionalArray = (number | MultiDimensionalArray)[];

// var flat = function (
//     arr: MultiDimensionalArray,
//     n: number
// ): MultiDimensionalArray {
//     if (n === 0) {
//         return arr;
//     }
//     let result = [];
//     for (const v of arr) {
//         if (Array.isArray(v) && n > 0) {
//             result.push(...flat(v, n - 1));
//         } else {
//             result.push(v);
//         }
//     }
//     return result;
// };

// console.log(
//     flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)
// );
// console.log(
//     flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
// );
// console.log(
//     flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
// );

// function compress(chars: string[]): number {
//     if (chars.length === 1) {
//         return 1;
//     }
//     let counter = 1;
//     let left = 0;
//     let right = 1;
//     let currentChar = chars[1];
//     while (right <= chars.length) {
//         if (currentChar === chars[right]) {
//             counter++;
//             right++;
//         } else {
//             if (counter > 1) {
//                 const counterStr = counter.toString();
//                 for (let i = 0; i < counterStr.length; i++) {
//                     chars[left + i + 1] = counterStr[i];
//                 }
//                 left += counterStr.length + 1;
//             } else {
//                 left++;
//             }
//             currentChar = chars[right];
//             chars[left] = chars[right];
//             counter = 1;
//             right++;
//         }
//     }
//     console.log(chars);
//     console.log(left);
// }

// function compress(chars: string[]): number {
//     let length = chars.length;
//     let pointer = 0;
//     while (pointer < length) {
//         let counter = 0;
//         let sliceStart = pointer + 1;

//         while (chars[pointer] === chars[pointer + 1]) {
//             counter++;
//             pointer++;
//         }
//         if (counter > 0) {
//             const counterStr = Number(counter + 1)
//                 .toString()
//                 .split('');
//             chars.splice(sliceStart, counter, ...counterStr);
//             pointer = pointer - counter + counterStr.length;
//             length = chars.length;
//         }
//         pointer++;
//     }
//     return pointer;
// }

// compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']);
// compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']);

// type F = (...args: any) => void;

// function debounce(fn: F, t: number): F {
//     let timeOutId: NodeJS.Timeout | number;

//     return function (...args) {
//         if (timeOutId) {
//             clearTimeout(timeOutId);
//         }
//         timeOutId = setTimeout(() => {
//             fn(...args);
//         }, t);
//     };
// }
// const log = debounce(console.log, 100);
// log('Hello'); // cancelled
// log('Hello'); // cancelled
// log('Hello'); // Logged at t=100ms

// type Fn = (...params: number[]) => number;

// function memoize(fn: Fn): Fn {
//     const map = new Map();

//     return function (...args) {
//         if (map.has(args.toString())) {
//             return map.get(args.toString());
//         } else {
//             const result = fn(...args);
//             map.set(args.toString(), result);
//             return result;
//         }
//     };
// }

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//     callCount += 1;
//     return a + b;
// });
// memoizedFn(2, 3);
// memoizedFn(2, 3);
// console.log(callCount);

// declare global {
//     interface Array<T> {
//         snail(rowsCount: number, colsCount: number): number[][];
//         snail2(rowsCount: number, colsCount: number): number[][];
//     }
// }

// Array.prototype.snail = function (
//     rowsCount: number,
//     colsCount: number
// ): number[][] {
//     if (rowsCount * colsCount !== this.length) {
//         return [];
//     }
//     const arr = Array.from({ length: rowsCount }, () => []);
//     let movingDown = true;
//     let rowCounter = 0;
//     for (let i = 0; i < this.length; i++) {
//         const row = rowsCount - 1 - (i % rowsCount);
//         const col = Math.floor(i / rowsCount);
//         console.log('col', col);
//         console.log('row', row);
//         if (movingDown) {
//             arr[rowCounter].push(this[i]);
//             rowCounter++;
//             if (rowCounter === rowsCount) {
//                 movingDown = false;
//             }
//         } else {
//             rowCounter--;
//             arr[rowCounter].push(this[i]);
//             if (rowCounter === 0) {
//                 movingDown = true;
//             }
//         }
//     }
//     console.log(arr);
//     return arr;
// };

// Array.prototype.snail2 = function (
//     rowsCount: number,
//     colsCount: number
// ): number[][] {
//     if (rowsCount * colsCount !== this.length) {
//         return [];
//     }
//     const arr = Array.from({ length: rowsCount }, () =>
//         Array(colsCount).fill(null)
//     );
//     let movingDown = true;
//     for (let i = 0; i < this.length; i++) {
//         const row = movingDown
//             ? i % rowsCount
//             : rowsCount - 1 - (i % rowsCount);
//         const col = Math.floor(i / rowsCount);

//         arr[row][col] = this[i];
//         if (i % rowsCount === rowsCount - 1) {
//             movingDown = !movingDown;
//         }
//     }
//     return arr;
// };

// const arr = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22, 23, 24, 25,
// ];

// // arr.snail(5, 5);
// arr.snail2(5, 5);

// const arr1 = [
//     19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
// ];

// arr1.snail(5, 4);

// const arr3 = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// arr3.snail(1, 2);
// [
//     ([19, 17, 16, 15],
//     [10, 1, 14, 4],
//     [3, 2, 12, 20],
//     [7, 5, 18, 11],
//     [9, 8, 6, 13])
// ];

// const arr4 = [1, 2, 3, 4];
// arr4.snail(1, 4); // [[1,2,3,4]]

// function twoSum(nums: number[], target: number): number[] {
//     let left = 0;
//     let right = 1;

//     while (left < nums.length) {
//         if (nums[left] + nums[right] === target) {
//             return [left, right];
//         }
//         if (right === nums.length) {
//             left++;
//             right = left;
//             right++;
//         } else {
//             right++;
//         }
//     }
//     return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
// console.log(twoSum([3, 2, 4], 6)); // [1,2]

// function isPalindrome(x: number): boolean {
//     const strN = x.toString();
//     if (strN === strN.split('').reverse().join('')) {
//         return true;
//     }
//     return false;
// }

// function isPalindrome(x: number) {
//     const strN = x.toString();

//     let left = 0;
//     let right = strN.length - 1;

//     while (left < right) {
//         if (strN[left] !== strN[right]) {
//             return false;
//         }

//         left++;
//         right--;
//     }

//     return true;
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(132231));
// console.log(isPalindrome(13244231));
// console.log(isPalindrome(1325231));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(11));

// function romanToInt(s: string): number {
//     const map = new Map([
//         ['I', 1],
//         ['V', 5],
//         ['X', 10],
//         ['L', 50],
//         ['C', 100],
//         ['D', 500],
//         ['M', 1000],
//     ]);
// let tempPlusSum = 0;
// let tempMinusSum = 0;
// let sum = 0;

// for (let i = s.length - 1; i >= 0; i--) {
//     const current = map.get(s[i]);
//     const nextLeft = map.get(s[i - 1]);
//     if (nextLeft === current) {
//         tempPlusSum += current;
//     } else {
//         if (tempPlusSum) {
//             sum += tempPlusSum + current;
//             tempPlusSum = 0;
//         } else if (tempMinusSum) {
//             sum += tempMinusSum - current;
//             tempMinusSum = 0;
//         } else if (nextLeft < current) {
//             tempMinusSum += current;
//         } else {
//             sum += current;
//         }
//     }
// }
// let current = 0;
// let previous = 0;
// for (let i = s.length - 1; i >= 0; i--) {
//     previous = current;
//     current = map.get(s[i]);

//     if (previous > current) {
//         sum -= current;
//     } else {
//         sum += current;
//     }
//     console.log(sum);
// }

// return sum;
// }

// console.log(romanToInt('III')); // 3
// console.log(romanToInt('DCXXI')); // 621  500 + 100
// console.log(romanToInt('IV')); // 4
// console.log(romanToInt('LVIII')); // 58
// console.log(romanToInt('MCMXCIV')); // 1994 M = 1000, CM = 900, XC = 90 and IV = 4.
// console.log(romanToInt('MCMXCVI')); // 1996
// console.log(romanToInt('MCDLXXVI')); // 1476

// function makeEqual(words: string[]): boolean {
//     const map = new Map<string, number>();
//     for (let i = 0; i < words.join('').length; i++) {
//         const val = words.join('')[i];
//         map.set(val, map.get(val) + 1 || 1);
//     }

//     return Array.from(map.values()).every(
//         (count) => count % words.length === 0
//     );
// }

// console.log(makeEqual(['abc', 'aabc', 'bc']));
// console.log(makeEqual(['a', 'b']));
// console.log(makeEqual(['a', 'b', 'c']));
// console.log(
//     makeEqual([
//         'caaaaa',
//         'aaaaaaaaa',
//         'a',
//         'bbb',
//         'bbbbbbbbb',
//         'bbb',
//         'cc',
//         'cccccccccccc',
//         'ccccccc',
//         'ccccccc',
//         'cc',
//         'cccc',
//         'c',
//         'cccccccc',
//         'c',
//     ])
// );
// console.log(makeEqual(['aa', 'abaab']));
// console.log(makeEqual(['acca', 'cca', 'c', 'aacc']));

// function maxLengthBetweenEqualCharacters(s: string): number {
//     let left = 0;
//     let right = 1;
//     let maxSubstringLength = -1;
//     while (left < s.length) {
//         if (!s[right]) {
//             left++;
//             right = left;
//             right++;
//         } else {
//             if (s[left] !== s[right]) {
//                 right++;
//             } else {
//                 maxSubstringLength = Math.max(
//                     maxSubstringLength,
//                     right - left - 1
//                 );
//                 right++;
//             }
//         }
//     }

//     return maxSubstringLength >= 0 ? maxSubstringLength : -1;
// }

// console.log(maxLengthBetweenEqualCharacters('aa')); // 0
// console.log(maxLengthBetweenEqualCharacters('aab')); // 0
// console.log(maxLengthBetweenEqualCharacters('aba')); // 1
// console.log(maxLengthBetweenEqualCharacters('abca')); // 2
// console.log(maxLengthBetweenEqualCharacters('cbzxy')); // -1
// console.log(maxLengthBetweenEqualCharacters('abac')); // 1
// console.log(maxLengthBetweenEqualCharacters('scayofdzca')); // 6
// console.log(maxLengthBetweenEqualCharacters('cabbac')); // 4
// console.log(maxLengthBetweenEqualCharacters('mgntdygtxrvxjnwksqhxuxtrv')); // 18
// function findContentChildren(g: number[], s: number[]): number {
//     g.sort((a, b) => a - b);
//     s.sort((a, b) => a - b);
//     console.log('G', g);
//     console.log('S', s);
//     let counter = 0;

//     let gPoint = 0;
//     let sPoint = 0;

//     while (sPoint < s.length) {
//         const cookie = s[sPoint];
//         const childGreed = g[gPoint];

//         if (cookie >= childGreed) {
//             counter++;
//             gPoint++;
//             sPoint++;
//         } else {
//             sPoint++;
//         }
//     }
//     console.log(counter);
//     return counter;
// }

// findContentChildren([1, 2, 3], [1, 1]); // 1
// findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]); // 2

// function findMatrix(nums: number[]): number[][] {
//     const map = new Map();
//     let maxArrayLength = 0;
//     for (let i = 0; i < nums.length; i++) {
//         const value = map.get(nums[i]) + 1 || 1;
//         map.set(nums[i], value);
//         maxArrayLength = Math.max(maxArrayLength, value);
//     }
//     const resultArr = Array.from({ length: maxArrayLength }, () => []);
//     for (let [key, value] of map.entries()) {
//         while (value > 0) {
//             resultArr[value - 1].push(key);
//             value--;
//         }
//     }

//     return resultArr;
// }

// findMatrix([1, 3, 4, 1, 2, 3, 1]); // [[1,3,4,2],[1,3],[1]]
// findMatrix([1, 2, 3, 4]); // [[4,3,2,1]]

// function numberOfBeams(bank: string[]): number {
//     return bank
//         .filter(Number)
//         .map((el) => el.split('').filter(Number).length)
//         .reduce((acc, val, i, arr) => {
//             if (arr[i + 1]) {
//                 acc += val * arr[i + 1];
//             }
//             return acc;
//         }, 0);
// }

// numberOfBeams(['011001', '000000', '010100', '001000']);
// numberOfBeams(['000', '111', '000']);

// function minOperations(nums: number[]): number {
//     let operations = 0;
//     let map = new Map<number, number>();

//     for (const num of nums) {
//         map.set(num, map.get(num) + 1 || 1);
//     }

//     for (const v of map.values()) {
//         if (v === 1) {
//             return -1;
//         }

//         switch (v % 3) {
//             case 0:
//                 operations += v / 3;
//                 break;
//             case 1:
//                 operations += (v - 4) / 3 + 2;
//                 break;
//             case 2:
//                 operations += (v - 2) / 3 + 1;
//                 break;

//             default:
//                 continue;
//         }
//     }
//     return operations;
// }

// minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4]); // 4
// minOperations([2, 1, 2, 2, 3, 3]); // -1
// minOperations([
//     14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12,
// ]); // 7

// minOperations([19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19]); // 5

// function lengthOfLIS(nums: number[]): number {
//     let lengthArr = new Array(nums.length).fill(1);
//     for (let i = 0; i < nums.length; i++) {
//         let tempLength = 1;
//         for (let j = 0; j < i; j++) {
//             console.log('newArr[j]', nums[j]);
//             console.log('newArr[i]', nums[i]);
//             console.log('lengthArr', lengthArr);
//             if (nums[j] < nums[i] && lengthArr[i] < lengthArr[j] + 1) {
//                 tempLength = Math.max(tempLength, 1 + lengthArr[j]);
//             }
//         }
//         lengthArr[i] = tempLength;
//     }
//     return Math.max(...lengthArr);
// }
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // [2,3,7,101] 4
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
// console.log(lengthOfLIS([11, 12, 13, 14, 15, 6, 7, 8, 101, 18])); // 6

// interface Job {
//     startTime: number;
//     endTime: number;
//     profit: number;
// }

// function findLastNonConflictingJob(jobs: Job[], l: number): number {
//     for (let i = l; i >= 0; i--) {
//         if (jobs[i].endTime <= jobs[l].startTime) {
//             return i;
//         }
//     }

//     return -1;
// }

// function jobScheduling(
//     startTime: number[],
//     endTime: number[],
//     profit: number[]
// ): number {
//     const jobs: Job[] = [];
//     for (let i = 0; i < startTime.length; i++) {
//         jobs.push({
//             startTime: startTime[i],
//             endTime: endTime[i],
//             profit: profit[i],
//         });
//     }
//     jobs.sort((a, b) => a.endTime - b.endTime);

//     const maxProfit = Array.of(jobs.length).fill(0);
//     maxProfit[0] = jobs[0].profit;
//     console.log('jobs', jobs);
//     for (let i = 1; i < jobs.length; i++) {
//         const index = findLastNonConflictingJob(jobs, i);
//         console.log('index', index);
//         let incl = jobs[i].profit;
//         console.log('incl', incl);
//         if (index !== -1) {
//             incl += maxProfit[index];
//         }
//         maxProfit[i] = Math.max(incl, maxProfit[i - 1]);
//         console.log('maxProfit', maxProfit);
//     }

//     // [ [ 1, 3, 50 ], [ 2, 4, 10 ], [ 3, 5, 40 ], [ 3, 6, 70 ] ]
//     //  for i in range(1, len(jobs)):

//     //     // find the index of the last non-conflicting job with the current job
//     //     index = findLastNonConflictingJob(jobs, i)

//     //     // include the current job with its non-conflicting jobs
//     //     incl = jobs[i].profit
//     //     if index != -1:
//     //         incl += maxProfit[index]

//     //     // store the maximum profit by including or excluding the current job
//     //     maxProfit[i] = max(incl, maxProfit[i - 1])

//     return maxProfit.pop();
// }

// console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]));

// function numberOfArithmeticSlices(nums: number[]): number {
//     if (nums.length < 3) {
//         return 0;
//     }
//     let count = 0;
//     let start = 0;
//     let end = 2;
//     let diff = 0;
//     while (end < nums.length) {
//         diff = nums[start + 1] - nums[start];
//         if (nums[end] - nums[end - 1] === diff) {
//             count++;
//             while (end < nums.length) {
//                 end++;
//                 if (nums[end] - nums[end - 1] === diff) {
//                     count++;
//                 } else {
//                     break;
//                 }
//             }
//         }
//         start++;
//         end = start + 2;
//     }
//     return count;
// }

// function numberOfArithmeticSlices(nums: number[]): number {
//     let total = 0; // To keep track of the total number of arithmetic subarrays
//     let curr = 0; // To keep track of the number of additional arithmetic subarrays ending at the current index

//     // Start from the second index as we need at least three elements to form an arithmetic subarray
//     for (let i = 2; i < nums.length; i++) {
//         // Check if the current slice is arithmetic (difference is the same)
//         if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
//             // Extend the length of the slice
//             curr += 1;
//             // Add the number of additional subarrays ending at index i
//             total += curr;
//         } else {
//             // Reset the current arithmetic slice length if the sequence is not arithmetic
//             curr = 0;
//         }
//     }

//     return total;
// }

// numberOfArithmeticSlices([1, 2, 3, 4]); // 3

// function numberOfArithmeticSlices(nums: number[]): number {
//     const length = nums.length;
//     let totalCount: number = 0;
//     const dp: Map<number, number>[] = Array.from(
//         { length },
//         () => new Map<number, number>()
//     );

//     for (let i = 0; i < length; i++) {
//         console.log('nums[i]', nums[i]);
//         for (let j = 0; j < i; j++) {
//             const diff = nums[i] - nums[j];
//             console.log('nums[j]', nums[j]);
//             console.log('diff', diff);
//             // get the count of subsequences with the same difference ending at nums[j]
//             const prevCount: number = dp[j].get(diff) || 0;
//             console.log('prevCount', prevCount);
//             // update count of subsequences ending at nums[i] with the same difference
//             console.log('(dp[i].get(diff)', dp[i].get(diff));
//             dp[i].set(diff, (dp[i].get(diff) || 0) + prevCount + 1);
//             console.log(dp);
//             // accumulate the previous count to the total count
//             totalCount += prevCount;
//             console.log('totalCount', totalCount);
//         }
//     }
//     console.log(totalCount);
//     return totalCount;
// }

// // numberOfArithmeticSlices([2, 4, 6, 8, 10]);
// numberOfArithmeticSlices([7, 7, 7, 7, 7]);

// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.left = left === undefined ? null : left;
//         this.right = right === undefined ? null : right;
//     }
// }

// function insertLevelOrder(arr: number[], i: number): TreeNode {
//     let root = null;
//     // Base case for recursion
//     if (i < arr.length) {
//         root = new TreeNode(arr[i]);

//         // insert left child
//         root.left = insertLevelOrder(arr, 2 * i + 1);

//         // insert right child
//         root.right = insertLevelOrder(arr, 2 * i + 2);
//     }
//     return root;
// }

// function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
//     if (!root) {
//         return 0;
//     }
//     let sum = 0;
//     if (low <= root.val && root.val <= high) {
//         sum += root.val;
//     }

//     if (root.val > low) {
//         sum += rangeSumBST(root.left, low, high);
//     }
//     if (root.val < high) {
//         sum += rangeSumBST(root.right, low, high);
//     }

//     return sum;
// }
// const treeNode = insertLevelOrder([10, 5, 15, 3, 7, null, 18], 0);
// console.log(rangeSumBST(treeNode, 7, 15));

// function sameFrequency(n1: number, n2: number): boolean {
//     const map = new Map<string, number>();
//     const s1 = n1.toString();
//     const s2 = n2.toString();
//     for (let i = 0; i < s1.length; i++) {
//         map.set(s1[i], map.get(s1[i]) + 1 || 1);
//     }

//     for (let i = 0; i < s2.length; i++) {
//         if (!map.has(s2[i])) {
//             return false;
//         } else {
//             const count = map.get(s2[i]);
//             if (count === 0) {
//                 return false;
//             } else {
//                 count - 1 === 0 ? map.delete(s2[i]) : map.set(s2[i], count - 1);
//             }
//         }
//     }
//     return map.size === 0;
// }

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); //false

// function maxSubarraySum(arr: number[], n: number): number | null {
//     if (arr.length < n) return null;
//     let max = 0;
//     let tempMax = 0;
//     for (let i = 0; i < n; i++) {
//         max += arr[i];
//     }
//     tempMax = max;
//     for (let i = n; i < arr.length; i++) {
//         tempMax -= arr[i - n];
//         tempMax += arr[i];
//         max = Math.max(max, tempMax);
//     }
//     return max;
// }
// maxSubarraySum([100, 200, 300, 400], 2);

// const root1 = insertLevelOrder([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
// const root2 = insertLevelOrder([
//     3,
//     5,
//     1,
//     6,
//     7,
//     4,
//     2,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     9,
//     8,
// ]);

// const root3 = insertLevelOrder([3, 5, 1, 6, 2, 9, 8, null, null, 7, 14]);
// const root4 = insertLevelOrder([
//     3,
//     5,
//     1,
//     6,
//     71,
//     4,
//     2,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     9,
//     8,
// ]);

// function traverseTreeForLeafs(
//     root: TreeNode,
//     tempArr: number[] = []
// ): number[] {
//     if (!root.left && !root.right) {
//         tempArr.push(root.val);
//     }

//     if (root.left) {
//         traverseTreeForLeafs(root.left, tempArr);
//     }
//     if (root.right) {
//         traverseTreeForLeafs(root.right, tempArr);
//     }
//     return tempArr;
// }

// function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
//     const leafs1 = traverseTreeForLeafs(root1);
//     const leafs2 = traverseTreeForLeafs(root2);
//     return leafs1.join('-') === leafs2.join('-');
// }

// console.log(leafSimilar(root1, root2));
// console.log(leafSimilar(root3, root4));

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}

	insert(values: number[]): TreeNode {
		const queue: TreeNode[] = [this];
		for (let i = 0; i < values.length; ) {
			const current = queue.shift();
			for (const side of ['left', 'right'] as const) {
				if (values[i]) {
					current[side] = new TreeNode(values[i]);
					queue.push(current[side]);
				}
				i++;
			}
		}
		return this;
	}
}

// const root = new TreeNode(1).insert([5, 3, null, 4, 10, 6, 9, 2]);

// function convertToUndirectedGraph(
//     current: TreeNode,
//     parent = 0,
//     treeMap = new Map<number, Set<number>>()
// ): Map<number, Set<number>> {
//     if (!current) {
//         return;
//     }
//     if (!treeMap.has(current.val)) {
//         treeMap.set(current.val, new Set());
//     }
//     const adjacentList = treeMap.get(current.val);
//     if (parent != 0) {
//         adjacentList.add(parent);
//     }
//     if (current.left) {
//         adjacentList.add(current.left.val);
//     }
//     if (current.right) {
//         adjacentList.add(current.right.val);
//     }
//     convertToUndirectedGraph(current.left, current.val, treeMap);
//     convertToUndirectedGraph(current.right, current.val, treeMap);
//     return treeMap;
// }

// function amountOfTime(root: TreeNode | null, start: number): number {
//     const graph = convertToUndirectedGraph(root);
//     const queue = [start];
//     const visited = new Set([start]);
//     let minutes = 0;
//     let currentVertex;
//     while (queue.length) {
//         let levelSize = queue.length;
//         while (levelSize > 0) {
//             currentVertex = queue.shift();
//             const adjacentList = Array.from(graph.get(currentVertex));
//             for (const neighbor of adjacentList) {
//                 if (!visited.has(neighbor)) {
//                     visited.add(neighbor);
//                     queue.push(neighbor);
//                 }
//             }
//             levelSize--;
//         }
//         minutes++;
//     }

//     return minutes - 1;
// }

// amountOfTime(root, 3);

// const root = new TreeNode(8).insert([
//     3,
//     10,
//     1,
//     6,
//     null,
//     14,
//     null,
//     null,
//     4,
//     7,
//     13,
// ]);

// function maxAncestorDiff(root: TreeNode | null): number {
//     let diff = 0;
//     function traverse(
//         root: TreeNode | null,
//         min: number = root.val,
//         max: number = root.val
//     ): number {
//         if (!root) {
//             diff = Math.max(diff, max - min);
//             return;
//         }
//         const { val, left, right } = root;
//         min = Math.min(min, val);
//         max = Math.max(max, val);
//         traverse(left, min, max);
//         traverse(right, min, max);
//     }
//     traverse(root);
//     return diff;
// }

// maxAncestorDiff(root);

// function halvesAreAlike(s: string): boolean {
//     const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     let left = 0;
//     let right = s.length - 1;
//     let vowelsDiff = 0;
//     while (left !== s.length / 2) {
//         set.has(s[left]) && vowelsDiff++;
//         set.has(s[right]) && vowelsDiff--;
//         left++;
//         right--;
//     }
//     return vowelsDiff === 0;
// }

// halvesAreAlike('book'); // true
// halvesAreAlike('textbook'); // false

// function minSteps(s: string, t: string): number {
//     const mapS = new Map<string, number>();
//     const mapT = new Map<string, number>();
//     let minSteps = 0;
//     for (let i = 0; i < s.length; i++) {
//         mapS.set(s[i], mapS.get(s[i]) + 1 || 1);
//         mapT.set(t[i], mapT.get(t[i]) + 1 || 1);
//     }
//     for (const [key, valueT] of mapT.entries()) {
//         let valueS = mapS.get(key);
//         if (valueS) {
//             if (valueS < valueT) {
//                 minSteps = minSteps + valueT - valueS;
//             }
//         } else {
//             minSteps += valueT;
//         }
//     }
//     return minSteps;
// }
// Map(2) { 'b' => 2, 'a' => 1 }
// Map(2) { 'a' => 2, 'b' => 2 }
// minSteps('bab', 'aba');
// minSteps('leetcode', 'practice');
// minSteps('gctcxyuluxjuxnsvmomavutrrfb', 'qijrjrhqqjxjtprybrzpyfyqtzf'); // 18

// function permute(nums: number[]): number[][] {
//     const result: number[][] = [];

//     function walk(temp: number[], rest: number[]): void {
//         if (!rest.length) {
//             result.push(temp);
//             return;
//         }

//         for (let i = 0; i < rest.length; i++) {
//             const newTemp = temp.concat(rest[i]);
//             const newRest = rest.slice(0);
//             newRest.splice(i, 1);
//             walk(newTemp, newRest);
//         }
//     }

//     walk([], nums);

//     return result;
// }

// permute([1, 2, 3])
// [
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//     [3, 2, 1],
// ];

// function closeStrings(word1: string, word2: string): boolean {
//   if (!word1.length || word1.length !== word2.length) {
//     return false;
//   }

//   if (word1 === word2) {
//     return true;
//   }
//   // word1 = word1.split('').sort().join('');
//   // word2 = word2.split('').sort().join('');
//   // if (word1 === word2) {
//   //     return true;
//   // }
//   const map1 = new Map<string, number>();
//   const map2 = new Map<string, number>();
//   for (let i = 0; i < word1.length; i++) {
//     map1.set(word1[i], map1.get(word1[i]) + 1 || 1);
//     map2.set(word2[i], map2.get(word2[i]) + 1 || 1);
//   }
//   for (const key of map1.keys()) {
//     if (!map2.has(key)) {
//       return false;
//     }
//   }
//   console.log(
//     Array.from(map1.values())
//       .sort((a, b) => a - b)
//       .join("")
//   );
//   console.log(
//     Array.from(map2.values())
//       .sort((a, b) => a - b)
//       .join("")
//   );
//   return (
//     Array.from(map1.values())
//       .sort((a, b) => a - b)
//       .join("") ===
//     Array.from(map2.values())
//       .sort((a, b) => a - b)
//       .join("")
//   );
// }
// closeStrings("cabbba", "abbccc"); // true  2 3 1 - 1 2 3
// closeStrings("abbzzca", "babzzcz"); // false 2 2 1 2 -  1 2 1 3
// closeStrings("uau", "ssx"); // false

// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

// Note:

// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.

// function findWinners(matches: number[][]): number[][] {
//   const winners = new Set<number>();
//   const losers: number[] = [];
//   const map = new Map<number, number[]>();

//   for (let i = 0; i < matches.length; i++) {
//     const [winner, loser] = matches[i];
//     winners.add(winner);
//     if (map.has(loser)) {
//       const winenrsArr = map.get(loser);
//       map.set(loser, [...winenrsArr, winner]);
//     } else {
//       map.set(loser, [winner]);
//     }
//   }
//   for (const [loser, lostTeams] of map) {
//     if (winners.has(loser)) {
//       winners.delete(loser);
//     }
//     if (lostTeams.length == 1) {
//       losers.push(loser);
//     }
//   }
//   return [[...winners].sort((a, b) => a - b), losers.sort((a, b) => a - b)];
// }

// function findWinners(matches: number[][]): number[][] {
//   const stats = new Map();
//   const ans: number[][] = [[], []];
//   for (let [winner, looser] of matches) {
//     stats.set(winner, stats.get(winner) ?? 0);
//     stats.set(looser, (stats.get(looser) ?? 0) + 1);
//   }
//   console.log(stats);
//   for (let [key, value] of stats) {
//     if (value === 0) {
//       ans[0].push(key);
//     }
//     if (value === 1) {
//       ans[1].push(key);
//     }
//   }
//   return [[...ans[0].sort((a, b) => a - b)], [...ans[1].sort((a, b) => a - b)]];
// }

// findWinners([
//   [1, 3],
//   [2, 3],
//   [3, 6],
//   [5, 6],
//   [5, 7],
//   [4, 5],
//   [4, 8],
//   [4, 9],
//   [10, 4],
//   [10, 9],
// ]);

// findWinners([
//   [2, 3],
//   [1, 3],
//   [5, 4],
//   [6, 4],
// ]);

// class RandomizedSet {
//   private set: Set<number>;
//   private array: number[];

//   constructor() {
//     this.set = new Set<number>();
//     this.array = [];
//   }

//   insert(val: number): boolean {
//     if (this.set.has(val)) {
//       return false;
//     }
//     this.set.add(val);
//     this.array.push(val);
//     return true;
//   }

//   remove(val: number): boolean {
//     if (!this.set.has(val)) {
//       return false;
//     }
//     this.set.delete(val);
//     const index = this.array.indexOf(val);
//     this.array[index] = this.array[this.array.length - 1];
//     this.array.pop();
//     return true;
//   }

//   getRandom(): number {
//     const randomIndex = Math.floor(Math.random() * this.array.length);
//     return this.array[randomIndex];
//   }
// }

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// function uniqueOccurrences(arr: number[]): boolean {
//   const map = new Map<number, number>();
//   for (const num of arr) {
//     map.set(num, map.get(num) + 1 || 1);
//   }
//   return map.size === new Set(map.values()).size;
// }

// uniqueOccurrences([1, 2, 2, 1, 1, 3]); // true

// function climbStairs(n: number): number {
//   const memo = new Map<number, number>();
//   function memoClimb(n: number, map: Map<number, number>): number {
//     if (n < 2) {
//       return 1;
//     }
//     if (memo.has(n)) {
//       return memo.get(n);
//     }
//     const res = memoClimb(n - 1, memo) + memoClimb(n - 2, memo);
//     memo.set(n, res);
//     return res;
//   }
//   return memoClimb(n, memo);
// }

// console.log(climbStairs(4));
// console.log(climbStairs(38));

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// (row, col) will be
// (row + 1, col - 1),
// (row + 1, col),
// or (row + 1, col + 1).

// function minFallingPathSum(matrix: number[][]): number {
//   for (let row = matrix.length - 2; row >= 0; row--) {
//     for (let col = 0; col < matrix[row].length; col++) {
//       matrix[row][col] += Math.min(
//         matrix[row + 1][col - 1] ?? Infinity,
//         matrix[row + 1][col] ?? Infinity,
//         matrix[row + 1][col + 1] ?? Infinity
//       );
//     }
//   }
//   console.log(Math.min(...matrix[0]));
//   return Math.min(...matrix[0]);
// }

// minFallingPathSum([
//   [2, 1, 3],
//   [6, 5, 4],
//   [7, 8, 9],
// ]);

// https://leetcode.com/problems/sum-of-subarray-minimums//2118729/very-detailed-stack-explanation-o-n-images-comments/?envType=daily-question&envId=2024-01-20
// const MOD = 1e9 + 7;
// function sumSubarrayMins(arr: number[]): number {
//   const stack = [-1];
//   let sum = 0;
//   arr.push(0); // Sentinel value to pop all elements off the stack

//   for (
//     let rightLesserIndex = 0;
//     rightLesserIndex < arr.length;
//     rightLesserIndex++
//   ) {
//     // Mantain a monotone increasing stack
//     while (arr[rightLesserIndex] < arr[stack.at(-1)]) {
//       const currElIndex = stack.pop();
//       const leftLesserIndex = stack.at(-1);
//       const leftSubArrsCountWithCurEl = currElIndex - leftLesserIndex;
//       const rightSubArrsCountWithCurEl = rightLesserIndex - currElIndex;
//       sum +=
//         leftSubArrsCountWithCurEl *
//         rightSubArrsCountWithCurEl *
//         arr[currElIndex];
//     }
//     stack.push(rightLesserIndex);
//   }
//   return sum % MOD;
// }

// sumSubarrayMins([3, 1, 2, 4]);

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation:
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.

// function rob(nums: number[]): number {
//   const dp: number[] = [];
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);
//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
//   }
//   return Math.max(...dp);
// }

// function rob(nums: number[]): number {
//   const dp = new Array<number>(nums.length + 2).fill(0);

//   for (let i = 2; i < dp.length; i++) {
//     const curHouse = nums[i - 2];

//     dp[i] = Math.max(dp[i - 1], curHouse + dp[i - 2]);
//     console.log(dp);
//   }

//   return dp[dp.length - 1];
// }

// function rob(nums: number[]): number {
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   const dp: number[] = Array.from({ length: nums.length });
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);
//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
//   }
//   return dp.at(-1);
// }
// function rob(nums: number[]): number {
//   let twoAgo = 0;
//   let prev = 0;
//   let curr = 0;
//   let temp = 0;
//   for (const num of nums) {
//     temp = curr;
//     curr = Math.max(num + twoAgo, num + prev, curr);
//     twoAgo = prev;
//     prev = temp;
//   }
//   return curr;
// }
// rob([1, 2, 3, 1]); // 1 + 3 = 4
// rob([1, 2, 3, 4, 5]); // 9
// rob([2, 7, 9, 3, 1]); // 2 + 9 + 1 = 12
// rob([2, 1, 1, 2]); // 4

// function findErrorNums(nums: number[]): number[] {
//   let l = nums.length;
//   if (l < 2) {
//     return [];
//   }
//   let expectedSum = (l * (l + 1)) / 2;
//   let actualSum = nums.reduce((acc, v) => acc + v, 0);
//   nums.sort((a, b) => a - b);
//   const duplicate = nums.find((el, i, arr) => arr[i] === arr[i + 1]);
//   const missing = expectedSum - (actualSum - duplicate);
//   return [duplicate, missing];
// }

// console.log(findErrorNums([1, 2, 2, 4])); // [2,3]
// console.log(findErrorNums([1, 1])); // [1,2]
// console.log(findErrorNums([3, 2, 2])); // [2,1]
// console.log(findErrorNums([1, 3, 3])); // [3,2]
// console.log(findErrorNums([1, 3, 3, 4])); // [3,2]
// console.log(findErrorNums([3, 2, 3, 4, 6, 5])); // [3,1]

// function maxLength(arr: string[]): number {
//   let max = 0;
//   function backTrack(start: number, str: string) {
//     if (str.length !== new Set(str).size) {
//       return;
//     }
//     max = Math.max(max, str.length);
//     for (let i = start; i < arr.length; i++) {
//       backTrack(i + 1, str + arr[i]);
//     }
//   }
//   backTrack(0, "");
//   return max;
// }

// console.log(maxLength(["un", "iq", "ue"])); // 4
// console.log(maxLength(["cha", "r", "act", "ers"])); // 6
// console.log(maxLength(["cha", "r", "act", "ers", "z"])); // 7
// console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"])); // 26
// console.log(
//   maxLength([
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//   ])
// ); // 16

// const root1 = new TreeNode(2).insert([3, 1, 3, 1, null, 1]);

// function pseudoPalindromicPaths(root: TreeNode | null): number {
//     if (!root.left && !root.right) {
//         return 1;
//     }
//     const freqMap = new Map<number, number>();
//     let count = 0;
//     function traverse(
//         root: TreeNode | null,
//         map: Map<number, number> = freqMap
//     ) {
//         if (!root) {
//             return;
//         }
//         map.set(root.val, map.get(root.val) + 1 || 1);
//         if (!root.left && !root.right) {
//             let oddfreqCounter = 0;
//             for (const n of map.values()) {
//                 if (n % 2 !== 0) {
//                     oddfreqCounter++;
//                 }
//             }
//             if (oddfreqCounter <= 1) {
//                 count++;
//             }

//             console.log(map, oddfreqCounter);
//         }
//         traverse(root.left, map);
//         traverse(root.right, map);
//         if (map.get(root.val) === 1) {
//             map.delete(root.val);
//         } else {
//             map.set(root.val, map.get(root.val) - 1);
//         }
//     }
//     traverse(root);
//     console.log(count);
//     return count;
// }

// pseudoPalindromicPaths(root1);
// console.log('--------------');
// pseudoPalindromicPaths(root2);
// console.log('--------------');
//
// pseudoPalindromicPaths(root3);

// function longestCommonSubsequence(text1: string, text2: string): number {
//     const dp: number[][] = Array.from({ length: text1.length + 1 }, () =>
//         Array(text2.length + 1).fill(0)
//     );

//     for (let i = 1; i <= text1.length; i++) {
//         for (let j = 1; j <= text2.length; j++) {
//             if (text1[i - 1] === text2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1] + 1;
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//             }
//         }
//     }
//     return dp.at(-1).at(-1);
// }

// longestCommonSubsequence('abcde', 'ace'); // "ace" 3
// longestCommonSubsequence('abc', 'abc'); // "abc" 1
// longestCommonSubsequence('abc', 'def'); // 0
// longestCommonSubsequence('bsbininm', 'jmjkbkjkv'); // 1
// longestCommonSubsequence('abcba', 'abcbcba'); // 5
// ('a', 'ace')

// function longestCommonPrefix(strs: string[]): string {
// if (strs.length === 1) {
//     return strs[0];
// }
// let longestPref = '';
// strs.sort();
// const firsString = strs.at(0);
// const lastString = strs.at(-1);
// for (let i = 0; i < strs[0].length; i++) {
//     if (firsString[i] === lastString[i]) {
//         longestPref += firsString[i];
//     } else {
//         return longestPref;
//     }
// }
// return longestPref;
// let prefix: string = strs[0];
// for (let i = 1; i < strs.length; i++) {
//     console.log(prefix);
//     while (strs[i].indexOf(prefix) != 0) {
//         prefix = prefix.substring(0, prefix.length - 1);
//     }
// }
// return prefix;
// }

// console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // fl
// console.log(longestCommonPrefix(['ab', 'a'])); // a
// console.log(longestCommonPrefix(['aaa', 'aa', 'aaa'])); // aa
// console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower'])); // flower
// console.log(longestCommonPrefix(['flow', 'flow', 'flow'])); // flow

// function findPaths(
//     m: number,
//     n: number,
//     maxMove: number,
//     startRow: number,
//     startColumn: number
// ): number {
//     const MOD = 1e9 + 7;

//     const cache: number[][][] = Array.from({ length: m }, () =>
//         Array.from({ length: n }, () => Array(maxMove + 1).fill(-1))
//     );

//     function move(x: number, y: number, maxMove: number) {
//         if (x < 0 || y < 0 || x >= m || y >= n) {
//             return 1;
//         }
//         if (maxMove <= 0) {
//             return 0;
//         }
//         if (cache[x][y][maxMove] !== -1) {
//             return cache[x][y][maxMove];
//         }
//         let sum = 0;
//         sum = (sum + move(x + 1, y, maxMove - 1)) % MOD;
//         sum = (sum + move(x, y - 1, maxMove - 1)) % MOD;
//         sum = (sum + move(x - 1, y, maxMove - 1)) % MOD;
//         sum = (sum + move(x, y + 1, maxMove - 1)) % MOD;

//         cache[x][y][maxMove] = sum;
//         return sum;
//     }

//     return move(startRow, startColumn, maxMove);
// }

// console.log(findPaths(2, 2, 2, 0, 0)); // 6;

// function numSubmatrixSumTarget(matrix: number[][], target: number): number {
//     const rows = matrix.length;
//     const columns = matrix[0].length;
//     const subSum: number[][] = Array.from({ length: rows + 1 }, () =>
//         Array(columns + 1).fill(0)
//     );
//     let res = 0;

//     for (let r = 1; r <= rows; r++) {
//         for (let c = 1; c <= columns; c++) {
//             const top = subSum[r - 1][c];
//             const left = subSum[r][c - 1];
//             const topLeft = subSum[r - 1][c - 1];
//             subSum[r][c] = matrix[r - 1][c - 1] + top + left - topLeft;
//         }
//     }

//     for (let r1 = 1; r1 <= rows; r1++) {
//         for (let r2 = r1; r2 <= rows; r2++) {
//             for (let c1 = 1; c1 <= columns; c1++) {
//                 for (let c2 = c1; c2 <= columns; c2++) {
//                     const top = subSum[r1 - 1][c2];
//                     const left = subSum[r2][c1 - 1];
//                     const topLeft = subSum[r1 - 1][c1 - 1];
//                     let sum = subSum[r2][c2] - top - left + topLeft;
//                     if (sum === target) {
//                         res++;
//                     }
//                 }
//             }
//         }
//     }
//     console.log(res);
//     return res;
// }

// numSubmatrixSumTarget(
//     [
//         [0, 1, 0],
//         [1, 1, 1],
//         [0, 1, 0],
//     ],
//     0
// );

// function kInversePairs(n: number, k: number): number {
//     const MOD = 1e9 + 7;
//     const memo = new Map<string, number>();
//     function find(n: number, k: number) {
//         if (n === 0) {
//             return k === 0 ? 1 : 0;
//         }
//         if (k < 0) {
//             return 0;
//         }
//         const val = `${n},${k}`;
//         if (memo.has(val)) {
//             return memo.get(val);
//         }
//         memo.set(val, 0);
//         for (let i = 0; i < n; i++) {
//             memo.set(val, memo.get(val) + (find(n - 1, k - i) % MOD));
//         }
//         return memo.get(val);
//     }

//     return find(n, k);
// }

// function kInversePairs(n: number, k: number): number {
//     const MOD = 1e9 + 7;
//     const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0))
//     dp[0][0] = 1;
//     for (let i = 1; i <= n; i++) {
//         dp[i][0] = 1;
//         for (let j = 1; j <= k; j++) {
//             dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % MOD;
//             if (j >= i) {
//                 dp[i][j] = (dp[i][j] - dp[i-1][j-i] + MOD) % MOD;
//             }
//         }
//     }

//     return dp[n][k];
// };

// kInversePairs(3, 1);

// class MyQueue {
//     public pushStack: number[];
//     public popStack: number[];
//     constructor() {
//         this.pushStack = [];
//         this.popStack = [];
//     }

//     push(x: number): void {
//         this.pushStack.push(x);
//     }

//     pop(): number {
//         if (this.empty()) {
//             return null;
//         }
//         if (!this.popStack.length) {
//             while (this.pushStack.length) {
//                 this.popStack.push(this.pushStack.pop());
//             }
//         }
//         return this.popStack.pop();
//     }

//     peek(): number {
//         if (this.empty()) {
//             return null;
//         }
//         if (!this.popStack.length) {
//             while (this.pushStack.length) {
//                 this.popStack.push(this.pushStack.pop());
//             }
//         }
//         return this.popStack.at(-1);
//     }

//     empty(): boolean {
//         return Math.max(this.popStack.length, this.pushStack.length) === 0;
//     }
// }

// const myQueue = new MyQueue();
// myQueue.push(1);
// myQueue.push(2);
// console.log(myQueue.pop());
// console.log(myQueue.peek());
// console.log(myQueue);

// ["MyQueue","push","push","pop","peek"]

// [[],[1],[2],[],[]]

// function evalRPN(tokens: string[]): number {
//     const operators = ['+', '-', '*', '/'];
//     const stack: number[] = [];
//     for (let i = 0; i < tokens.length; i++) {
//         const t = tokens[i];
//         if (!operators.includes(t)) {
//             stack.push(Number(t));
//         } else {
//             const el2 = `(${stack.pop()})`;
//             const el1 = stack.pop();
//             let res = eval(el1 + t + el2);
//             if (t === '/') {
//                 res = Math.trunc(res);
//             }

//             stack.push(res);
//         }
//     }
//     console.log(stack[0]);
//     return stack[0];
// }

// evalRPN(['2', '1', '+', '3', '*']); // ((2 + 1) * 3) = 9
// evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']); // 22
// evalRPN(['4', '13', '5', '/', '+']); // 6
// evalRPN(['4', '-2', '/', '2', '-3', '-', '-']); // -7

//["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// const stack = [10, 6, -132];
//  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5

// ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// function gcdOfStrings(str1: string, str2: string): string {
//     let length1 = Math.max(str1.length, str2.length);
//     let length2 = Math.min(str1.length, str2.length);
//     //  (a, b) -> (b, a mod b) Euclidean algorithm
//     while (length2 > 0) {
//         [length1, length2] = [length2, length1 % length2];
//     }
//     let gcd = length1;
//     let commonStr = str1.slice(0, length1);

//     if (
//         commonStr.repeat(str1.length / gcd) !== str1 ||
//         commonStr.repeat(str2.length / gcd) !== str2
//     ) {
//         return '';
//     } else {
//         return commonStr;
//     }
// }
// function gcdOfStrings(str1: string, str2: string): string {
//     if (str1 === str2) {
//         return str1;
//     }
//     if (str2.length > str1.length) {
//         return gcdOfStrings(str2, str1);
//     }
//     if (str1.startsWith(str2)) {
//         return gcdOfStrings(str1.substring(str2.length), str2);
//     }
//     return '';
// }

// console.log(gcdOfStrings('ABABAB', 'ABAB')); //"AB"
// console.log(gcdOfStrings('ABCDEF', 'ABC')); // ""
// console.log(
//     gcdOfStrings(
//         'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX',
//         'TAUXXTAUXXTAUXXTAUXXTAUXX'
//     )
// ); //"TAUXX"

//  a – b and b.  (6 4) -> (2 4) ( 2 2 )
// "ABCABC", str2 = "ABC"   (3)

// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//     const map = new Map<number, number>();
//     for (let i = 0; i < nums1.length; i++) {
//         map.set(nums1[i], -1);
//     }
//     for (let i = 0; i < nums2.length; i++) {
//         if (map.has(nums2[i])) {
//             for (let j = i + 1; j < nums2.length; j++) {
//                 if (nums2[j] > nums2[i] && map.get(nums2[i]) === -1) {
//                     map.set(nums2[i], nums2[j]);
//                 }
//             }
//         }
//     }
//     console.log(...map.values());
//     return [...map.values()];
// }

// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//     const stack = [];
//     const map: Map<number, number> = new Map();

//     for (const n of nums2) {
//         while (stack.length && n > stack.at(-1)) {
//             map.set(stack.pop(), n);
//         }

//         stack.push(n);
//     }

//     for (let i = 0; i < nums1.length; i++) {
//         if (map.has(nums1[i])) {
//             nums1[i] = map.get(nums1[i]);
//         } else {
//             nums1[i] = -1;
//         }
//     }
//     return nums1;
// }

// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//     const stack = [];
//     const map: Map<number, number> = new Map();
//     const res = Array(nums1.length).fill(-1);
//     for (let i = 0; i < nums1.length; i++) {
//         map.set(nums1[i], i);
//     }

//     for (let i = 0; i < nums2.length; i++) {
//         const n = nums2[i];
//         while (stack.length && n > stack.at(-1)) {
//             res[map.get(stack.pop())] = n;
//         }
//         if (map.has(n)) {
//             stack.push(n);
//         }
//     }
//     return res;
// }

// nextGreaterElement([4, 1, 2], [1, 3, 4, 2]); //  [-1,3,-1]

// function dailyTemperatures(temperatures: number[]): number[] {
//     let res: number[] = Array(temperatures.length).fill(0);

//     for (let i = 0; i < temperatures.length; i++) {
//         const day = temperatures[i];
//         for (let j = i + 1; j < temperatures.length; j++) {
//             const nextDay = temperatures[j];
//             if (nextDay > day && res[i] === 0) {
//                 res[i] = j - i;
//             }
//         }
//     }

//     console.log(res);
//     return res;
// }

// function dailyTemperatures(temperatures: number[]): number[] {
//     const stack: number[] = [];

//     for (let i = 0; i < temperatures.length; i++) {
//         const temp = temperatures[i];
//         while (stack.length && temperatures[stack.at(-1)] < temp) {
//             const prevI = stack.pop();
//             temperatures[prevI] = i - prevI;
//         }
//         stack.push(i);
//     }
//     while (stack.length) {
//         temperatures[stack.pop()] = 0;
//     }

//     return temperatures;
// }

// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]); // [1,1,4,2,1,1,0,0]
// dailyTemperatures([30, 40, 50, 60]); // [1,1,1,0]
// dailyTemperatures([30, 60, 90]); // [1,1,0]

// 1,1,4, -1, -1, -1
//

// function divideArray(nums: number[], k: number): number[][] {
//     if (nums.length % 3 !== 0) {
//         return [];
//     }
//     const res: number[][] = [];
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i += 3) {
//         const n1 = nums[i];
//         const n2 = nums[i + 1];
//         const n3 = nums[i + 2];
//         if (n2 - n1 > k || n2 - n3 > k || n3 - n1 > k) {
//             return [];
//         }
//         res.push([n1, n2, n3]);
//     }
//     return res;
// }

// console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2)); // [[1,1,3],[3,4,5],[7,8,9]]
// console.log(divideArray([6, 10, 5, 12, 7, 11, 6, 6, 12, 12, 11, 7], 2)); // [[5,6,6],[6,7,7],[10,11,11],[12,12,12]]
// console.log(divideArray([1, 3, 3, 2, 7, 3], 3)); // [[1,1,3],[3,4,5],[7,8,9]]
// console.log(
//     divideArray(
//         [
//             15, 13, 12, 13, 12, 14, 12, 2, 3, 13, 12, 14, 14, 13, 5, 12, 12, 2,
//             13, 2, 2,
//         ],
//         2
//     )
// ); // []

// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//     const greatestN = Math.max(...candies);
//     return candies.map((el) => el + extraCandies >= greatestN);
// }

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [(true, true, true, false, true)];

// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//     for (let i = 0; i < flowerbed.length; i++) {
//         if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
//             flowerbed[i] = 1;
//             n--;
//         }
//         if (n === 0) {
//             return true;
//         }
//     }
//     return false;
// }

// 5 - 2 = 3 - 1 = 2
// 5 - 2 = 3 - 2 = 1
// 6 - 2 = 4 - 2 = 2

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true 3
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false 3
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // false 4
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)); // true 5
// console.log(canPlaceFlowers([0, 1, 0], 1)); // false
// console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
// console.log(canPlaceFlowers([1, 0, 1, 0, 0], 1)); // true
// console.log(canPlaceFlowers([0, 0, 0, 0, 1], 2)); // true
// console.log(canPlaceFlowers([1, 0], 1)); // false
// console.log(canPlaceFlowers([0, 0, 0], 2)); // true
// console.log(canPlaceFlowers([0, 1], 1)); // false
// 1 0 1 0 1
//  1 - false
//
// [1, 0, 0]

// function sequentialDigits(low: number, high: number): number[] {
//     let res: number[] = [];

//     for (let i = 1; i <= 9; i++) {
//         let n = i;
//         let azz = `${i}`;
//         for (let j = 1; j < 9; j++) {
//             if (n >= 9) {
//                 continue;
//             }
//             azz += `${++n}`;
//             const numAzz = parseInt(azz);
//             console.log(numAzz);
//             if (low <= numAzz && numAzz < high) {
//                 res.push(numAzz);
//             }
//         }
//     }

//     return res;
// }

// function sequentialDigits(low: number, high: number): number[] {
//     const res: number[] = [];

//     const helper = (n: number, index: number) => {
//         if (n > high || index > 10) {
//             return;
//         }
//         if (n >= low) {
//             res.push(n);
//         }
//         helper(n * 10 + index, index + 1);
//     };

//     for (let i = 1; i < 9; i++) {
//         helper(0, i);
//     }

//     return res;
// }

// console.log(sequentialDigits(100, 300)); // [123,234]

// function reverseVowels(s: string): string {
//     if (s.length === 1) {
//         return s;
//     }
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     const arr = s.split('');
//     const filteredVowels = arr.filter((c) => vowels.includes(c));
//     if (!filteredVowels.length) {
//         return s;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (!filteredVowels.length) {
//             return arr.join('');
//         }

//         if (vowels.includes(arr[i])) {
//             arr[i] = filteredVowels.pop();
//         }
//     }

//     return arr.join('');
// }

// 'hello'.slice(1) --> ello
// 'hello'.at(0) --> h

// console.log(reverseVowels('hello')); // holle;
// console.log(reverseVowels('leetcode')); // leotcede;
// console.log(reverseVowels('aA')); // "Aa";
// console.log(reverseVowels('Aa')); // "Aa";

// function maxSumAfterPartitioning(arr: number[], k: number): number {
//     const memo = new Map<number, number>();

//     function helper(i: number): number {
//         if (memo.has(i)) {
//             return memo.get(i);
//         }
//         let tempMax = 0;
//         let max = 0;
//         for (let j = i; j < Math.min(arr.length, i + k); j++) {
//             tempMax = Math.max(tempMax, arr[j]);
//             let tempArrSize = j - i + 1;
//             max = Math.max(max, helper(j + 1) + tempMax * tempArrSize);
//         }
//         memo.set(i, max);
//         return max;
//     }

//     return helper(0);
// }

// console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)); // 84 [15,15,15,9,10,10,10]
// console.log(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4)); // 83

// if (res[index]) {
//     res[index].push(arr[i]);
//     // res[index] = [Math.max(...res[index])];
// } else {
//     res[index] = [arr[i]];
// }

// function minWindow(s: string, t: string): string {
//     const l = s.length;
//     if (t.length > l) {
//         return '';
//     }
//     if (t === s) {
//         return t;
//     }
//     if (t.length > l) {
//         return '';
//     }
//     const tMap = new Map<string, number>();
//     const windowMap = new Map<string, number>();
//     let left = 0;
//     let right = 0;
//     let minIndexes: number[] = [];
//     for (const c of t) {
//         tMap.set(c, tMap.get(c) + 1 || 1);
//     }
//     const charsNeed = tMap.size;
//     let charsHave = 0;
//     while (right < l) {
//         let rightChar = s[right];
//         windowMap.set(rightChar, windowMap.get(rightChar) + 1 || 1);
//         if (
//             tMap.has(rightChar) &&
//             tMap.get(rightChar) === windowMap.get(rightChar)
//         ) {
//             charsHave++;
//         }

//         while (charsHave === charsNeed) {
//             let leftChar = s[left];
//             if (!minIndexes.length) {
//                 minIndexes[0] = left;
//                 minIndexes[1] = right;
//             }
//             if (right - left < minIndexes[1] - minIndexes[0]) {
//                 minIndexes[0] = left;
//                 minIndexes[1] = right;
//             }
//             windowMap.set(leftChar, windowMap.get(leftChar) - 1);
//             if (
//                 tMap.has(leftChar) &&
//                 windowMap.get(leftChar) < tMap.get(leftChar)
//             ) {
//                 charsHave--;
//             }
//             left++;
//         }
//         right++;
//     }
//     return minIndexes.length ? s.slice(minIndexes[0], minIndexes[1] + 1) : '';
// }

// console.log('res is:', minWindow('ADOBECODEBANC', 'ABC')); // BANC
// console.log('res is:', minWindow('aaaaaaaaaaaabbbbbcdd', 'abcdd')); // abbbbbcdd
// console.log('res is:', minWindow('abc', 'cba')); // "abc"
// console.log('res is:', minWindow('cabwefgewcwaefgcf', 'cae')); // "cwae"
// console.log('res is:', minWindow('aaaaa', 'bb')); // "cwae"

// function firstUniqChar(s: string): number {
//     if (s.length === 1) {
//         return 0;
//     }

//     const map = new Map<string, number>();
//     for (const c of s) {
//         map.set(c, (map.get(c) ?? 0) + 1);
//     }

//     for (let i = 0; i < s.length; i++) {
//         if (map.get(s[i]) === 1) {
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(firstUniqChar('leetcode')); // 0
// console.log(firstUniqChar('loveleetcode')); // 2
// console.log(firstUniqChar('dddccdbba')); // 8

// function containsDuplicate(nums: number[]): boolean {
//     return new Set(nums).size !== nums.length;
// }

// console.log(containsDuplicate([1, 2, 3, 1])); // true
// console.log(containsDuplicate([1, 2, 3, 4])); // false

// function reverseWords(s: string): string {
//     console.log(
//         s
//             .trim()
//             .split(' ')
//             .filter((el) => el)
//             .reverse()
//     );
//     return s
//         .trim()
//         .split(' ')
//         .filter((el) => el)
//         .reverse()
//         .join('');
// }

// reverseWords('  hello world  '); // "world hello"
// reverseWords('a good   example'); // "world hello"

// function groupAnagrams(strs: string[]): string[][] {
//     if (!strs.length) {
//         return [['']];
//     }
//     if (strs.length === 1) {
//         return [strs];
//     }
//     const map = new Map<string, string[]>();
//     for (let i = 0; i < strs.length; i++) {
//         let str = strs[i];
//         str = str.split('').sort().join('');

//         if (map.has(str)) {
//             map.set(str, [...map.get(str), strs[i]]);
//         } else {
//             map.set(str, [strs[i]]);
//         }
//     }
//     return [...map.values()];
// }
// [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]
// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']); //[["bat"],["nat","tan"],["ate","eat","tea"]]
// groupAnagrams(['']); //[[""]]
// groupAnagrams(['a']); //[["a"]]

// function productExceptSelf(nums: number[]): number[] {
//     const n = nums.length;
//     const res: number[] = [];
//     let prefix = 1;
//     for (let i = 0; i < n; i++) {
//         res[i] = prefix;
//         prefix *= nums[i];
//     }
//     let postfix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         res[i] = postfix * res[i];
//         postfix *= nums[i];
//     }

//     return res;
// }

// productExceptSelf([1, 2, 3, 4]); // [24,12,8,6]  [ 1, 1, 2, 6 ]
// productExceptSelf([-1, 1, 0, -3, 3]); // [0,0,9,0,0]

// function increasingTriplet(nums: number[]): boolean {
//     if (nums.length < 3) {
//         return false;
//     }

//     let one = Infinity;
//     let two = Infinity;

//     for (const n of nums) {
//         if (n <= one) {
//             one = n;
//         } else if (n <= two) {
//             two = n;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }

//  nums[i]  < nums[j] < nums[k]

// console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
// console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
// console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true
// console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // true

// function topKFrequent(nums: number[], k: number): number[] {
//     if (nums.length === 1) {
//         return nums;
//     }
//     const map = new Map<number, number>();
//     for (const n of nums) {
//         map.set(n, (map.get(n) ?? 0) + 1);
//     }

//     return [...map.entries()]
//         .sort((a, b) => b[1] - a[1])
//         .slice(0, k)
//         .map(([key]) => key);
// }

// topKFrequent([1, 1, 1, 2, 2, 3], 2); // [1,2]

// function frequencySort(s: string): string {
//     const map = new Map<string, number>();
//     for (const c of s) {
//         map.set(c, (map.get(c) ?? 0) + 1);
//     }
//     let buckets = new Map<number, string[]>();
//     for (const [k, v] of map) {
//         buckets.set(v, buckets.get(v) ? [...buckets.get(v), k] : [k]);
//     }
//     let res = '';
//     for (let i = s.length; i > 0; i--) {
//         if (buckets.has(i)) {
//             const chars = buckets.get(i);
//             for (const c of chars) {
//                 res += c.repeat(i);
//             }
//         }
//     }

//     return res;
// }

// frequencySort('tree'); // "eert"
// frequencySort('cccaaa'); // "aaaccc"
// frequencySort('eeeee'); // "aaaccc"
// frequencySort('Aabb'); // "bbAa"
// frequencySort('raaeaedere'); // "eeeeaaarrd"

/**
 Do not return anything, modify nums in-place instead.
 */
// function moveZeroes(nums: number[]): void {
//     let l = nums.length;
//     for (let i = 0; i < l; i++) {
//         console.log(nums, nums[i]);
//         if (nums[i] === 0) {
//             nums.splice(i, 1);
//             nums.push(0);
//             i--;
//             l--;
//         }
//     }
//     console.log(nums);
// }

// moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
// moveZeroes([0, 0, 1]); // [1,0,0]

// function maxSubArray(nums: number[]): number {
//     if (nums.length === 1) {
//         return nums[0];
//     }
//     let maxSum = nums[0];
//     let tempSum = 0;

//     for (const n of nums) {
//         tempSum = Math.max(tempSum, 0);
//         tempSum += n;
//         maxSum = Math.max(tempSum, maxSum);
//     }
//     return maxSum;
// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// function maxSubarraySumCircular(nums: number[]): number {
//     if (nums.length === 1) {
//         return nums[0];
//     }
//     let minLinearSum = nums[0];
//     let maxLinearSum = nums[0];
//     let tempMinSum = 0;
//     let tempMaxSum = 0;
//     let totalNumsSum = 0;
//     for (const n of nums) {
//         totalNumsSum += n;
//         tempMinSum = Math.min(tempMinSum, 0);
//         tempMaxSum = Math.max(tempMaxSum, 0);
//         tempMinSum += n;
//         tempMaxSum += n;
//         minLinearSum = Math.min(tempMinSum, minLinearSum);
//         maxLinearSum = Math.max(tempMaxSum, maxLinearSum);
//     }
//     if (maxLinearSum < 0) {
//         return maxLinearSum;
//     }
//     const maxCircularSum = totalNumsSum - minLinearSum;
//     return Math.max(maxCircularSum, maxLinearSum);
// }

// console.log(maxSubarraySumCircular([1, -2, 3, -2])); // 3
// console.log(maxSubarraySumCircular([5, -3, 5])); // 10
// console.log(maxSubarraySumCircular([-5, 3, 5])); // 8
// console.log(maxSubarraySumCircular([-2, 4, 4, 4, 6])); // 18
// console.log(maxSubarraySumCircular([3, 1, 3, 2, 6])); // 15
// console.log(maxSubarraySumCircular([2, -2, 2, 7, 8, 0])); // 19
// console.log(maxSubarraySumCircular([-3, -2, -3])); // -2

// function isSubsequence(s: string, t: string): boolean {
//     if (!s.length) {
//         return true;
//     }
//     if (t.length < s.length) {
//         return false;
//     }

//     let sP = 0;
//     let tP = 0;

//     while (sP < s.length && tP < t.length) {
//         if (s[sP] === t[sP]) {
//             sP++;
//             tP++;
//         } else {
//             tP++;
//         }
//     }
//     return sP === s.length;
// }

// console.log(isSubsequence('abc', 'ahbgdc'));
// console.log(isSubsequence('axc', 'ahbgdc'));
// console.log(isSubsequence('acb', 'ahbgdc'));

// function numSquares(n: number): number {
//     const dp = Array(n + 1).fill(Infinity);
//     dp[0] = 0;
//     let count = 1;
//     while (count ** 2 <= n) {
//         let sq = count ** 2;
//         console.log(sq);
//         for (let i = sq; i <= n; i++) {
//             dp[i] = Math.min(dp[i - sq] + 1, dp[i]);
//         }

//         count++;
//     }
//     return dp[n];
// }

// console.log(numSquares(12)); // 3
// console.log(numSquares(13)); // 2
// console.log(numSquares(49)); // 2

// function merge(intervals: number[][]): number[][] {
//     const l = intervals.length;
//     if (l === 1) {
//         return intervals;
//     }
//     intervals.sort((a, b) => a[0] - b[0]);
//     let L = 0;
//     let R = 1;

//     while (R < l) {
//         if (!intervals[R]) {
//             console.log('RES', intervals);
//             return intervals;
//         }
//         const prev = intervals[L];
//         const curr = intervals[R];

//         if (prev[1] >= curr[0]) {
//             intervals[R] = [
//                 Math.min(prev[0], curr[0]),
//                 Math.max(prev[1], curr[1]),
//             ];
//             intervals.splice(L, 1);
//             R = L;
//         } else {
//             L++;
//         }
//         R++;
//     }
//     console.log('RES', intervals);
//     return intervals;
// }

// merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
// ]); // [[1,6],[8,10],[15,18]]

// merge([
//     [1, 4],
//     [4, 5],
// ]);
// // [[1,5]]

// merge([
//     [1, 4],
//     [0, 4],
// ]);
// // [[0,4]]

// merge([
//     [1, 4],
//     [0, 2],
//     [3, 5],
// ]);
// // [[0,5]]

// merge([
//     [2, 3],
//     [2, 2],
//     [3, 3],
//     [1, 3],
//     [5, 7],
//     [2, 2],
//     [4, 6],
// ]);
// [[1,3],[4,7]]

// merge([
//     [2, 3],
//     [4, 5],
//     [6, 7],
//     [8, 9],
//     [1, 10],
// ]);
// // [[1,10]]

// function isValidSudoku(board: string[][]): boolean {
//     function numsAreUniq(arr: string[]) {
//         const uniqNums = new Set<string>();
//         let numsNeeded = 0;
//         for (const el of arr) {
//             if (el !== '.') {
//                 uniqNums.add(el);
//                 numsNeeded++;
//             }
//         }
//         if (uniqNums.size > 0 && uniqNums.size !== numsNeeded) {
//             return false;
//         }
//         return true;
//     }

//     for (let i = 0; i < 9; i += 3) {
//         for (let j = 0; j < 9; j += 3) {
//             const miniBoard = [
//                 board[i][j],
//                 board[i][j + 1],
//                 board[i][j + 2],
//                 board[i + 1][j],
//                 board[i + 1][j + 1],
//                 board[i + 1][j + 2],
//                 board[i + 2][j],
//                 board[i + 2][j + 1],
//                 board[i + 2][j + 2],
//             ];
//             if (!numsAreUniq(miniBoard)) {
//                 return false;
//             }
//         }
//     }

//     for (let i = 0; i < 9; i++) {
//         if (!numsAreUniq(board[i])) {
//             return false;
//         }
//         let colums: string[] = [];
//         for (let j = 0; j < 9; j++) {
//             colums.push(board[j][i]);
//         }
//         if (!numsAreUniq(colums)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(
//     isValidSudoku([
//         ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//         ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//         ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//         ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//         ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//         ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//         ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//         ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//         ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
//     ])
// );

// console.log(
//     isValidSudoku([
//         ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
//         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//         ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
//         ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
//         ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
//         ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ])
// );

// function maxTurbulenceSize(arr: number[]): number {
//     if (arr.length === 1) {
//         return 1;
//     }
//     let L = 0;
//     let R = 1;
//     let tempCount = 1;
//     let resMax = 1;
//     if (arr[L] !== arr[R]) {
//         tempCount = 2;
//         resMax = 2;
//     }

//     while (R < arr.length) {
//         const curr = arr[L];
//         const next = arr[R];
//         const third = arr[R + 1];

//         if (third === undefined) {
//             if (curr !== next && !tempCount) {
//                 tempCount += 2;
//             }
//             return Math.max(resMax, tempCount);
//         }
//         if ((curr < next && next > third) || (curr > next && next < third)) {
//             L++;
//             if (!tempCount) {
//                 tempCount = 3;
//             } else {
//                 tempCount++;
//             }
//         }
//         if (curr === next || next === third) {
//             L = R;
//             tempCount = 0;
//         }
//         if ((curr < next && next < third) || (curr > next && next > third)) {
//             L++;
//             tempCount = 0;
//         }
//         resMax = Math.max(resMax, tempCount);
//         R++;
//     }
//     return Math.max(resMax, tempCount);
// }

// console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])); // 5
// console.log(maxTurbulenceSize([4, 8, 12, 16])); // 2
// console.log(maxTurbulenceSize([0, 1, 1, 0, 1, 0, 1, 1, 0, 0])); // 5
// console.log(maxTurbulenceSize([1, 1, 2])); // 2
// console.log(maxTurbulenceSize([0, 8, 45, 88, 48, 68, 28, 55, 17, 24])); // 8

// [4, 3, 2]

// function firstPalindrome(words: string[]): string {
//     for (const w of words) {
//         if (w === w.split('').reverse().join('')) {
//             return w;
//         }
//     }

//     return '';
// }

// console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']));
// console.log(firstPalindrome(['notapalindrome', 'racecar']));
// console.log(firstPalindrome(['def', 'ghi']));

// function findMaxAverage(nums: number[], k: number): number {
//     let L = 0;
//     let R = k - 1;
//     let maxSum = 0;
//     let tempSum = 0;
//     for (let i = 0; i < k; i++) {
//         tempSum += nums[i];
//     }
//     maxSum = tempSum;

//     for (let i = k; i < nums.length; i++) {
//         tempSum += nums[i] - nums[i - k];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum / k;
// }

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
// console.log(findMaxAverage([5], 1)); // 5.00000

// function rearrangeArray(nums: number[]): number[] {
//     const middle = nums.length / 2;
//     const pos: number[] = [];
//     const neg: number[] = [];
//     nums.forEach((n) => (n > 0 ? pos : neg).push(n));
//     for (let i = 0, j = 0; i < middle; i++, j = j * 2) {
//         nums[j] = pos[i];
//         nums[j + 1] = neg[i];
//     }
//     return nums;
// }

// console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3,-2,1,-5,2,-4]

// function largestPerimeter(nums: number[]): number {
//     nums.sort((a, b) => a - b);
//     let total = 0;
//     let res = -1;
//     for (const n of nums) {
//         console.log(total, n);
//         if (total > n) {
//             res = total + n;
//         }

//         total += n;
//     }

//     return res;
// }

// console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3]));

// function longestOnes(nums: number[], k: number): number {
//     let L = 0;
//     let max = 0;
//     let zeros = 0;
//     for (let R = 0; R < nums.length; R++) {
//         if (!nums[R]) {
//             while (zeros >= k) {
//                 if (!nums[L]) {
//                     zeros--;
//                 }
//                 L++;
//             }
//             zeros++;
//         }
//         max = Math.max(max, R - L + 1);
//     }
//     return max;
// }

// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6;

// console.log(
//     longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
// ); // 10;

// function longestSubarray(nums: number[]): number {
//     let L = 0;
//     let zeros = 0;
//     let maxL = 0;

//     for (let R = 0; R < nums.length; R++) {
//         zeros += nums[R] === 0 ? 1 : 0;
//         while (zeros > 1) {
//             zeros -= nums[L] === 0 ? 1 : 0;
//             L++;
//         }
//         maxL = Math.max(maxL, R - L);
//     }
//     return maxL;
// }

// // console.log(longestSubarray([1, 1, 0, 1])); // 3
// console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // 5
// // console.log(longestSubarray([1, 1, 1])); // 2

// function isPowerOfTwo(n: number): boolean {
//     let x = 1;
//     while (x < n) {
//         x *= 2;
//     }
//     return x == n;
// }

// function isPowerOfTwo(n: number): boolean {
//     const log = Math.log2(n);
//     return Number.isInteger(log);
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(6));
// console.log(isPowerOfTwo(0));
// console.log(isPowerOfTwo(8));

// function pivotIndex(nums: number[]): number {
//     let leftSum = 0;
//     let rightSum = nums.reduce((el, acc) => el + acc);
//     for (let i = 0; i < nums.length; i++) {
//         const el = nums[i];
//         leftSum += el;
//         if (leftSum === rightSum) {
//             return i;
//         }
//         rightSum -= el;
//     }
//     return -1;
// }

// console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
// console.log(pivotIndex([1, 2, 3])); // -1
// console.log(pivotIndex([2, 1, -1])); // 0

// function missingNumber(nums: number[]): number {
//     const l = nums.length;
//     const fullSum = (l * (l + 1)) / 2;
//     const actualSum = nums.reduce((el, acc) => el + acc);
//     return fullSum - actualSum;
// }

// function findDifference(nums1: number[], nums2: number[]): number[][] {
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);
//     for (const n of [...set1]) {
//         if (set2.has(n)) {
//             set1.delete(n);
//             set2.delete(n);
//         }
//     }
//     return [[...set1], [...set2]];
// }

// console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]
// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // [ [ 3 ], [] ]

// function uniqueOccurrences(arr: number[]): boolean {
//     const map = new Map<number, number>();
//     for (const n of arr) {
//         map.set(n, (map.get(n) ?? 0) + 1);
//     }
//     return new Set(map.values()).size === map.size;
// }

// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
// console.log(uniqueOccurrences([1, 2])); //false
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true

// for (let i = 1; i < 10; i++) {
//     setTimeout(() => console.log(i), 10);
// }

// console.log(sum(1)(2)); // => 6
// console.log(sum(1)); // => 1

// function bind(
//     func: (...args: any[]) => any,
//     context: typeof globalThis
// ): (...args: any[]) => any {
//     return function () {
//         return func.apply(context);
//     };
// }

// bind(function azz() {
//     return 1 + 4;
// }, this);

// function Ctx() {
//     this.a = 1;
//     return this;
// }
// const ctx = Ctx();
// console.log(ctx.a);

// function Person(first: string, last: string, age: number, eye: string): Person {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// const myMother = new Person('Sally', 'Rally', 48, 'green');

// function Timer(timeout) {
//     const date = Date.now();

//     setTimeout(function () {
//         console.log(Date.now() - date);
//     }, timeout);
// }
// new Timer(500);

// Promise.resolve().then();

// function rangeBitwiseAnd(left: number, right: number): number {
//     let i = 0;
//     while (left != right) {
//         left >>= 1;
//         right >>= 1;
//         i++;
//     }
//     return left << i;
// }

// console.log(rangeBitwiseAnd(5, 7)); // 4

// function removeStars(s: string): string {
//     const stack: string[] = [];
//     for (const c of s) {
//         if (c === '*') {
//             stack.pop();
//         } else {
//             stack.push(c);
//         }
//     }
//     return stack.join('');
// }

// console.log(removeStars('leet**cod*e')); // "lecoe"
// console.log(removeStars('erase*****')); // ""

// function asteroidCollision(asteroids: number[]): number[] {
//     let l = asteroids.length;
//     let stack: number[] = [];
//     stack.push(asteroids[0]);
//     for (let i = 1; i < l; i++) {
//         const lastAst = stack.at(-1);
//         const currAst = asteroids[i];
//         if (
//             (currAst < 0 && lastAst < 0) ||
//             (currAst > 0 && lastAst > 0) ||
//             (currAst > 0 && lastAst < 0)
//         ) {
//             stack.push(currAst);
//             continue;
//         }
//         if (currAst < 0 && Math.abs(lastAst) === Math.abs(currAst)) {
//             stack.pop();
//         } else if (Math.abs(lastAst) >= Math.abs(currAst)) {
//             continue;
//         } else {
//             stack.pop();
//             stack.push(currAst);
//             stack = asteroidCollision(stack);
//         }
//     }
//     return stack;
// }

// console.log(asteroidCollision([5, 10, -5])); // [5,10]
// console.log(asteroidCollision([8, -8])); // []
// console.log(asteroidCollision([10, 2, -5])); // [10]
// console.log(asteroidCollision([-2, -2, -2, -2])); // [-2,-2,-2,-2]
// console.log(asteroidCollision([-2, 1, -2, -2])); // [-2,-2,-2]
// console.log(asteroidCollision([-2, -1, 1, 2])); // [-2, -1, 1, 2]
// console.log(asteroidCollision([-2, 1, -1, -2])); // [-2,-2]

// function decodeString(s: string): string {
//     const stack: string[] = [];
//     for (let i = 0; i < s.length; i++) {
//         const c = s[i];
//         if (c !== ']') {
//             stack.push(c);
//         } else {
//             let repeatedStr = '';
//             while (stack.at(-1) !== '[') {
//                 repeatedStr = stack.pop() + repeatedStr;
//             }
//             stack.pop(); // remove "["
//             let count = '';
//             while (!isNaN(Number(stack.at(-1)))) {
//                 count = stack.pop() + count;
//             }
//             stack.push(repeatedStr.repeat(Number(count)));
//         }
//     }
//     let [repeatTimes, decodedString] = stack.pop()!;
//     return stack.join('');
// }

// console.log(decodeString('3[a]2[bc]')); // "aaabcbc"
// console.log(decodeString('3[a2[c]]')); // "accaccacc"
// console.log(decodeString('2[abc]3[cd]ef')); // "abcabccdcdcdef"
// console.log(decodeString('100[leetcode]')); // ................

// function isValid(s: string): boolean {
//     const op = ['(', '{', '['];
//     const cl = [')', '}', ']'];
//     const stack: string[] = [];
//     for (const c of s) {
//         if (op.includes(c)) {
//             stack.push(c);
//         } else {
//             if (cl.includes(c) && op.indexOf(stack.at(-1)) === cl.indexOf(c)) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

// console.log(isValid('()'));
// console.log(isValid('(]'));

// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   if (!p && !q) {
//     return true;
//   }
//   if ((p && !q) || (!p && q)) {
//     return false;
//   }
//   if (p.val !== q.val) {
//     return false;
//   }
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// }

// const firstTree = new TreeNode(1).insert([2, 3]);
// const secondTree = new TreeNode(1).insert([2, 3]);
// const firstTree = new TreeNode(1).insert([2]);
// const secondTree = new TreeNode(1).insert([null, 2]);

// console.log(isSameTree(firstTree, secondTree));

// function sortedSquares(nums: number[]): number[] {
//   let l = nums.length;
//   let L = 0;
//   let R = l - 1;
//   let i = l - 1;
//   const res: number[] = Array(l);
//   while (L <= R) {
//     const leftSqr = nums[L] ** 2;
//     const RightSqr = nums[R] ** 2;
//     if (leftSqr > RightSqr) {
//       res[i] = leftSqr;
//       L++;
//     } else {
//       res[i] = RightSqr;
//       R--;
//     }
//     i--;
//   }
//   return res;
// }

// console.log(sortedSquares([-4, -1, 0, 3, 10]));

// function minimumLength(s: string): number {
//     let l = s.length;
//     if (l == 1) {
//         return 1;
//     }
//     let L = 0;
//     let R = s.length - 1;

//     while (L < R) {
//         if (s[L] !== s[R]) {
//             return l;
//         }
//         if (l == 2) {
//             return 0;
//         }
//         while (s[L] === s[L + 1]) {
//             if (l == 2) {
//                 return 0;
//             }
//             L++;
//             l--;
//         }
//         while (s[R] === s[R - 1]) {
//             R--;
//             l--;
//         }

//         L++;
//         R--;
//         l = l - 2;
//     }

//     return l;
// }

// console.log(minimumLength('ca')); // 2
// console.log(minimumLength('cabaabac')); // 0
// console.log(minimumLength('aabccabba')); // 3
// console.log(minimumLength('abbbbbbbbbbbbbbbbbbba')); // 0

// console.log(
//     minimumLength(
//         'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbacccabbabccaccbacaaccacacccaccbbbacaabbccbbcbcbcacacccccccbcbbabccaacaabacbbaccccbabbcbccccaccacaccbcbbcbcccabaaaabbbbbbbbbbbbbbb'
//     )
// ); // 109

// function combinationSum2(candidates: number[], target: number): number[][] {
//     candidates.sort();
//     const res: number[][] = [];

//     function backtrack(arr: number[], index: number, target: number) {
//         if (target === 0) {
//             res.push(arr.slice());
//             return;
//         }
//         if (target < 0) {
//             return;
//         }
//         let prev = -1;
//         for (let i = index; i < candidates.length; i++) {
//             const c = candidates[i];
//             if (c === prev) {
//                 continue;
//             }
//             arr.push(c);
//             backtrack(arr, i + 1, target - c);
//             arr.pop();
//             prev = c;
//         }
//     }

//     backtrack([], 0, target);

//     return res;
// }

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]]

// function combinationSum3(k: number, n: number): number[][] {
//     const res: number[][] = [];
//     function backtrack(arr: number[], index: number, total: number) {
//         if (total === 0 && arr.length === k) {
//             res.push(arr.slice());
//             return;
//         }
//         if (total < 0 || arr.length > k) {
//             return;
//         }
//         for (let i = index; i <= Math.min(n - k + 1, 9); i++) {
//             if (arr.length < k) {
//                 arr.push(i);
//                 backtrack(arr, i + 1, total - i);
//                 arr.pop();
//             }
//         }
//     }
//     backtrack([], 1, n);
//     return res;
// }

// console.log(combinationSum3(3, 7)); // [[1,2,4]]
// console.log(combinationSum3(3, 9)); // [[1,2,6],[1,3,5],[2,3,4]]
// console.log(combinationSum3(2, 6)); // [[1,5],[2,4]]

// function letterCombinations(digits: string): string[] {
//     if (!digits.length) {
//         return [];
//     }
//     const res: string[] = [];
//     const keyboard = [
//         '',
//         '',
//         'abc',
//         'def',
//         'ghi',
//         'jkl',
//         'mno',
//         'pqrs',
//         'tuv',
//         'wxyz',
//     ];

//     function backTrack(str: string, index: number) {
//         if (str.length === digits.length) {
//             res.push(str);
//             return;
//         }

//         for (const c of keyboard[Number(digits[index])]) {
//             backTrack(str + c, index + 1);
//         }
//     }

//     backTrack('', 0);
//     return res;
// }

// console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations('')); // []
// console.log(letterCombinations('2')); // ["a","b","c"]

// function maxFrequencyElements(nums: number[]): number {
//     let res = 0;
//     const counter = new Map<number, number>();
//     let maxFreq = 0;
//     for (const n of nums) {
//         counter.set(n, (counter.get(n) ?? 0) + 1);
//         maxFreq = Math.max(maxFreq, counter.get(n));
//     }
//     for (const val of counter.values()) {
//         if (val === maxFreq) {
//             res += val;
//         }
//     }
//     return res;
// }

// console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); // 4
// console.log(maxFrequencyElements([1, 2, 3, 4, 5])); // 5

// import { createHash, scryptSync, randomBytes } from 'crypto';

// function hash(input: string) {
//     return createHash('sha256').update(input).digest('hex');
// }
// const salt = randomBytes(16).toString('hex');
// console.log(salt);
// const pass = hash('omg123');
// const hashedPass = scryptSync(pass, salt, 64).toString('hex');
// console.log(pass, hashedPass);

// function intersection(nums1: number[], nums2: number[]): number[] {
//     const set = new Set(nums1);
//     const res: number[] = [];
//     for (const n of nums2) {
//         if (set.has(n)) {
//             set.delete(n);
//             res.push(n);
//         }
//     }
//     return res;
// }

// console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4]

// function customSortString(order: string, s: string): string {
//     const arrS = s.split('');
//     arrS.sort((a, b) => {
//         const aI = order.indexOf(a);
//         const bI = order.indexOf(b);
//         if (aI !== -1 && bI !== -1) {
//             return aI - bI;
//         } else if (aI !== -1 && bI === -1) {
//             return -1;
//         } else if (aI === -1 && bI !== -1) {
//             return 1;
//         }
//         return 0;
//     });

//     return arrS.join('');
// }
// console.log(customSortString('cba', 'abcd')); // "cbad"
// console.log(customSortString('kqep', 'pekeq')); // "kqeep"
// console.log(customSortString('exv', 'xwvee')); // "eexvw"

// function removeZeroSumSublists(head: ListNode | null): ListNode | null {
//     console.log(head);
//     let prefixSum = 0;
//     let map = new Map<number, ListNode>();
//     for (let n = head; n.next !== null; n = n.next) {
//         prefixSum += n.val;
//         map.set(prefixSum, n);
//     }
//     prefixSum = 0;
//     for (let n = head; n.next !== null; n = n.next) {
//         prefixSum += n.val;
//         n.next = map.get(prefixSum)!.next;
//     }
//     return head;
// }
// 3 5
// [ 1, 2, -3 ]
// [1,2,-3,3,1]

// function subarraySum(nums: number[], k: number): number {
//     let prefixSumArr: number[] = [0];
//     let count = 0;
//     for (let i = 1; i <= nums.length; i++) {
//         prefixSumArr[i] = nums[i - 1] + prefixSumArr[i - 1];
//     }
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j <= nums.length; j++) {
//             if (prefixSumArr[j] - prefixSumArr[i] === k) {
//                 count++;
//             }
//         }
//     }
//     console.log(prefixSumArr);
//     return count;
// }

// console.log(subarraySum([1, 1, 1], 2)); // 2
// console.log(subarraySum([1, 2, 3], 3)); // 2

// function pivotInteger(n: number): number {
//     let leftSum = 0;
//     let rightSum = ((1 + n) * n) / 2;
//     for (let i = 1; i <= n; i++) {
//         rightSum -= i;
//         if (leftSum === rightSum) {
//             return i;
//         }
//         leftSum += i;
//     }
//     return -1;
// }

// console.log(pivotInteger(8));

// function deepComparison(first: Record<any, any>, second: Record<any, any>) {
//     if (first === second) return true;
//     if (first === null || second === null) return false;
//     if (typeof first !== 'object' || typeof second !== 'object') return false;
//     let first_keys = Object.getOwnPropertyNames(first);
//     let second_keys = Object.getOwnPropertyNames(second);
//     if (first_keys.length !== second_keys.length) return false;
//     for (let key of first_keys) {
//         if (!Object.hasOwn(second, key)) return false;
//         if (deepComparison(first[key], second[key]) === false) return false;
//     }
//     return true;
// }

// let obj3 = {
//     name: 'Rahim',
//     additionalData: {
//         instructor: true,
//         favoriteHobbies: ['Playing Cricket', 'Tennis', 'Coding'],
//         citiesLivedIn: ['Rajshahi', 'Rangpur', 'Joypurhat'],
//     },
// };

// let obj4 = {
//     name: 'Rahim',
//     additionalData: {
//         instructor: true,
//         favoriteHobbies: ['Playing Cricket', 'Tennis', 'Coding'],
//         citiesLivedIn: ['Rajshahi', 'Rangpur', 'Joypurhat'],
//     },
// };
// console.log(deepComparison(obj3, obj4)); //true

// function numSubarraysWithSum(nums: number[], goal: number): number {
//     let L = 0;
//     let prefixZeros = 0;
//     let tempSum = 0;
//     let goalCount = 0;

//     for (let R = 0; R < nums.length; R++) {
//         tempSum += nums[R];
//         while (L < R && (nums[L] === 0 || tempSum > goal)) {
//             if (nums[L] === 1) {
//                 prefixZeros = 0;
//             } else {
//                 prefixZeros++;
//             }
//             tempSum -= nums[L];
//             L++;
//         }

//         if (tempSum === goal) {
//             goalCount += 1 + prefixZeros;
//         }
//     }

//     return goalCount;
// }

// console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // 4
// console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // 15

// function findMaxLength(nums: number[]): number {
// 	let maxLength = 0;
// 	let balance = 0;
// 	const hash = new Map<number, number>();
// 	hash.set(0, -1);
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === 0) {
// 			balance--;
// 		} else {
// 			balance++;
// 		}
// 		if (hash.has(balance)) {
// 			maxLength = Math.max(maxLength, i - hash.get(balance));
// 		} else {
// 			hash.set(balance, i);
// 		}
// 	}
// 	return maxLength;
// }
// -4 5
// console.log(findMaxLength([0, 1])); // 2
// console.log(findMaxLength([0, 1, 0])); // 2
// console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])); // 6

// -1
//
//

// function leastInterval(tasks: string[], n: number): number {
// 	if (tasks.length === 1) {
// 		return 1;
// 	}
// 	const map = new Map<string, number>();
// 	for (const c of tasks) {
// 		map.set(c, (map.get(c) ?? 0) + 1);
// 	}
// 	const freq = Array.from(map.values()).sort((a, b) => b - a);
// 	// frequency of all letters in descending order
// 	let time = tasks.length;
// 	// time - total number of actions (actions are letters and idles)
// 	let idles = n;
// 	// idles - number of idles for the element with maximum frequency
// 	while (freq[0] > 0) {
// 		freq[0]--;
// 		// Our CPU has completed task with maximum frequency
// 		// so we delete this task by reducing its frequency by 1

// 		for (let j = 1; j < freq.length; j++) {
// 			if (freq[j] > 0) {
// 				freq[j]--;
// 				idles -= 1;
// 				// Do the same thing with other tasks
// 				// But also we reduce need because we are dealing with other tasks
// 			} else {
// 				break;
// 				// If frequency of letter === 0, there are no more tasks here
// 			}

// 			if (idles <= 0) {
// 				freq.sort((a, b) => {
// 					return b - a;
// 				});
// 				break;
// 				// If we have filled n intervals we can complete freq[0] again
// 				// Also we need to sort freq to not lose any tasks
// 			}
// 		}

// 		if (idles > 0 && freq[0] !== 0) {
// 			time += idles;
// 			// If we didn't fill all n intervals we have to wait idles
// 		}

// 		idles = n;
// 		// Update need for the next iteration
// 	}
// 	return time;
// }

// console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)); // 8

// function reverseList(head: ListNode | null): ListNode | null {
// 	if (!head) {
// 		return null;
// 	}
// 	const arr: number[] = [];
// 	while (head) {
// 		arr.push(head.val);
// 		head = head.next;
// 	}
// 	const list = arr.reduce<ListNode>((last, val) => {
// 		if (!last) {
// 			return new ListNode(val);
// 		}
// 		return new ListNode(val, last);
// 	}, null);

// 	return list;
// }

// function reverseList(head: ListNode | null): ListNode | null {
// 	if (!head) {
// 		return null;
// 	}
// 	let prev: null | ListNode = null;

// 	while (head) {
// 		const nextNode = head.next;
// 		head.next = prev;
// 		prev = head;
// 		head = nextNode;
// 	}

// 	return prev;
// }

// const list = arrayToLinkedList([1, 2, 3, 4, 5]);
// console.log(reverseList(list));
/*
nextNode = 2
head = 1
head.next = null
prev = 1
head = 2
------------------
nextNode = 3
head = 2
head.next = 1
prev = 2
*/

// function isPalindrome(head: ListNode | null): boolean {
// 	let slow = head;
// 	let fast = head;
// 	// get middle
// 	while (fast && fast.next) {
// 		fast = fast.next.next;
// 		slow = slow.next;
// 	}
// 	// [1, 2, 3, 4, 4, 3, 2, 1]
// 	let prev = null;
// 	// reverse part after the middle
// 	while (slow) {
// 		const nxt = slow.next;
// 		slow.next = prev;
// 		prev = slow;
// 		slow = nxt;
// 	}
// 	// compare
// 	while (prev && head) {
// 		if (prev.val != head.val) {
// 			return false;
// 		}
// 		prev = prev.next;
// 		head = head.next;
// 	}

// 	return true;
// }

// console.log(isPalindrome(arrayToLinkedList([1, 2, 3, 4, 4, 3, 2, 1])));

// function reorderList(head: ListNode | null): void {
// 	let slow = head;
// 	let fast = head;
// 	// getting middle
// 	while (fast?.next) {
// 		slow = slow.next;
// 		fast = fast.next.next;
// 	}

// 	// reversing part after the middle
// 	let prev: ListNode | null = null;
// 	while (slow) {
// 		const nxt = slow.next;
// 		slow.next = prev;
// 		prev = slow;
// 		slow = nxt;
// 	}

// 	const headPointer = head;
// 	// merging
// 	while (prev) {
// 		const nxtHead = head.next;
// 		const nxtPrev = prev.next;
// 		if (!nxtPrev) {
// 			console.log(headPointer);
// 			return;
// 		}
// 		head.next = prev;
// 		prev.next = nxtHead;
// 		prev = nxtPrev;
// 		head = nxtHead;
// 	}
// 	console.log(headPointer);
// }
// console.log(reorderList(arrayToLinkedList([1, 2, 3, 4]))); // [1,4,2,3]
// console.log(reorderList(arrayToLinkedList([1, 2, 3, 4, 5]))); // [1,5,2,4,3]
// 1, 2, 3
// 5, 4

// function findDuplicates(nums: number[]): number[] {
// 	if (nums.length < 2) {
// 		return [];
// 	}
// 	const res: number[] = [];
// 	// [1,2,3,4,5]
// 	//  0 1 2 3 4
// 	for (let n of nums) {
// 		n = Math.abs(n);
// 		const pointer = nums[n - 1];
// 		if (pointer < 0) {
// 			res.push(n);
// 		} else {
// 			nums[n - 1] *= -1;
// 		}
// 	}
// 	return res;
// }

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3];
// console.log(findDuplicates([1, 1, 2])); // [1];

// function firstMissingPositive(nums: number[]): number {
// 	const l = nums.length;
// 	const seen = Array(l + 1).fill(false);

// 	for (const n of nums) {
// 		if (n > 0 && n <= l) {
// 			seen[n] = true;
// 		}
// 	}
// 	for (let i = 1; i < l + 1; i++) {
// 		if (!seen[i]) {
// 			return i;
// 		}
// 	}
// 	return l + 1;
// }

// console.log(firstMissingPositive([1, 2, 0])); // 3
// console.log(firstMissingPositive([0, 1, 2])); // 3
// console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1

// type Fn = (accum: number, curr: number) => number;

// function reduce(nums: number[], fn: Fn, init: number): number {
//   let acc = init;
//   for (const n of nums) {
//     acc = fn(acc, n);
//   }
//   return acc
// }

// function maxSubarrayLength(nums: number[], k: number): number {
//   const map = new Map<number, number>();
//   let L = 0;
//   let maxLength = 0;
//   for (let R = 0; R < nums.length; R++) {
//     map.set(nums[R], (map.get(nums[R]) ?? 0) + 1);

//     while (map.get(nums[R]) > k) {
//       map.set(nums[L], map.get(nums[L]) - 1);
//       L++;
//     }

//     maxLength = Math.max(maxLength, R - L + 1);
//   }
//   return maxLength;
// }

// console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)); // 6
// console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)); // 6
// console.log(maxSubarrayLength([1, 4, 4, 3], 1)); // 2
// function countSubarrays(nums: number[], k: number): number {
//   const maxEl = Math.max(...nums);
//   let maxElFreq = 0;
//   let counter = 0;
//   let L = 0;
//   for (let R = 0; R < nums.length; R++) {
//     if (nums[R] === maxEl) {
//       maxElFreq++;
//     }
//     while (maxElFreq >= k) {
//       if (nums[L] === maxEl) {
//         maxElFreq--;
//       }
//       L++;
//     }
//     console.log(maxElFreq, k);
//     counter += L;
//   }

//   return counter;
// }
// N * (N + 1) / 2
// console.log(countSubarrays([1, 3, 2, 3, 3], 2)); // 6
// console.log(countSubarrays([1, 4, 2, 1], 3)); // 0
// console.log(
//   countSubarrays(
//     [
//       61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58,
//       42, 82, 10, 82, 78, 15, 82,
//     ],
//     2
//   )
// ); //224

// function slidingWindowAtMost(nums: number[], k: number): number {
// 	const freqMap = new Map<number, number>();
// 	let L = 0;
// 	let count = 0;
// 	for (let R = 0; R < nums.length; R++) {
// 		freqMap.set(nums[R], (freqMap.get(nums[R]) ?? 0) + 1);
// 		// If the number of distinct elements in the window exceeds k,
// 		// we shrink the window from the left until we have at most k distinct elements.
// 		while (freqMap.size > k) {
// 			freqMap.set(nums[L], freqMap.get(nums[L]) - 1);
// 			if (freqMap.get(nums[L]) === 0) {
// 				freqMap.delete(nums[L]);
// 			}
// 			L++;
// 		}
// 		count += R - L + 1;
// 	}

// 	return count;
// }

// function subarraysWithKDistinct(nums: number[], k: number): number {
// 	return slidingWindowAtMost(nums, k) - slidingWindowAtMost(nums, k - 1);
// }

// console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); // 7
// console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); // 3

const value: unknown = 'Foo';
const len: number = (<string>value).length;
const len2: number = (value as string).length;
