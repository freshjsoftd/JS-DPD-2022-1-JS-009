function fibs(n){
  for(let i = 0; i <= n; i++){
    if(n === 1 || n === 2){
      return 1;
    }else {
      return fibs(n - 1) + fibs(n - 2);
    }
  }
}
console.log(fibs(6));