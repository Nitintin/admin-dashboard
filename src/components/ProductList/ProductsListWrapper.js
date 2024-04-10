import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import ErrorArea from './ErrorArea';
import SearchArea from '../Search/SearchArea';
import SearchSuggestions from '../Search/SearchSuggestions';
import ProductsHTMLTable from '../Tables/ProductsHTMLTable';
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
        <Footer />
    </>
}

export default Products;