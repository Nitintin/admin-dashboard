import react from 'react';

const Widget = ({color, textToDisplay, count})=>{

    const widgetStyle = {
        background: color,
    }

    return <section className="widget" style={widgetStyle}>
        <div className='widgetTopSection'>
            {
                textToDisplay
            }<i className="fa-solid fa-bucket"></i>
        </div>
        <div className='widgetBottomSection'>
            {
                count
            }
        </div>
        
    </section>
}

export default Widget;