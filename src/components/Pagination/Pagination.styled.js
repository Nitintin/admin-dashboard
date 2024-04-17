import styled from "styled-components";

export const StyledWrapper = styled.div`
    margin: 5% auto;
    width: 25%;
    display: flex;
    justify-content: space-evenly;
`
export const StyledButton = styled.button`
    width: 50px;
    height: 40px;
    border-radius: 20%;
    background-color: #000;
    color: #fff;
    &:hover{
        cursor: grab;
    }
`