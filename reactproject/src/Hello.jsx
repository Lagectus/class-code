import React from 'react'

import "./Hello.css"

const Hello = ({data,hobbies}) => {
    console.log(data,"sss",hobbies);
    
  return (
    <div className='h'>
        {data && data.map((val,i)=>{
            return<> <h1>{val.title}</h1>
            <img src={val.image}></img>
            </>
        })} 
   
    </div>
  )
}

export default Hello