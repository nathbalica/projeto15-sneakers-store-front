import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductDescription from "../components/ProductDescription";
import SizesBar from "../components/SizesBar";
import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useState } from "react";
import apiProduct from "../services/apiProduct";
import AuthContext from "../contexts/AuthContext";
import apis from "../services/apis";
import apiCart from "../services/apiCart";

export default function ProductPage() {
    const id = useLocation().pathname.split("/").pop();
    const [produto, setProduto] = useState(undefined);
    const [selectedSize, setSelectedSize] = useState(-1);
    const { userAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    async function addProductCart() {

        try {
            const { userId } = await apis.getSession(userAuth.token);

            await apiCart.addProductIntoCart(userId, produto._id);
            navigate("/produtos");
            
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        apiProduct.getProduct(id)
            .then((res) => {
                setProduto(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!produto) return (
        <PageContainer>
            Carregando...
        </PageContainer>
    );

    return (
        <PageContainer>
            <Header />
            <ProductCard produto={produto} />
            <SizesBar
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                sizes={produto.size} />
            <ProductDescription descricao={produto.description} />
            <StyledButton
                onClick={addProductCart}
                disabled={(selectedSize === -1)}>Adicionar ao carrinho</StyledButton>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    padding: 0px 15px;
`;