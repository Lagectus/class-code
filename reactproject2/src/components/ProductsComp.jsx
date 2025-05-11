import React, { useEffect, useReducer, useState } from 'react'
import { initialState, productRuducer } from './productReducer'

const ProductsComp = () => {
  const [state,dispatch] = useReducer(productRuducer,initialState)
  const {loading,filtered,error,products,categories} =state
  const [counter,setCounter] = useState(0) 
  const [cartProuct,setCartProduct] = useState([])
  const [isShow,setIshow] = useState(false);

  const handleAddToCart = (data) => {
    const isExist = cartProuct.find(p => p.id === data.id);
    setCounter(prev => prev + 1);  // Updating counter properly using the previous state value.
    
    if (isExist) {
      // If the product already exists in the cart, update its quantity.
      setCartProduct(prevCart => 
        prevCart.map(p => 
          p.id === data.id ? { ...p, qty1: p.qty1 + 1 } : p
        )
      );
      console.log(cartProuct,"dddss");
    } else {
      console.log(cartProuct,"ddd");
      
      // If the product doesn't exist, add it to the cart with qty1 set to 1.
      setCartProduct(prevCart => [...prevCart, { ...data, qty1: 1 }]);
    }
  }

  const handleIncrement = (id) => {
    setCartProduct(prevCart =>
      prevCart.map(p =>
        p.id === id ? { ...p, qty1: p.qty1 + 1 } : p
      )
    )
    setCounter(prev => prev + 1)
  }

  const handleDecrement = (id) => {
    setCartProduct(prevCart =>
      prevCart.map(p =>
        p.id === id && p.qty1 > 1 ? { ...p, qty1: p.qty1 - 1 } : p
      )
    )
    setCounter(prev => prev > 0 ? prev - 1 : 0)
  }

  const handleRemoveFromCart = (id,qty) => {
    setCartProduct(prevCart => prevCart.filter(p => p.id !== id))
    setCounter(prev => prev - qty)
  }
  const calTotalAmount = ()=>{
   return cartProuct.reduce((acc,val)=>acc+(val.price * val.qty1),0)
  }
  
  useEffect(()=>{
    dispatch({type:'FETCH_START'})
    fetch('https://fakestoreapi.com/products')
    .then((res=>res.json())).then(data=>{console.log(data ,'paylaod');
     dispatch({type:'FETCH_SUCCESS',payload:data})})
    .catch(err=>{console.log(err.message,'payload');
     dispatch({type:'FETCH_ERROR',payload:err.message})})
  },[])
  return (
    <div>
      <h2>Products</h2>
      <input placeholder='Search product....' onChange={(e)=>dispatch({type:'SEARCH',payload: e.target.value})}></input>
      <select onChange={(e)=>dispatch({type:'FILTER_BY_CATEGORY',payload:e.target.value})}>
        <option>ALL</option>
        {categories && categories.map((ct)=>(
          <option value={ct} key = {ct}>{ct}</option>
        ))}
      </select>
      <select onChange={(e)=>dispatch({type:'SORT_BY_PRICE',payload:e.target.value})}>
        <option>SORT</option>
        <option value="asc">price: LOW to HIGH </option>
        <option value="dec">price: HIGH to LOW </option>
      </select>
      {loading && <p>LOadingg....</p>}
      {error && <p >{error}</p>}
      <div>
        {filtered.map((prod)=>(
          <div>
            <img src={prod.image} width='100px' height='100px'></img>
            {prod.title}{prod.price}{prod.category}
            <button onClick={()=>handleAddToCart(prod)}>ADD to CART</button>
          </div>
        ))}
      </div>
        <h1 style={{position:'fixed', top:0,right:0}} onClick={()=>setIshow(!isShow)}>cart { counter}</h1>
        {isShow && (<div  style={{position:'fixed', top:'97px',right:0}} >
          {cartProuct && cartProuct.map((prod)=>{
          return (
            <div key={prod.id}>
              <p>{prod.title}</p>
              <button onClick={()=>handleIncrement(prod.id)}>inc</button>
              <b>{prod.qty1}</b>
              <button onClick={()=>handleDecrement(prod.id)}>dec</button>
              <button onClick={()=>handleRemoveFromCart(prod.id,prod.qty1)}>remove</button>
              <b>{prod.price} price {prod.qty1 * prod.price} </b>
            </div>
          )
        })}
        {<p>total{Math.round(calTotalAmount())}</p>}
        </div>)}
    </div>
  )
}

export default ProductsComp