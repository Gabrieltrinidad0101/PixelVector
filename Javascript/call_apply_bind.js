const persona1 = {
    Number: 1,
    number(n) {
        console.log(this.Number + n)
    }
}
const persona2 = {
    Number: 2
}

persona1.number.call(persona2,2);
persona1.number.apply(persona2,[2]);
const funName = persona1.number.bind(persona2,2)
funName()