'use strict';

// O(n)
const numbs = [123, 256, 4587, 12364, 122, 698, 8, 457, 1245, 9856, 2665474, 25, 3,];
const findMax = (arr) => {
  let max =arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(findMax(numbs));
// O(n)
const findEl = (arr, val) => {
  for(let i = 0; i < arr.length; i++){
    if(val === arr[i]) {
      return i;
    }
  }
  return -1;
}
// console.log(findEl(numbs, 3));
// O(log n)
const guessNumber = () => {
  let start = 0;
  let end = 100;
  let middle = Math.round((start + end) / 2);

  while(true) {
    if(confirm(`${middle} ?`)){
      return middle;
    }
    if(confirm(`${middle} > number ?`)){
      end = middle;
      middle = Math.ceil((start + end) / 2);
    }else{
      start = middle;
      middle = Math.floor((end + start) / 2);
    }
  }
}
// console.log(guessNumber());
// O(n**2)
const createMultiplTable = (limit) => {
	const table = [];
	for (let i = 1; i < limit; i++) {
		for (let j = 1; j < limit; j++) {
			table.push(`${i} * ${j} = ${i * j}`);
		}
	}
	return table;
};
// console.table(createMultiplTable(7));