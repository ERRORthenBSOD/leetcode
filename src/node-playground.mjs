import { readFile } from 'node:fs';
// class Counter extends Readable {
// 	constructor(opt) {
// 		super(opt);

// 		this._max = 1000;
// 		this._index = 0;
// 	}

// 	_read() {
// 		this._index += 1;

// 		if (this._index > this._max) {
// 			this.push(null);
// 		} else {
// 			const buf = Buffer.from(`${this._index}`, 'utf8');

// 			console.log(
// 				`Added: ${this._index}. Could be added? `,
// 				this.push(buf),
// 			);
// 		}
// 	}
// }

// const counter = new Counter({ highWaterMark: 2 });

// counter.on('data', (chunk) => {
// 	console.log(`Received: ${chunk.toString()}`);
// });

function someAsyncOperation(callback) {
	// Assume this takes 95ms to complete
	readFile('./package.json', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
	const delay = Date.now() - timeoutScheduled;

	console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
	const startCallback = Date.now();

	// do something that will take 10ms...
	while (Date.now() - startCallback < 10) {
		// do nothing
	}
});
