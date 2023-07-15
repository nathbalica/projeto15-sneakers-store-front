import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    const navigate = useNavigate();

    return (
        <StyledHeader>
            <ion-icon onClick={() => navigate(-1)} name="chevron-back-outline"></ion-icon>
            <ion-icon onClick={() => navigate("/meu-carrinho")} name="cart-outline"></ion-icon>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 70px;
`