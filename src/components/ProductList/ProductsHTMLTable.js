import React from 'react'
import { Link } from 'react-router-dom'

const ProductsHTMLTable = ({
    productsData
}) => {
  return (
    //html table
    <table>
        <tr>
            <td>Sno</td>
            <td>Product Name</td>
            <td>Product Brand</td>
            <td>Product Category</td>
            <td>Product Price</td>
            <td>Stars</td>
        </tr>
        {
            productsData.map( (item, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>
                        <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.rating}</td>
                </tr>
            ))
        }
    </table>
  )
}

export default ProductsHTMLTable