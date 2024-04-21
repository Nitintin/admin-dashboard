import { StyledHeader } from './Header.styled';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Header = () =>{
    
    const contextData = useContext(ThemeContext);

    return <StyledHeader>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Product List</Link></li>
            <li onClick={contextData?.toggleDarkMode}>
                MODE: {contextData?.isDarkMode ? 'Dark ' : 'Light '}
                <i className={`fa-solid ${contextData?.isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
            </li>
        </ul>
    </StyledHeader>
}


export default Header;