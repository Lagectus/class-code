import React from 'react'

const Card = ({product}) => {
  return (
    <div>{product.id}{product.title}</div>
  )
}

export default Card