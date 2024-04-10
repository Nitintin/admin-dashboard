import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Brand',
        selector: row => row.brand,
        sortable: true,
    },
];

const ProductReactDataTable = ({
    productsData
}) => {
  return (
    <DataTable
        columns={columns}
        data={productsData}
        selectableRows
    /> 
  )
}

export default ProductReactDataTable