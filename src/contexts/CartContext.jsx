import { createContext, useContext, useEffect, useState } from "react";
import apiCart from "../services/apiCart";
import AuthContext from "./AuthContext";
import apis from "../services/apis";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItens, setCartItens] = useState([]);
  const { userAuth } = useContext(AuthContext);

  useEffect(() => {
    async function fetchCart() {

      try {
        const response = await apis.getSession(userAuth.token);
        const { userId } = response.data

        const cart = await apiCart.getCart(userId);
        setCartItens(cart.data.itens);

      } catch (err) {
        console.log(err);
      }
    }

    fetchCart();

  }, []);

  return (
    <CartContext.Provider value={{ cartItens, setCartItens }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;