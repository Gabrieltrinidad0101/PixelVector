/* g = 17
delete g
console.log(g)
 */
/* var o = { a: 0 };



Object.defineProperties(o,{
    'b': {get: ()=>5},
})

console.log(o.b); */

/* var a = {
    f: 5
}
console.log(a)
delete a.f
console.log(a) */


/* var calculadora = {
    a: '',
    b: '',
    get f() {
       return this.a + this.b;
    },
    set suma(a){
        this.a = a
    },
    set sumaDos(b){
        this.b = b
    },
}
const suma = Object.create(calculadora)
suma.suma = 40
suma.sumaDos = 65
console.log(suma.f) */







/* var animal ={
    type: '',
    fc: function (){
        console.log(this.type)
    }
}

var tipo = Object.create(animal)
tipo.type = 'jjj'
tipo.fc()

function ani(a){
    this.type = a
    this.fc = function (){
        console.log(this.type)
    }
}

const T = new ani('hhh')
T.fc()
 */



/* function car(a,b,c){
    this.a = a
    this.b = b
    this.c = c
}

function b(){
    console.log(car.b)
}

const a = new car(1,2,3)
console.log(a.b) */

/* function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }
const a = {
    a: 123,
    b: 456
}
console.log(showProps(a,a))  */

/* var myCar = new Object();
myCar.make = 'ford'
myCar.make = 'no se'
console.log(myCar['make']) */


/* var myCar = new Object();
myCar.make = 'ford'
console.log(myCar['make']) */