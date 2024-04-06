abstract class Vehicle {
	abstract drive(): void;

	startEngine(): void {
		console.log('Engine starting...');
	}
}

class Car extends Vehicle {
	drive(): void {
		console.log('Driving in a car');
	}
}

class Bike extends Vehicle {
	drive(): void {
		console.log('Driving on a bike');
	}
}

const person = { name: 'John Doe' };

const name: string = person.name as string;
const name2: string = <string>person.name;
