import React from 'react'

const Comp6 = ({sagar}) => {
  return (
    <div> <button onClick={()=>sagar((curVal)=>curVal+1)}>inc</button></div>
  )
}

export default Comp6