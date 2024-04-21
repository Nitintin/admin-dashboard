import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import ErrorArea from './ErrorArea';
import SearchArea from '../Search/SearchArea';
import SearchSuggestions from '../Search/SearchSuggestions';
// import ProductsHTMLTable from '../Tables/ProductsHTMLTable';
import Loader from '../Loader';
import Pagination from '../Pagination';
import ProductCard from '../ProductCard';
import { ProductCardWrapper } from './ProductList.styled';

const Products = () => {

    const [productsData, setProductsData] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [currentPagination, setCurrentPagination] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [sugeestionList, setSuggestionList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getLocalProduct = () => {
            return {
                products: JSON.parse(localStorage.getItem(`products_skip=${currentPagination}`)),
                total: localStorage.getItem('totalProducts'),
            }
        }

        const fetchProducts = async () => {
            setIsLoading(true);
            const response = await axios.get(`https://dummyjson.com/products?skip=${currentPagination*30}`);
            setProductsData(response.data.products);
            setTotalProducts(response.data.total);
            setLocalProduct(response.data);
            setIsLoading(false);
        }

        const setLocalProduct = (data) => {
            localStorage.setItem(`products_skip=${currentPagination}`, JSON.stringify(data.products));
            localStorage.setItem(`totalProducts`, data.total);
        }

        const localData = getLocalProduct();
        if(localData.products){
            setProductsData(localData.products);
            setTotalProducts(localData.total);
        }else{
            fetchProducts();
        }
    }, [currentPagination]);
    
    return <>
        <Header/>
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
            
            {
                isLoading === true ? <Loader /> : <>
                    <ProductCardWrapper>
                        {
                            productsData.map(item => <ProductCard product={item} key={item.title} />)
                        }
                    </ProductCardWrapper>
                    
                    {/* <ProductsHTMLTable productsData={productsData} /> */}
                </>
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