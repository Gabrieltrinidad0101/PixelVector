document.addEventListener('DOMContentLoaded',()=>{
    const title = document.getElementById("title")
    const description = document.getElementById("description")
    const table = document.getElementById("table")
    const btn = document.getElementById("add")
    const alert = document.getElementById("alert")
    let id = 1
    
    function removeTodo(id){
        document.getElementById(id).remove()
    }
    
    function addtodo(){
        if(!title.value || !description.value){
            alert.classList.remove("d-none")
            alert.innerText = "Title and description are required"
            return
        }
        alert.classList.add("d-none")
        const row = table.insertRow()
        row.setAttribute('id',id++)
        row.innerHTML = `
        <td>${title.value}</td>
        <td>${description.value}</td>
        <td class="text-center">
          <input type="checkbox">
        </td>
        <td class="text-right">
          <button class="btn btn-primary">
            <i class="fa fa-pencil"></i>
          </button>
        </td>
        `

        const removeBtn = document.createElement("button")
        removeBtn.className = "btn btn-danger"
        removeBtn.innerHTML = `<i class="fa fa-trash"></i>`
        removeBtn.onclick = e =>{
            removeTodo(row.getAttribute('id'))
        }
        row.children[3].appendChild(removeBtn)
    }
    btn.onclick = addtodo
})