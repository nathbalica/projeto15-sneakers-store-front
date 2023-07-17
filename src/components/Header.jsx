import React from "react";
// import { BiExit } from "react-icons/bi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CartCount, CartIcon } from "../pages/HomePage";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

// export default function Header({ cartItems, navigateToCheckout }) {
//   return (
//     <HeaderContainer>
//       <BiExit color="#fff" />
//       <CartIcon onClick={navigateToCheckout}>
//         <AiOutlineShoppingCart color="#fff" />
//         <CartCount>{cartItems}</CartCount>
//       </CartIcon>
//     </HeaderContainer>
//   );
// }

export default function Header() {
  const navigate = useNavigate();
  const {cartItens} = useContext(CartContext);

  return (
      <StyledHeader>
          <ion-icon onClick={() => navigate(-1)} name="chevron-back-outline"></ion-icon>
          <CartIcon onClick={() => navigate("/meu-carrinho")}>
              <AiOutlineShoppingCart />
              {cartItens && <CartCount>{cartItens.length}</CartCount>}
          </CartIcon>
      </StyledHeader>
  );
}


const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 5px;
  margin-bottom: 15px;
  font-size: 26px;
  border: #292929;
  background-color: #038754;
  height: 50px;
  overflow: hidden;
`;

export const CartIcon = styled.div`
  position: relative;
  margin-right: 10px;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px;
  font-size: 12px;
`;

export const HeaderContainer = styled.header`

`
