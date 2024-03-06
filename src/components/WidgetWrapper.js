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

        for(let i=0; i<4; i++){
            arr.push(<Widget />)
        }

        return arr;
    }

    return <section className='widgetWrapper widgetGridContainer'>
        {/* {
            getWidget()
        } */}
        <Widget color='#2E6CFF' />
        <Widget color='#FF7900'/>
        <Widget color='#368839'/>
        <Widget color='#DB0001'/>
    </section>
}

export default WidgetWrapper;