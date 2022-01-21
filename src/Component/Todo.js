import React,{useState} from 'react'
import './Css/Todo.css'


function Todo ({inputData,click,setinputData,setData,data}){
   
    const todoInput = (e) =>{
        //console.log(e.target.value)
        setinputData(e.target.value)
    }

    const submitHandel =(e) =>{
        e.preventDefault();
        setData([
            ...data,
            {text: inputData, completed: false, id:Math.random()*1000}
        ]);
        
        setinputData("")
    };

    return(
    <div className='todo'>
        <form>
           <input type="text" value = {inputData} className="todo-input"  
           onChange={todoInput}/>
           {
               click?(
                <>
                <button disabled>click on Edit button</button>
                </>
               ):(
                <button className="todo-button" type="submit" onClick={submitHandel}  >
                 Add
                </button>
            
               )
           }
        </form>
    </div>
        
    )

}
export default Todo