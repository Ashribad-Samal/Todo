
import React,{useEffect, useState} from 'react'
import Todo from './Component/Todo'
import TodoData from './Component/TodoData'


function App(){
 const [inputData,setinputData] = useState('')
 const [data,setData] = useState([])
 const [filterData, setFilterData] = useState([])
 const [click,setClick] = useState(false)

 useEffect(()=>{
   getFromLocal()
 },[])

 useEffect(()=>{
  saveToLocal()
},[data])


 const saveToLocal = ()=>{
  localStorage.setItem("inputText",JSON.stringify(data))
  }

  const getFromLocal =()=>{
    if(localStorage.getItem("inputText")=== null){
      localStorage.setItem("inpuText",JSON.stringify([]));
    }else{
      let todolocal = JSON.parse(localStorage.getItem("inputText"))
      setData(todolocal)
    }
  }


  return(
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '5rem'
    }}>
      <h4>To-Do List</h4>
      <Todo  
        inputData={inputData}
        setinputData = {setinputData}
        setData={setData}
        data={data}
        click={click}
        //EditHandeler={EditHandeler}
      />
      <TodoData
        filterData={filterData}
        setData={setData}
        data={data}
        setinputData={setinputData}
        inputData={inputData}
        click={click}
        setClick={setClick}
        //EditHandeler={EditHandeler}
      />
    </div>
  )
}

export default App