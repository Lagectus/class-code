import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import ShowCounter from './components/Counter'
import Stopwatch from './components/Stopwatch'
import Products from './components/Products'
import Counter1 from './components/Counter1'

function App() {
//   const [count, setCount] = useState(0)
//   const [click,setClick] = useState(true);
//  useEffect(()=>{
//   console.log(`this is my useEffect ${count}${click}` );
  

  
//  },[count,click])

  return (
    <>
    {/* <Products/> */}
    <Counter1/>
    {/* <Stopwatch/> */}
    {/* <ShowCounter/> */}
    {/* <button onClick={()=>setClick((data)=>!data)}>click me</button> */}
    {/* {count} */}
    {/* <button onClick={()=>{
      setCount((curVal)=>curVal+1)
      setCount((curVal)=>curVal+1)
      setCount((curVal)=>curVal+1)
      // setCount(count + 1)
      // setCount(count + 1)
      // setCount(count + 1)
    }}>inc</button>
      <Demo/>
      <Todo/> */}
      {/* <Comp1 ctn = {count} setfN={setCount}/>
      <Comp2/>
      <Comp3 decFN={setCount}/> */}
    </>
  )
}



export default App
