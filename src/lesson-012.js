'use strict';
function findSolution(target){
  function find(current, history){
    if(current === target){
      return history;
    }else if(current > target){
      return null;
    }else{
      return find(current + 5, `(${history} + 5)`) || 
             find(current * 3, `${history} * 3`) || 
             find(current * 2, `${history} * 2`)
    }
  }
  return find(1, '1')
}

console.log(findSolution(12));