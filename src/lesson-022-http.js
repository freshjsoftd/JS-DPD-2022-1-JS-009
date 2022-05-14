'use strict';
const img = document.getElementById('icon');
// console.log(img);

fetch('../public/assets/imgs/GOT.jpg')
    .then(response => {
      if(!response.ok) throw new Error(`Error status is ${response.statusText}`);
      return response.blob();
    })
    .then(response => {
      img.src = URL.createObjectURL(response);
    })
    .catch(err => {
      console.log(err);
    })
    // const ukrLid = 'Zelensky';
    // const input = document.queryCommandIndeterm()
    // const liderName = input.value;
    // let url = '';

    // switch(liderName.toLocaleLowerCase()){
    //   case ukrLid.toLowerCase(): {
    //         url = '';
    //         break;
    //   }
    //   default: url = ''
    // }