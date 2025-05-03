import React, { useState } from 'react'
import Hello from './Hello';
import Todo from './Todo';



const App = () => {
    let [Pdata,setPdata] = useState([])
    const loadData = async()=>{
        let jsonD =await fetch('https://fakestoreapi.com/products')
        let data =await jsonD.json()
        setPdata(data)
        
        
        
    }
    // loadData()
    return (
        <>
        <h1>ddd</h1>
          
          <Demo/>
        
        </>
    )
}

const Demo =()=>{
    return (<>
    <h1>gggggg</h1>
    </>)
}

export default App