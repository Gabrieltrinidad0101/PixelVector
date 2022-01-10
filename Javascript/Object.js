
/* function Name(a,b,c){
    this.a = a
    this.b = b
    this.c = c
    return 4
}
const name1 = new Name(1,2,3)
name1.e =5 
name1.__proto__.d = function(){
    this.number = 5
}
name1.d()
console.log(name1.valueOf());

const name2 = new name1.constructor(1,2,3)
console.log(name2.valueOf())
console.log(name2.constructor()) */

/* const a = {}
a.__proto__.hellWorld = function(){
    console.log('hola mundo')
}
console.log(Object.getPrototypeOf(a))
a.hellWorld() */


/* //Object.values()
const obj ={
    a: 'sometring',
    b: 42,
    c: false
}
console.log(Object.values(obj)); */

/* const person = {
    name: 'fred',
    fc(){
        return 5
    },
    Lastname: 'true'
}
console.log(person.valueOf());
console.log(person);

function MyNumberType(n) {
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  
  const object1 = new MyNumberType(4);
  
  console.log(object1 + 3); */

/* //Object.prototype.valueOf()
function MyNumberType(n) {
    this.number = n;

  }
  
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  
  const object1 = new MyNumberType(4);
  
  console.log(object1 + 3);
 */
/* //Object.toString
const ARRAY = [1,2,3,4,5]
console.log(Object.toString(ARRAY)); */


/* //Object.prototype.toLocaleString()
var a = new Date();
console.log(a)
console.log(a.toLocaleString('en-US')); */



/* const a = {
    dataA:{
        a: 5
    }
}


const b = {
    dataB:{
        b:5
    }
}


Object.setPrototypeOf(b,a)
console.log(b.dataA)
console.log(b.dataB) */



/* //Object.seal()
var obj = {
    prop: function() {},
    foo: 'bar'
};  

var o = Object.seal(obj);
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;
console.log(obj); */    


/* //Object.prototype.propertyIsEnumerable()
const a = {
    data:{
        value: 5,
    }
}
console.log(a.propertyIsEnumerable('data')) */


/* //Object.preventExtensions()
const obj = {}
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); */




/* //Object.keys
const keys ={
    value: 1,
    valueTwo: 2,
    valueThree: 3,
}

console.log(Object.keys(keys));
 */




/* //Object.isSealed()
const object1 = {
    property1: 42
};  
console.log(Object.isSealed(object1));
// expected output: false
Object.seal(object1);
console.log(Object.isSealed(object1)); */



/* //Object.isPrototypeOf()
const Animal = {
    isAnimal: true
}
  
const Mammal = Object.create(Animal)
Mammal.isMammal = true
  
Animal.isPrototypeOf(Mammal) //true
  
const dog = Object.create(Animal)
Object.setPrototypeOf(dog, Mammal)
  
Animal.isPrototypeOf(dog) //true
Mammal.isPrototypeOf(dog) //true */



/* //Object.isFrozen()

var a = {x:5}
Object.freeze(a)
a = Object.assign({},a)
a.x =7
console.log(a)
obj1 = {
    internal: {}
};
  
Object.freeze(obj1);
obj1.internal.a = 'aValue';
console.log(obj1.internal.a)

const obj = {}
Object.freeze(obj);
console.log(Object.isFrozen(obj));
console.log(obj) */




/* //Object.isExtensible()
var empty = {};
console.log(Object.isExtensible(empty))
empty = Object.freeze(empty)
console.log(Object.isExtensible(empty))
 */



/* //Object.is()

if(-0 === 0){
    console.log('hola mundo')
}
console.log(Object.is(-0,0)) */





//Object.prototype.hasOwnProperty()
/* o = {
    name: "juan"
}

console.log(o.hasOwnProperty("name"));
delete o.name
console.log(o.hasOwnProperty("name")); */




/* //Object.getPrototypeOf()
const proto = {};
const obj = Object.create(proto)
console.log(Object.getPrototypeOf(obj) === proto)
console.log(Object.getPrototypeOf(obj)) */



/* //getOwnPropertySymbols
var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);     // Symbol(a) */

/* //Object.getOwnPropertyNames()
const obj = {
    fc:{
        function(){
            return this.hola
        },
        enumerable: false
    } 
}

var data = Object.create({},obj);

console.log(Object.getOwnPropertyNames(data).sort())
console.log(Object.keys(data)); */

/* //Object.getOwnPropertyDescriptors()
//return all the property 
const objOne = {
    data:{
        info: 5,
        enumerable: false
    },
    otherData:{
        data: 5,
        writable: true
    }
}
const info = Object.getOwnPropertyDescriptors(objOne)
console.log(info);  */


/* //Object.getOwnPropertyDescriptor()
const objOne = {
    data:{
        info: 5,
        enumerable: false
    }
}
const info = Object.getOwnPropertyDescriptor(objOne,"data")
console.log(info); */


/* //configurable
// if false, the property cannot be removed nor any attribute can be changed, except its value.
const Configurable = {
    info:{
        value: 5
    }
}
const newObjectConfigurable = Object.defineProperties(Configurable,{
    "info":{
        value: 6,
        writable: true,
        enumerable: true,
        configurable: false
    }
})
delete newObjectConfigurable.info
console.log(Configurable); */

/* //enumerable
// if it is iterated using the for…in loop or Object.keys() method

const data = {
}

const obj ={
    info: {
        value: "hjhjkkjj",
        enumerable: true,

    }
}

const newObj = Object.create(data,obj)
console.log(newObj.info);
for (const key in newObj) {
    console.log(key);
} */




//writable
/* const o = {}
const newObj = Object.create(o,{
    data: {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    }
})
newObj.data = 2
newObj.newdata = 3
d = Object.getOwnPropertyDescriptor(newObj, 'newdata');
console.log(d); */


/* // it is the Object
var obj = {a: 1,b: 2}
console.log("Object: ",obj)

// change object to matrix
const matrix = Object.entries(obj)
console.log('matrix: ',matrix); 

//chanage matrix to map
const map = new Map(matrix);
console.log("map: ",map);

//change map to object
var obj = Object.fromEntries(map)
console.log("Obj: ",obj);
 */

/* const a = {
    enumerable:true,
    value:"Property 1",
}

const f = {

}

//solo puedes usarlo si a esta en dentro objecto
const d = Object.create(f,{a})
d.value = 'ddldl'
console.log(d) */


/* const obj = {
    prop: 42
}

const newObject = Object.assign(obj,{
    hola:{
        value: 'hello world'
    }
})
Object.freeze(newObject);
obj.prop = 33
newObject.prop = 33
console.log(newObject);
console.log(obj); */

/* var obj = {value: 4,data: 'hellow'}
const map = new Map(Object.entries(obj))
console.log(map.set('h',5))
 */


/* var a = {value: 4,data: 'hellow'}
for (let [key,value] of Object.entries(a)) {
    console.log(`${key} ${value}`);
} */

/* const a = {value: 4,data: "hello world"}    
console.log(Object.entries(a)); */

/* const b ={
    value: 'f'
}
const a = Object.defineProperty(b,'value',{
        value: 'hola mundo',
        enumerable: true
})
console.log(b) */

/* const a = {}
const c = {
  s: 1
}
const b = Object.create({ })
var copy = Object.assign(a, b);
console.log(copy.s);
 */

/* const source = {b: 3,c:5}
const target = {a:1,b:2}
const res = Object.assign(source,target)
console.log(res) */

/* const a ={
    a: '1',
    b: '2',
    c: '3',
    d: '4'
}
const b = Object.keys(a);
const c = Object.values(a);
const i = Object.entries(a)[3][0];
console.log('keys ',b)
console.log('keys ',c)
console.log('keys ',i)

color1 = new String('verde')
console.log(color1 instanceof String) */


/* function Tree(name){
    this.name = name
}
const thetree = new Tree('name');
console.log(thetree.constructor) */