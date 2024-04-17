import react from 'react';
import {Link} from 'react-router-dom';
import { StyledWidget } from './Widget.styled';

const Widget = ({color, textToDisplay, count, redirectPath})=>{

    return <StyledWidget color={color}>
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
    </StyledWidget>
}

export default Widget;