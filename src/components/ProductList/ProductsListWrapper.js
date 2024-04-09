import react, {useEffect, useState} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Header from '../Header';
import Footer from '../Footer';
import ErrorArea from './ErrorArea';
import SearchArea from './SearchArea';
import SearchSuggestions from './SearchSuggestions';
import ProductsHTMLTable from './ProductsHTMLTable';
import Loader from '../Loader';
import Pagination from '../Pagination';

const Products = () => {

    const [productsData, setProductsData] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [currentPagination, setCurrentPagination] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [sugeestionList, setSuggestionList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            const response = await axios.get(`https://dummyjson.com/products?skip=${currentPagination*30}`);
            console.log(response.data.products);
            setProductsData(response.data.products);
            setTotalProducts(response.data.total);
            setIsLoading(false);
        }

        fetchProducts();
    }, [currentPagination]);

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
            {
                isLoading === true ? <Loader /> : <ProductsHTMLTable productsData={productsData} />
            }
            {/* //pagination button */}
            <Pagination
                totalProducts={totalProducts}
                setCurrentPagination={setCurrentPagination}
            />
            {/* <DataTable
                columns={columns}
                data={productsData}
                selectableRows
            /> */}
        <Footer />
    </>
}

export default Products;