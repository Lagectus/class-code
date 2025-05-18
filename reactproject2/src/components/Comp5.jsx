import React, { useContext } from 'react'
import { productStore } from '../App'

const Comp5 = ({a}) => {
  const  {count,setCount}= useContext(productStore)
  // console.log(d,"ff");

  
  return (
    <div>My count value {count} 
    <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Comp5