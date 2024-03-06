import react from 'react';

const Widget = ({color, textToDisplay, count})=>{

    const widgetStyle = {
        background: color,
    }

    return <section className="widget" style={widgetStyle}>
        {
            textToDisplay
        }<i className="fa-solid fa-bucket"></i>
        <br />
        {
            count
        }
    </section>
}

export default Widget;