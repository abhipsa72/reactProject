import React , {useState, useEffect} from 'react';

function IntervalHook(props) {
const [count,setCount]= useState(0)
function tick(){
    setCount(count +1)
}
useEffect(()=> {
    
})
    return (
        <div>
            {count}
        </div>
    );
}

export default IntervalHook;