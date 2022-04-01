import React ,{useState}from 'react';
import todoProd from './todod_data'

function Todo() {

    
    const [todoDatas,setStatus]= useState(todoProd)
    
    const myStyle= todoDatas[0].status? {color : "green", textDecoration : "line-through"} : {color : "red"}

    console.log(todoDatas[0])

function handleEvent(id){
    setStatus(todoDatas.map(todoData=> todoData.id === id ? {...todoData, status : !todoData.status} : todoData))
    
}
    return (
        <div>
{todoDatas.map(todoD => <div key={todoD.id}><input type='checkbox' checked={todoD.status} onClick={() =>handleEvent(todoD.id)} ></input>
   <span style={todoD.status? {color : "green", textDecoration : "line-through"} : {color : "red"}}>{todoD.name}</span></div> )}
           
        </div>
    );
}

export default Todo;

