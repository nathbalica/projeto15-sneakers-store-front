import styled from "styled-components";

export const StyledButton = styled.button`
    width: 217px;
    height: 50px;
    background-color: #0ACF83;
    border: 1px solid #0ACF83;
    border-radius: 8px;
    margin-top: 16px;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #FFF;

    :disabled {
        background-color: #D5E0ED;
        border: 1px solid #D5E0ED;
        color: #FFF;
    }
`;