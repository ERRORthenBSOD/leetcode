import { readFile } from 'fs';

abstract class Vehicle {
	abstract drive(): void;

	startEngine(): void {
		console.log('Engine starting...');
	}
}

// class Car extends Vehicle {
// 	drive(): void {
// 		console.log('Driving in a car');
// 	}
// }

// class Bike extends Vehicle {
// 	drive(): void {
// 		console.log('Driving on a bike');
// 	}
// }

// const person = { name: 'John Doe' };

// const name: string = person.name as string;
// const name2: string = <string>person.name;

// Promise.resolve('PROMISE').then(console.log);
// process.nextTick(() => {
// 	console.log('NEXT TICK');
// });

// setTimeout(() => console.log('SET TIMEOUT'), 0);
// setImmediate(() => console.log('SET IMMEDIATE'));
// // process.nextTick(() => {
// // 	setImmediate(() => console.log('SET IMMEDIATE FROM NEXT TICK'));
// // 	setTimeout(() => console.log('SET TIMEOUT FROM NEXT TICK'), 0);
// // });

// readFile('./package.json', () => {
// 	setTimeout(() => console.log('SET TIMEOUT FROM NEXT CALLBACK'), 0);
// 	setImmediate(() => console.log('SET IMMEDIATE FROM CALLBACK'));
// });

// function abc(nums: number[]): number {
// 	const oddsArr: number = [];
// 	const evenArr: number = [];
// 	for (const n of nums) {
// 		if (n % 2 === 0) {
// 			evenArr.push(n);
// 		} else {
// 			oddsArr.push(n);
// 		}
// 	}

// }

// abc([1, 2, 3, 5, 9]); // 2

// [1,2,3,5,9]
// [2,8,10,12,19] 19
