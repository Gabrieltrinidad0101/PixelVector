export default class Model{
    constructor(){
        this.view = null
        this.todos = JSON.parse(localStorage.getItem("todos"))
        if(!this.todos || this.todos.length === 0){
            this.todos = []
            this.current = 1
        }else{
            this.current = this.todos[this.todos.length - 1].id + 1
        }
    }

    setView(view){
        this.view = view
    }


    save(){
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    getTodos(){
        return this.todos.map((todos)=>({...todos}))
    }

    findTodo(id){
        return this.todos.findIndex((todo)=> todo.id === id)
    }

    toggleCompleted(id){
        const index = this.findTodo(id)
        const todo = this.todos[index]
        todo.completed = !todo.completed
        this.save()
    }

    editTodo(id,values){
        const index =  this.findTodo(id)
        this.todos[index] = {id,...values}
        this.save()
    }

    addTodo(title,description){
        const todo = {
            id: this.current++,
            title,
            description,
            completed: false
        }
        console.log(this.todos);
        this.todos.push(todo)
        this.save()
        return {...todo}
    }

    removeTodo(id){
        let number = 1
        const index = this.findTodo(id)
        this.todos.splice(index,number)  
        console.log(this.todos);  
        this.save()
    }
}