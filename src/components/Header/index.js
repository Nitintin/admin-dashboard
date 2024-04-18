import { StyledHeader } from './Header.styled';
import {Link} from 'react-router-dom';

const Header = ({isDarkMode, toggleDarkMode}) =>{
    return <StyledHeader>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Product List</Link></li>
            <li onClick={toggleDarkMode}>
                MODE: {isDarkMode ? 'Dark ' : 'Light '}
                <i className={`fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
            </li>
        </ul>
    </StyledHeader>
}


export default Header;