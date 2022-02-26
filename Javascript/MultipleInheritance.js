class Person {
    constructor (first, last) {
      this.first = first
      this.last = last
    }
  
    fullName () {
      return this.first + ' ' + this.last
    }
  }
  
  class Employee {
    constructor (id, position) {
      this.id = id
      this.position = position
    }
  
    details () {
      return this.id + ' ' + this.position
    }
  }
  
  function EmployedPerson (first, last, employeeId, position) {
    Object.assign(
      this,
      new Person(first, last),
      new Employee(employeeId, position)
    )
  }
  
  EmployedPerson.prototype = {
    fullName: Person.prototype.fullName,
    details: Employee.prototype.details
  }
  
  const ep = new EmployedPerson('Jane', 'Doe', 1234, 'Developer')
  console.log(ep.fullName()) // => Jane Doe
  console.log(ep.details())