import React, { useContext } from 'react'
import { productStore } from '../App';

const Comp6 = () => {
  const  {count,setCount}= useContext(productStore)
  console.log({count,setCount});
  
  return (
    <div>this is my comp 6 {count} </div>
  )
}

export default Comp6