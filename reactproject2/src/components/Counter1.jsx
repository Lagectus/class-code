import React, { useReducer, useState } from 'react'

const initalState = {count:20};

function reducer(state,action){
    console.log(action,"fkdkdk");
    
    switch(action.type){
        case "INC":
            return {count:state.count + 1}
        case "DEC":
            return {count:state.count -1};
        case "RESET":
            return {count:0}
        case "INCBYPAYLOAD":
            console.log(action.payload,"ddddd"
            );
            
            return {count:state.count+ action.payload}
    } 

}

const Counter1 = () => {
    const [state,dispatch] = useReducer(reducer,initalState)
    


  return (
    <>
  {state.count}
  <button onClick={()=>dispatch({type:'INC',parneet:'parneet',payload:"kmkdmckmcekscmkdf"})}>inc</button>
  <button onClick={()=>dispatch({type:'DEC'})}>dec</button>
  <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
  <button onClick={()=>dispatch({type:'INCBYPAYLOAD',payload:200})}>INC by 200</button>
  </>

  )
}

export default Counter1




