const sond = document.querySelectorAll(".sond")
const audio = document.getElementById("audio")


const fra = new DocumentFragment()

const id = ['C','Db','D','E','Eb','F','GB','G','Ab','A','Bb', 'B']

for (let index = 0; index < 12; index++) {
    const audios = document.createElement("audio")
    audios.id =  id[index]
    audio.appendChild(audios)   
}
audio.appendChild(audio)



sond.forEach(click =>{
    click.addEventListener("click",async (e)=>{
        e.preventDefault
        let sonido = new Audio(`./notes/${click.textContent}`);
        sonido.play();
    });
})



document.addEventListener("keydown",(e)=>{
    console.log(e.keyCode)
})
