import react, {useState, useEffect} from 'react';
import axios from 'axios';
import Widget from './Widget';

const WidgetWrapper = () => {

    const [products, setProducts] = useState([]);
    const test = false;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://dummyjson.com/products');
            const userResponse = await axios.get('https://dummyjson.com/users');
            const {
                data
            } = response;
            setProducts(data.products);
        }

        fetchData();
    }, []);

    return <section className='widgetWrapper widgetGridContainer'>
        {
            products && <Widget color='#2E6CFF' textToDisplay="Products" count={products.length}/>
        }
        {
            !test && <Widget color='#FF7900' textToDisplay="Categories" count={30}/>
        }
        <Widget color='#368839' textToDisplay="Customer" count={10}/>
        <Widget color='#DB0001' textToDisplay="Alert" count={5}/>
    </section>
}

export default WidgetWrapper;