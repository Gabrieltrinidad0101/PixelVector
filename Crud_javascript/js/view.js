import AddTodo from './components/add-todos.js'
import modal from './components/modal.js'
export default class View{
    constructor(){
        this.model = null
        this.table = document.getElementById("table")
        this.addTodoForm = new AddTodo()
        this.addTodoForm.onClick((title,description)=>this.addTodo(title,description))
        this.modal = new modal()
        this.modal.onClick((id,values)=>this.editTodo(id,values))
    }
    setModel(model){
        this.model = model
    }
    addTodo(title,description){
        const todo = this.model.addTodo(title, description)
        this.createRow(todo)
    }

    editTodo(id,values){
        this.model.editTodo(id,values)
        const row = document.getElementById(id)
        row.children[0].innerText= values.title            
        row.children[1].innerText= values.description  
        row.children[2].children[0].checked = values.completed          
    }

    remove(id){
        this.model.removeTodo(id)
        document.getElementById(id).remove()
    }

    render(){
        const todos = this.model.getTodos()
        todos.forEach((todo)=> this.createRow(todo))
    }

    toggleCompleted(id){
        this.model.toggleCompleted(id)
    }

    createRow(todo){
        const row = table.insertRow()
        row.setAttribute('id',todo.id)
        row.innerHTML = `
        <td>${todo.title}</td> 
        <td>${todo.description}</td>
        <td class="text-center">
        </td>
        <td class="text-right">
        </td>
        `
        const checkbox = document.createElement("input")
        checkbox.type = 'checkbox'
        checkbox.checked = todo.completed
        checkbox.onclick = ()=> this.toggleCompleted(todo.id)
        row.children[2].appendChild(checkbox)

        const editBtn = document.createElement("button")
        editBtn.className = "btn btn-primary mb-1"
        editBtn.innerHTML = `<i class="fa fa-pencil"></i>`
        editBtn.setAttribute("data-toggle", 'modal')
        editBtn.setAttribute("data-target", '#modal')
        editBtn.onclick = ()=> this.modal.setValues({
            id: todo.id,
            title: row.children[0].innerText,
            description:  row.children[1].innerText,
            completed: row.children[2].children[0].checked
        });
        row.children[3].appendChild(editBtn)

        const removeBtn = document.createElement("button")
        removeBtn.className = "btn btn-danger"
        removeBtn.innerHTML = `<i class="fa fa-trash"></i>`
        removeBtn.onclick = e =>{
            this.remove(todo.id)
        }
        row.children[3].appendChild(removeBtn)
    }
}