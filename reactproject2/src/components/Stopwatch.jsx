import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [sec,setSec] = useState(0);
    const [isRun,setIsRun]= useState(false);

    useEffect(()=>{
        let timerId
        if(isRun){
           timerId= setInterval(()=>{
                setSec((prev)=>prev+1);
            },1000)
            console.log("timer started");    
        }
        return ()=>{
            clearInterval(timerId); //1 /2
            console.log("timer stoped ");
            

        }
    },[isRun])

    const handleStart = ()=> setIsRun(true);
    const handleStop = ()=>setIsRun(false);
    const handleReset = ()=> {
        setIsRun(false);
        setSec(0)
    }
  return (
    <div>
        <h1> {sec} sec </h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>

    </div>
  )
}

export default Stopwatch