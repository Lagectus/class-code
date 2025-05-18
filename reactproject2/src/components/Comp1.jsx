import React, { useContext } from 'react'
import Comp4 from './Comp4'
import Comp2 from './Comp2'
import { productStore } from '../App'

const Comp1 = () => {
  const {productAmount} = useContext(productStore)
  // console.log(d);
  
  let data = 100
  return (
    <div>{productAmount} <Comp2 x={data}/></div>
  )
}

export default Comp1