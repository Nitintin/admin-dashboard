import react, {useState, useEffect} from 'react';
import axios from 'axios';
import Widget from './Widget';

const WidgetWrapper = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://dummyjson.com/products');
            // const userResponse = await axios.get('https://dummyjson.com/users');
            const {
                data
            } = response;
            setProducts(data.products);
        }

        fetchData();
    }, []);

    return <section className='widgetWrapper widgetGridContainer'>
        {
            products && <Widget
            color='#0034B0'
            textToDisplay="Products"
            count={products.length}
            redirectPath='/products'
        />
        }
        <Widget
            color='#CB6102'
            textToDisplay="Categories"
            count={30}
            redirectPath='/category'
        />
        <Widget
            color='#2A6D2E'
            textToDisplay="Customer"
            count={10}
            redirectPath='/customers'
        />
        <Widget color='#AF0101' textToDisplay="Alert" count={5}/>
    </section>
}

export default WidgetWrapper;