import react, {useState, useEffect} from 'react';
import axios from 'axios';
import Widget from './Widget';

const WidgetWrapper = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://dummyjson.com/products');
            const {
                data
            } = response;
            setProducts(data.products);
        }
        fetchProducts();
    }, []);

    return <section className='widgetWrapper widgetGridContainer'>
        <Widget color='#2E6CFF' textToDisplay="Products" count={products.length}/>
        <Widget color='#FF7900' textToDisplay="Categories" count={30}/>
        <Widget color='#368839' textToDisplay="Customer" count={10}/>
        <Widget color='#DB0001' textToDisplay="Alert" count={5}/>
    </section>
}

export default WidgetWrapper;