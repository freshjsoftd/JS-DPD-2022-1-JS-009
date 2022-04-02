'use strict';

const obj = {
  fName: 'test'
}

function logThis(){
  const logThis1 = () => console.log(this);
  // console.log(this);
  return logThis1;
}
logThis.call(obj);

const logThis1 = () => console.log(this);
logThis1();
const arrow = logThis.call(obj);
arrow();


