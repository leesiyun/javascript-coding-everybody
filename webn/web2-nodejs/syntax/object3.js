/*
let v1 = 'v1';
//10000 code
v1 = 'egoing';
const v2 = 'v2';
*/

const o = {
  v1: 'v1',
  v2: 'v2',
  f1: function() {
    console.log(this.v1);
  },
  f2: function() {
    console.log(this.v2);
  }
};

/*
let f1 = () => console.log(o.v1);

f1 = () => ;

const f2 = () => console.log(o.v2);

f1(); //v1
f2(); //v2
*/

o.f1(); //v1
o.f2(); //v2
