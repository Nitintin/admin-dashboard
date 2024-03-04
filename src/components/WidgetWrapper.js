import react from 'react';
import Widget from './Widget';

const WidgetWrapper = () => {
    const products = [
        {
            name: 'Iphone',
            category: 'electronic',
            status: 'instock'
        },
        {
            name: 'Book',
            category: 'education',
            status: 'instock'
        },
        {
            name: 'Tshirt',
            category: 'clothing',
            status: 'instock'
        },
        {
            name: 'microwave',
            category: 'electronic',
            status: 'outofstock'
        }
    ];

    const getWidget = () => {
        const arr = [];

        for(let i=0; i<40; i++){
            arr.push(<Widget />)
        }

        return arr;
    }

    return <p className='widgetWrapper widgetGridContainer'>
        {
            getWidget()
        }
    </p>
}

export default WidgetWrapper;