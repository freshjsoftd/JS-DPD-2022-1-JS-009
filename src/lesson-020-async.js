'use strict';
class UserError extends Error {
  constructor(value, ...params){
    super(...params);
    this.name = 'UserError';
    this.argument = value;
  }
}

class User{
  constructor(userName, userAge){
    const age = parseInt(userAge);
    if(isNaN(age)) throw new UserError(userAge, 'userAge must be a number');
    if(age < 0 || age > 120) throw new UserError(userAge, `Age must be between 0 and 120`);
    this.userName = userName;
    this.userAge = age;
  }
  printProps(){
    console.log(`Name is ${this.userName}, age is ${this.userAge}`);
  }
}

try {
  const jhon = new User('Jhon', -20);
  jhon.printProps();
} catch (error) {
  if(error instanceof UserError) {
    console.log(`Error type User. Incorrect value: ${error.argument}`);
  };
  // console.log(error.name);
  // console.log(error.message);
}
