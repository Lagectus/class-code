import React, { useEffect, useReducer } from 'react'
import { initialState, productRuducer } from './productReducer'

const ProductsComp = () => {
  const [state,dispatch] = useReducer(productRuducer,initialState)
  const {loading,filtered,error,products,categories} =state
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
            {prod.title}{prod.price}{prod.category}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsComp