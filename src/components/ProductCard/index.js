import React from 'react'
import { Link } from 'react-router-dom'
import { StyledCard, StyledImg } from './ProductCard.styled'

const ProductCard = ({
    product
}) => {
  return (
    <StyledCard>
        <Link to={`/products/${product.id}`}>
          <StyledImg src={product.thumbnail} />
          <p>{product.title.toUpperCase()}</p>
        </Link>
    </StyledCard>
  )
}

export default ProductCard