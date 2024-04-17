import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLI, StyledUL, StyledWrapper } from './SearchSuggestions.styled'

const SearchSuggestions = ({
    sugeestionList
}) => {
    //ul li for the suggestions
  return (
    <StyledWrapper>
      <StyledUL>
        {
          sugeestionList.map(item => <StyledLI><Link to={`/products/${item.id}`}>{item.title}</Link></StyledLI>)
        }
      </StyledUL>
    </StyledWrapper>
  )
}

export default SearchSuggestions