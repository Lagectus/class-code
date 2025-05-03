import React from 'react'

const Comp3 = ({decFN}) => {
  return (
    <div><button onClick={()=>decFN((curVal)=>curVal-1)}>Dec</button></div>
  )
}

export default Comp3