import React , {useState} from 'react';

function Hooks() {
    const [name , setName] = useState({firstName :  '',lastName : ''})
    return (
        <div>
            <input type="text" value={name.firstName} onChange={e => setName({...name,firstName: e.target.value})}></input>
            <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}></input>
            <p>{name.firstName}</p>
            <p>{name.lastName}</p>
        </div>
    );
}

export default Hooks;