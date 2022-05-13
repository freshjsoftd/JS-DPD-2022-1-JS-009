'use strict';

const body = document.body;
const form = document.querySelector('form');
const inputLiderName = document.querySelector('.lider-name');
const flag = document.querySelector('.flag>img');
const ukrLider = 'Zelensky';
const usaLider = 'Biden';
const gerLider = 'Scholz';
const italLider = 'Draghi';
const canLider = 'Trudeau';
const frLider = 'Macron';
const ukLider = 'Johnson';
const japLider = 'Kisida';

let liderName = '';
let url = '';

inputLiderName.addEventListener('input', async () => {
	liderName = inputLiderName.value;
	switch (liderName.toLowerCase()) {
		case ukrLider.toLowerCase(): {
			url = '../public/assets/imgs/flags/flag-ukraine.webp';
			break;
		}
		case usaLider.toLowerCase(): {
			url = '../public/assets/imgs/flags/american-flag.webp';
			break;
		}
		case gerLider.toLowerCase(): {
			url = '../public/assets/imgs/flags/germany-flag.webp';
			break;
		}
		case italLider.toLowerCase(): {
			url = '../public/assets/imgs/flags/flag-italy.png';
			break;
		}
		case canLider.toLowerCase(): {
			url = '../public/assets/imgs/flags/Flag-Canada.svg.webp';
			break;
		}
		case frLider.toLowerCase(): {
			url = '../public/assets/imgs/flags/france-flag.webp';
			break;
		}
		case japLider.toLowerCase(): {
			url = '../public/assets/imgs/flags/flag-japan.png';
			break;
		}
		case ukLider.toLowerCase(): {
			url = '../public/assets/imgs/flags/uk-flag.png';
			break;
		}
    default: {
      url = '../public/assets/imgs/flags/european-union.webp';
    }
	}
  // console.log(url);
  try {
    const flagRequest = new Request(url);
    const response = await fetch(flagRequest);
    const result = await response.blob();
    flag.src = URL.createObjectURL(result)
    
  } catch (error) {
    console.log(error);
  }
  
});
inputLiderName.addEventListener('keydown', (e) => {
	if(e.target.key === Enter){
		inputLiderName.value = '';
		}
});
inputLiderName.addEventListener('focusin', () => inputLiderName.value = '');
inputLiderName.focus();
