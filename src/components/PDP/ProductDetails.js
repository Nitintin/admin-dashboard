import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer'
import {useParams} from 'react-router-dom';
import Rating from './Rating';
import Price from './Price';

const ProductDetails = ({isDarkMode, toggleDarkMode}) => {

    const [productInfo, setProductInfo] = useState({});
    const urlData = useParams();
    useEffect(() => {
        const fetchProductInfo = async () => {
            const response = await axios.get(`https://dummyjson.com/products/${urlData.pid}`);
            setProductInfo(response.data);
        }

        fetchProductInfo();
    }, [urlData]);
  return (
    <>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        {
            <>
                <img src={productInfo?.thumbnail} alt='thumbnail' />
                <Rating totalRating={productInfo?.rating?.toFixed(1)}/>
                {
                    productInfo?.stock > 50 ? <button>Add to Cart</button> : <button disabled>Add to Cart</button>
                }
                <Price productInfo={productInfo} />
            </>
        }
        <Footer />
    </>
  )
}

export default ProductDetails