import React from "react";
import { BiExit } from "react-icons/bi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { CartIcon, CartCount } from "./styles";

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
          <BiExit color="#fff" />
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

export const HeaderContainer = styled.header`

`
