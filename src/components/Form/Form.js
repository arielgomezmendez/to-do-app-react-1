import React from 'react'
import Button from '../Button/Button'
import { useState } from 'react'


const Form = () => {
    const [task, setTask] = useState("")
    const createTask=()=>{
        console.log(task)
    }
    return (
        <div>
            <form>
                <input 
                placeholder='task' 
                required
                onChange={(e)=>{setTask(e.target.value)}}
                > 
                </input>
                
                <Button
                children= "+"
                type="button"
                onClick={()=>createTask(task)}
                />
            </form>
        </div>
    )
}

export default Form
