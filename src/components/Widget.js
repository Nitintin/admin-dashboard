import react from 'react';
import {Link} from 'react-router-dom';

const Widget = ({color, textToDisplay, count, redirectPath})=>{

    const widgetStyle = {
        background: color,
    }

    return <section className="widget" style={widgetStyle}>
        <div className='widgetTopSection'>
            {
                <Link to={`${redirectPath}`}>{textToDisplay}</Link>
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