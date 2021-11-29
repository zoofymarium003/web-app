import React, {useEffect , useState } from 'react';

const Forms = ()=> {
    const[count,setCount]=useState(1)
    useEffect(()=>{
        console.warn(count)
    },[])
    return (
        <div>
           <h1>useEffect in Reactjs....{count}</h1> 
           <button onClick={()=>{setCount(count+1)}}>Update State</button>
        </div>
    );
};

export default Forms;