import React, { useState } from 'react'

const App = ()=>{
  const[data,setData]=useState(0)
  // function updateData()
  // {
  //   setData(data+1)
  // }
  return(
    <>
    <h2>{data}</h2>
    <button onClick={()=>{setData(data+1)}}>Update</button>
    </>
  )
}
export default App;