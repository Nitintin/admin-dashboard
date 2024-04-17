import styled from 'styled-components';

export const StyledUL = styled.ul`
    margin: 0 auto;
    width: 30%;
    border: 1px solid black;
    border-radius: 10px;
    list-style: none;
    padding: 10px;
    background: var(--bg-color-secondary);
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

export const StyledInput = styled.input`
    padding: 0 10px;
    width: 50%;
    height: 30px;
    border-radius: 20px;
    border: 1px solid black;
    margin: 0 auto;
`

export const StyledWrapper = styled.div`
    width: 100%;
`