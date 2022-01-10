function Employee(){
    this.name = ',masd,mas,.'
}

function WorkerBee(){
    this.project = ['1','2']
}

WorkerBee.prototype = new Employee()
const a = new WorkerBee()
console.log(a.name)