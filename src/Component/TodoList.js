import React from 'react';

function TodoList({text,item,click,setinputData,setClick,setData,data,inputData}) {

    const deleteHandeler = () =>{
        console.log(item) 
        setData(data.filter((el)=>el.id !== item.id))
    }

    const completeHandeler = () =>{
        setData(data.map((i)=>{
            if(i.id === item.id){
                return{
                    ...item,
                    completed: !i.completed,
                };
            }
            return i;
        }))
    }

    const EditHandeler = () =>{
        setClick(!click)
        let newEditItem = data.find((i)=>{
            return i.id === item.id
        })
        setinputData(newEditItem.text)
        console.log(newEditItem)
        setData(data.map((i)=>{
            if(i.id === item.id){
                return{
                    ...i,
                    text: inputData,
                };
            }
            return i;
        }))
    }


  return( 
    <div className = "todo">
    <li className={`todo-Item ${item.completed ? "completed" : ""}`}>{text}</li>
     <button onClick = {completeHandeler} className={`complete-button ${item.completed ? "completed" : ""}`}>
      complete
     </button>
     <button onClick = {()=>EditHandeler(item)} className='complete-button'>
      Edit
     </button>
     <button onClick = {deleteHandeler} className="Trash-button">
        Delete
     </button>
 </div>   
  )
}

export default TodoList;
