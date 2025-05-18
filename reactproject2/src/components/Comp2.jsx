import React from 'react'
import Comp3 from './Comp3'

const Comp2 = ({x}) => {
  return (
    <div><Comp3 y={x}/></div>
  )
}

export default Comp2