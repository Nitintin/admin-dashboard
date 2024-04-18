import React from 'react'

const Price = ({
    productInfo
}) => {

    const dicountedPrice = productInfo?.price - (productInfo?.price * productInfo?.discountPercentage / 100);
  return (
    <div>
        {
            '$'
        }
        {
            <s> {productInfo?.price} </s>
        }
        {
            ' $' + dicountedPrice?.toFixed(2)
        }
    </div>
  )
}

export default Price