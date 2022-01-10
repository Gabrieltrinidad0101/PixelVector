
/*
//preventExtensions
const monster1 = {
  canEvolve: true
};

const handler1 = {
  preventExtensions(target) {
    target.canEvolve = false;
    Object.preventExtensions(target);
    return true;
  }
};

const proxy1 = new Proxy(monster1, handler1);

console.log(monster1.canEvolve);
// expected output: true

console.log(proxy1);

console.log(monster1.canEvolve);
// expected output: false
 */
/* 
//setPrototypeOf
const a = {
  value: 5
}

const b = {
  Value: 10
}

const c = new Proxy(a,{
  setPrototypeOf(a,b){
    b.Value = 15
    return b
  }
})

console.log(Reflect.setPrototypeOf(c, b));
console.log(a.Value);
 */


///

///            you can not return the string and numer             \\\\\
    
///

/* 
//getPrototypeOf
const obj = {};
const proto = {};
const handler = {
    getPrototypeOf(target) {
        console.log(target === obj);   // true
        console.log(this === handler); // true
        return proto;
    }
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) ===obj) 
*/







