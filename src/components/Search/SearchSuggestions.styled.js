import styled from 'styled-components';

export const StyledUL = styled.ul`
    margin-top: 0;
    width: 20%;
    border: 1px solid black;
    border-radius: 10px;
    list-style: none;
    padding: 10px;
`;

export const StyledLI = styled.li`
    font-size: 18px;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 5px;
    &:hover{
        background: #efefef;
        cursor: pointer;
    }
    a{
        color: #000;
    }
`