import React, { useEffect, useState } from 'react'
import Card from './Card';

const Products = () => {
    const [Data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        console.log("called");
        
        fetch('https://fakestoreapi.com/products').then((res)=>{
            if(!res.ok){
                throw new Error('Network response error')
            }
            return res.json()
        }).then((data)=>{
            setData(data);
            setLoading(false);
        }).catch((err)=>{
            setError(err.message);
            setLoading(false);
        })

        
    })
    if(loading) return <p>Loading ....</p>
    if(error) return <p>Error: {error}</p>
  return (
    <>
    {Data && Data.map((prod)=> <Card product = {prod}/>)}
    </>
    
    )
    }
  

export default Products