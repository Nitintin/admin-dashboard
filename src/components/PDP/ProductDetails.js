import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer'
import {useParams} from 'react-router-dom';

const ProductDetails = () => {

    const [productInfo, setProductInfo] = useState({});
    const urlData = useParams();
    console.log('nitin', urlData);
    useEffect(() => {
        const fetchProductInfo = async () => {
            const response = await axios.get(`https://dummyjson.com/products/${urlData.pid}`);
            setProductInfo(response.data);
        }

        fetchProductInfo();
    }, []);
  return (
    <>
        <Header />
        {
            <img src={productInfo?.thumbnail} />

        }
        <Footer />
    </>
  )
}

export default ProductDetails