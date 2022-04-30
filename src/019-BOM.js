'use strict';
console.log(navigator);
console.log(history);
console.log(location);
// location.href = "https://wikipedia.org";


function openWiki() {
  const popup = open("https://wikipedia.org", '_blank', 'popup=1');
  const timerId = setTimeout(() => popup.close(), 3000);
  clearTimeout(timerId);
}
// loginBtn.addEventListener('click', openWiki);

