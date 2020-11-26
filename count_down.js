/* first attempt
let countdown = function() {
  return function(num) {
    for (let i = num; i >= 0; i -= 1) {
      console.log(i);
    }
    console.log('Done!');
  }
}();

countdown(7);
*/

function countdown(count) {
  (function(num) {
    for (let i = num; i >= 0; i -= 1) {
      console.log(i);
    }
    console.log('Done!');
  })(count);
}