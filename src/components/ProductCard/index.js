import React from 'react'
import { StyledCard, StyledImg } from './ProductCard.styled'

const ProductCard = ({
    product
}) => {
  return (
    <StyledCard>
        <StyledImg src={product.thumbnail} />
        <p>{product.title}</p>
    </StyledCard>
  )
}

export default ProductCard