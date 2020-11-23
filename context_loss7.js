let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    let incrementB = increment.bind(this);
    for (let i = 1; i<= 3; i += 1) {
      incrementB();
    }
  },
};

foo.incrementA();
console.log(foo.a);  // 3