import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { AuthContextProvider } from "./contexts/AuthContext"
import ProductPage from "./pages/ProductPage"
import MyCart from "./pages/MyCartPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import CheckoutPage from "./pages/CheckoutPage"

export default function App() {
  
  return (
    <AuthContextProvider>
      {/*<PagesContainer>*/}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/nova-transacao/:type" element={<TransactionsPage />} />
            <Route path="/editar-registro/:type/:id" element={<EditTransactionPage />} /> */}
            <Route path="/" element={<ProductPage />} />
            <Route path="/produto/:id" element={<ProductPage />} />
            <Route path="/meu-carrinho" element={<MyCart />} />
            <Route path='/checkout' element={<CheckoutPage />} />
      
          </Routes>
        </BrowserRouter>
      {/*</PagesContainer>*/}
    </AuthContextProvider>
  )
}

const PagesContainer = styled.main`
  max-width: 100vw;
  max-height: 100vh;
`
