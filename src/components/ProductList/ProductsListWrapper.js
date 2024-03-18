import react, {useEffect, useState} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Header from '../Header';
import Footer from '../Footer';
import ErrorArea from './ErrorArea';
import SearchArea from './SearchArea';
import SearchSuggestions from './SearchSuggestions';
import ProductsHTMLTable from './ProductsHTMLTable';

const Products = () => {

    const [productsData, setProductsData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [sugeestionList, setSuggestionList] = useState([]);

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
            <SearchArea
                productsData={productsData}
                setErrorMsg={setErrorMsg}
                setSuggestionList={setSuggestionList}
            />
            <ErrorArea
                errorMsg={errorMsg}
            />
            {
                !!sugeestionList.length && <SearchSuggestions 
                sugeestionList={sugeestionList}
                />
            }
            
            <hr />
            <ProductsHTMLTable productsData={productsData} />
            {/* <DataTable
                columns={columns}
                data={productsData}
                selectableRows
            /> */}
        <Footer />
    </>
}

export default Products;