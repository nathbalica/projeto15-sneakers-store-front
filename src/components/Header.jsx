import React from "react";
import { BiExit } from "react-icons/bi";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header({ cartItems, navigateToCheckout }) {
  return (
    <HeaderContainer>
      <BiExit color="#fff" />
      <CartIcon onClick={navigateToCheckout}>
        <AiOutlineShoppingCart color="#fff" />
        <CartCount>{cartItems}</CartCount>
      </CartIcon>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.header`
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

