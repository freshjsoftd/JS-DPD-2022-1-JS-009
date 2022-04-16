class MyArrayIterator{
  constructor(myArray){
    this.array = myArray;
    this.count = 0;
  }

  next(){
    return {
      value: this.array[this.count++],
      done: this.count > this.array.length,
    }
  }
}
class MyArray {

	static isMyArray = function (obj) {
		return obj instanceof this;
	}

	constructor(...args) {
		this.length = 0;
		for (let i = 0; i < args.length; i++) {
			this.push(args[i]);
		}
	}

	push(...args) {
		if (args) {
			for (let i = 0; i < args.length; i++) {
				this[this.length++] = args[i];
			}
		}
		return this.length;
	}

	pop() {
		if (this.length === 0) {
			return;
		}
		const lastItem = this[this.length - 1];
		delete this[--this.length];
		return lastItem;
	}

	forEach(fn) {
		for (let i = 0; i < this.length; i++) {
			fn(this[i], i, this);
		}
	}
	some(fn) {
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i, this)) {
				return true;
			}
			return false;
		}
	}

	every(fn) {
		for (let i = 0; i < this.length; i++) {
			if (!fn(this[i], i, this)) {
				return false;
			}
			return true;
		}
	}

	map(fn) {
		const result = [];
		for (let i = 0; i < this.length; i++) {
			result.push(fn(this[i], i, this));
		}
		return result;
	}

	filter(fn) {
		const newArray = [];
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i, this)) {
				newArray.push(this[i]);
			}
		}
		return newArray;
	}
  [Symbol.iterator](){
    return new MyArrayIterator(this);
  }

}

const myArr = new MyArray(1, 2, 5, 9);

console.log(myArr);

console.log(myArr.map((elem) => elem**2));
console.log(myArr.filter((elem) => elem % 2 !== 0));

const obj = {}
console.log(MyArray.isMyArray(obj));
