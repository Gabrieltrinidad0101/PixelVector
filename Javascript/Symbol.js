var sym = Symbol('nombre');
const obj = {
    [sym]: 'name'
}
console.log(Object.getOwnPropertyDescriptor(obj));
console.log(obj);
/* var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");
console.log(sym2 === sym3); //false */