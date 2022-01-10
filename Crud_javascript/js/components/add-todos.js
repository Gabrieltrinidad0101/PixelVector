export default class Addtodo{
    constructor(){
        this.btn = document.getElementById("add")
        this.title = document.getElementById("title")
        this.description = document.getElementById("description")
        this.alert = document.getElementById("alert")
    }
    onClick(callback){
        this.btn.onclick = ()=>{
            if(!this.title.value || !this.description.value){
                this.alert.classList.remove("d-none")
                this.alert.innerText = "Title and description are required"
                return
            }
            console.log(this.description.value);
            callback(this.title.value,this.description.value)
        }
    }
}