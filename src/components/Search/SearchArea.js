import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { StyledInput, StyledWrapper } from './SearchSuggestions.styled';

const SearchArea = ({
    productsData,
    setErrorMsg,
    setSuggestionList
}) => {

    const [userSearchInput, setUserSearchInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if(!userSearchInput){
            return;
        }

        const filteredArray = productsData.filter(item => item.title.toLowerCase() === userSearchInput.toLowerCase());
        if(filteredArray.length > 0){
            navigate(`/products/${filteredArray[0].id}`)
        }else{
            setErrorMsg('We do not have this product');
        }
    }

    const handleInputChange = (e) => {
        const userData = e.target.value;
        setUserSearchInput(userData);

        const filteredData = productsData.filter(item => item.title.toLowerCase().includes(userData.toLowerCase()));
        setSuggestionList(filteredData);

        if(!userData){
            setErrorMsg('');
            setSuggestionList('');
        }
    }

  return (
    //input
    //search button
    <StyledWrapper>
        <StyledInput placeholder='Search for product Name' value={userSearchInput} onChange={handleInputChange} />
        <button type='button' onClick={handleSearch}>Search <i className="fa-solid fa-magnifying-glass"></i></button>
    </StyledWrapper>
  )
}

export default SearchArea