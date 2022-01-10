var a = [1,2,3,4,5]
var t = a[Symbol.iterator]()
console.log(t.next())
console.log(t.next())
console.log(t.next())
console.log(t.next())
console.log(t.next())
console.log(t.next())





/* function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){
      var actual = fn2;
      fn2 = fn1;
      console.log(fn2)  
      console.log(fn1)  
      console.log(actual)
      fn1 = fn1 + actual;
      yield actual;
    }
  }
var secuencia = fibonacci()
secuencia.next().value */   
/* console.log(secuencia.next().value);   
console.log(secuencia.next().value);  */  


/* var miIterable = {}
miIterable[Symbol.iterator] = function* (){
    yield 1
    yield 2
    yield 3
}

for(i of miIterable){
    console.log(i)
}

const a = [...miIterable]
console.log(a) */

/* function* main(){
    var indice = 0
    while(true){
        yield indice++
    }
}
var main = main()
console.log(main.next().value)
console.log(main.next().value)
console.log(main.next().value)
console.log(main.next().value) */


/* function main(){
    let siguienteIndice = 0
    return{
        next: function(){
                return siguienteIndice++ * 2
            }
        }
    }

const i = main()
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next()) */





/* function crearIterador(arreglo){
    var siguienteIndice = 0;

    return {
       next: function(){
           return siguienteIndice < arreglo.length ?
               {value: arreglo[siguienteIndice++], done: false} :
               {done: true};
       }
    }
}


var it = crearIterador(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true */




