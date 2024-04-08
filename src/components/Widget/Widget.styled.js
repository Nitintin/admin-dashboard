import styled from 'styled-components';

export const StyledWidget = styled.section`
    height:50%;
    width: 20%;
    background-color: ${(props) => props.color};
    margin:2%;
    border-radius: 8px;
    padding: 2%;
    font-size: 22px;
    font-weight: 500;
    a{
        color: #fff;
    }
`;