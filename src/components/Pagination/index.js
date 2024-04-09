import React from 'react';
import { StyledWrapper, StyledButton } from './Pagination.styled';

const Pagination = ({
    totalProducts,
    productsPerPage = 30,
    setCurrentPagination
}) => {
    const paginationArr = [];

    const totalPaginationsButtons = Math.ceil(totalProducts / productsPerPage);

    const handlePaginationClick = (i) => {
        //handle pagination
        console.log('handlePaginationClick', i);
        setCurrentPagination(i);
    }

    for(let i=0; i<totalPaginationsButtons; i++){
        paginationArr.push(<StyledButton onClick={(event) =>handlePaginationClick(i, event)}>{i+1}</StyledButton>)
    }
  return (
    <StyledWrapper>
        {paginationArr}
    </StyledWrapper>
  )
}

export default Pagination