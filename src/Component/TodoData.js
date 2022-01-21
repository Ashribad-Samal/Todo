import React from 'react';
import TodoList from './TodoList';

function TodoData({filterData,inputData,EditHandeler,click,setClick,setinputData,setData,data}) {
  return (
  <div className="todo-container">
      <ul className="todo-list">
          {
              data.map((item)=>(
                <TodoList
                    text={item.text}
                    setData={setData}
                    data={data}
                    item={item}
                    key={item.id}
                    setinputData={setinputData}
                    inputData={inputData}
                    click={click}
                    setClick={setClick}
                    
                />
              ))
          }
      </ul>
  </div>
  )
}

export default TodoData;
