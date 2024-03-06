import react from 'react';

const Widget = ({color})=>{

    const widgetStyle = {
        background: color,
    }

    return <section className="widget" style={widgetStyle}>Widget<i class="fa-solid fa-bucket"></i></section>
}

export default Widget;