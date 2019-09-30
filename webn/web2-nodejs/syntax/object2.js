//array, object

const f = function f1() {
  console.log(1 + 1);
  console.log(1 + 2);
};

//console.log(f);
//f();

//const i = if (true) {console.log(1)};
//const w = while(true){console.log(1)};

const a = [f];
a[0]();

const o = {
  func: f
};

o.func();
