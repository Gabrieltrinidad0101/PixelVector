import React,{useState} from 'react'
import './css/button.css'
import axios from 'axios'

export default function Button() {
    
    const [form,setform] = useState(false)
    const [title,settitle] = useState()
    const [description,setdescription] = useState('')

    const createNote = async()=>{
        axios.post("http://localhost:4000/")
    }

    const input =(e)=>{
        const showForm = document.querySelector(".form")
        showForm.classList.add('show')
        settitle((title)=>{
            return title = e.target.value
        })
    }

    const text =(e)=>{
        setdescription((text)=>{
            return text = e.target.value
        })
        console.log(form)
    }
    function show(){
        setform((form)=>{
            return form = true
        })
    }

    function RenderNote(){
        console.log(form)
        if(form){
            return(
                <div className="allNote">
                    <form className={`form`} onSubmit={createNote}>
                        <input type="text" className="input" value={title} onChange={input}/>
                        <textarea name="" id="" cols="20" rows="10" className="textarea" value={description} onChange={text}></textarea>
                        <div className="center">
                            <button className="button">Create Note</button>
                        </div>
                    </form>
                </div>
            )
        }
        return ''
    }

    return (
        <div>
            <div className="conte_button">
                <input className='conte_button_createNote' type="button" value="+" onClick={show}/>
            </div>
                <div className='Notes'>
                    <div>{<RenderNote/>}</div>
                </div>
        </div>
    )
}
