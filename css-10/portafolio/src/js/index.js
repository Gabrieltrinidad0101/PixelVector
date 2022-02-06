import '../css/globalStyle.css'
import '../css/crud.css'
import '../css/loader.css'
import '../css/footer.css'
import '../css/project.css'
import '../css/menu.css'

//import image
import '../img/node.png'
import '../img/JavaScript.png'
import '../img/mongodb.png'
import '../img/react.png'
import '../img/express.png'
import '../img/webpack.png'
import '../img/Babel.png'
import '../img/Git.png'
import '../img/myImage.png'
import '../img/pathfinding.png'

const loader = document.querySelector(".loader");
const menu = document.querySelector(".menuIcon")
const containerLinks = document.querySelector(".containerLinks")
const links = document.querySelectorAll(".linkMenu")

/* loader */
window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        loader.style = "animation: hiddenLoader 1s forwards;"
    },1000)
});


menu.addEventListener("click",_=>{
    containerLinks.classList.toggle("activeMenu")
})


links.forEach(link=>{
    link.href = `${window.location.href}#${link.textContent}`
})