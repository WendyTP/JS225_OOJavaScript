function countdown(num) {
  (function recusivable(n) {
    console.log(n);

    if (n === 0) {
      console.log('Done!');
    } else {
      recusivable(n - 1);
    }
  })(num);
}


countdown(7);