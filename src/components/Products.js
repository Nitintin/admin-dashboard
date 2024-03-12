import react, {useEffect, useState} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Header from './Header';
import Footer from './Footer';

const Products = () => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://dummyjson.com/products');
            console.log(response.data.products);
            setProductsData(response.data.products);
        }

        fetchProducts();
    }, []);

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
    return <>
        <Header />
            <h2>Product Page </h2>
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
                            <td>{item.title}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                        </tr>
                    ))
                }
            </table>
            <DataTable
                columns={columns}
                data={productsData}
                selectableRows
            />
        <Footer />
    </>
}

export default Products;