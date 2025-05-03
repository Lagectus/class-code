import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]= useState(localStorage.getItem('counter')? localStorage.getItem('counter') : 0);
    useEffect(()=>{
        let storedCount = localStorage.getItem('counter');
        if(storedCount){
            setCount(Number(storedCount));
        }
        console.log("component mount");

        return ()=>{
            console.log("component unmount");
            
        }
        
    },[]);

    useEffect(()=>{
        if(count !==0){
            console.log(`comp updated ${count}`);
        }
        localStorage.setItem('counter',count)
    },[count])
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=>setCount(count+1)}>inc</button>
    </div>
  )
}

const ShowCounter =()=>{
    const [showCounter,setShowCounter] = useState(true);
    return(
        <div>
            <button onClick={()=>setShowCounter(!showCounter)}>{showCounter?"hide counter" : "show counter"}</button>
            {showCounter && <Counter/>}
        </div>
    )
}

export default ShowCounter