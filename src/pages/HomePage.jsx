import styled from "styled-components"
import { BiExit } from "react-icons/bi"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"
import apis from "../services/apis"
import useAuth from "../hooks/auth"
import { useState } from "react"
import { useEffect } from "react"
import dayjs from "dayjs"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import SearchBar from "../components/ SearchBar"
import HomeStyle from "../style/GlobalStyle"
import { BiDownArrow } from "react-icons/bi";

export default function HomePage() {
    const [cartItems, setCartItems] = useState(0);
    const [sortOptionsVisible, setSortOptionsVisible] = useState(false);
    const { userAuth, login } = useAuth();
    const navigate = useNavigate()

    const products = [
        {
            id: 1,
            image: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/28/NQQ-4379-028/NQQ-4379-028_zoom1.jpg?ts=1689262673&",
            title: "Example Sneaker 1",
            price: 99.99,
        },
        {
            id: 2,
            image: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/28/NQQ-4379-028/NQQ-4379-028_zoom1.jpg?ts=1689262673&",
            title: "Example Sneaker 2",
            price: 99.99,
        },
        {
            id: 3,
            image: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/28/NQQ-4379-028/NQQ-4379-028_zoom1.jpg?ts=1689262673&",
            title: "Example Sneaker 2",
            price: 99.99,
        },
        {
            id: 4,
            image: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/28/NQQ-4379-028/NQQ-4379-028_zoom1.jpg?ts=1689262673&",
            title: "Example Sneaker 2",
            price: 99.99,
        }
    ];

    const toggleSortOptions = () => {
        setSortOptionsVisible((prevState) => !prevState);
    };

    const handleSortOption = (option) => {
        // Implemente a lógica para ordenar os produtos de acordo com a opção selecionada
    };

    return (
        <HomeContainer>
            <HomeStyle />
            <Header>
                <BiExit />

                <CartIcon onClick={() => navigate("/checkout")}>
                    <AiOutlineShoppingCart />
                    <CartCount>{cartItems}</CartCount>
                </CartIcon>

            </Header>
            <TextHome data-test="user-name">
                <p>Olá, {userAuth.userName}</p> <br />
                <span>O que você está procurando hoje?</span>
            </TextHome>

            <SearchBar />
            <ProductsContainerWrapper>

                <ProductsContainer>
                    <SortContainer onClick={toggleSortOptions}>
                        <SortText>Ordenar por preço</SortText>
                        {sortOptionsVisible ? (
                            <AiOutlineUp />
                        ) : (
                            <AiOutlineDown />
                        )}
                        {sortOptionsVisible && (
                            <SortOptions>
                                <SortOption onClick={() => handleSortOption("asc")}>
                                    Preço Crescente
                                </SortOption>
                                <SortOption onClick={() => handleSortOption("desc")}>
                                    Preço Decrescente
                                </SortOption>
                            </SortOptions>
                        )}
                    </SortContainer>


                    <div>
                        {products.map((product) => (
                            <SneakerItem key={product.id}>
                                <SneakerImage src={product.image} alt={product.title} />
                                <SneakerTitle>{product.title}</SneakerTitle>
                                <SneakerPrice>${product.price}</SneakerPrice>
                            </SneakerItem>
                        ))}
                    </div>
                </ProductsContainer>
            </ProductsContainerWrapper>

        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
  
`

const TextHome = styled.div`
    color: #868686;
    text-align: flex-start;
    font-style: normal;
    line-height: normal;
    padding: 15px;
    p{
        font-size: 20px;
        font-weight: 500;
    }
    span{
        font-size: 23px; 
        font-weight: bold;
    }
`
const Header = styled.header`
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
  
`

const CartIcon = styled.div`
  position: relative;
  margin-right: 10px;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px;
  font-size: 12px;
`;


const ProductsContainerWrapper = styled.div`
  margin-top: 10px;
  border-radius: 15px;
  background-color: #f2f2f2;
`;

const ProductsContainer = styled.ul`
    position: relative;
    padding: 10px 0;
    /* background-color: #f2f2f2; */
    border-radius: 20px;

    max-height: 350px;
    overflow-y: auto; 
    scrollbar-width: none;
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    & > div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

  }
`;



const SneakerItem = styled.li`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 150px;
    padding-bottom: 10px;

`
const SneakerImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
`;

const SneakerTitle = styled.p`
    padding: 5px;
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #000;
  text-align: center; 
`;

const SneakerPrice = styled.span`
  margin-top: 5px;
  font-size: 16px;
  text-align: center; 
`;


const SortContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #fff;
  /* border-radius: 10px; */

  width: 50%;
  margin-left: 10px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const SortText = styled.span`
  margin-right: 5px;
`;

const SortArrow = styled(BiDownArrow)`
  font-size: 16px;
`;

const SortOptions = styled.div`
width: 50%;
  position: absolute;
  top: 36px;
  left: 10px;
  background-color: #fff;
  /* border-radius: 10px; */
  padding: 5px;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
`;

const SortOption = styled.div`
  padding: 5px;
  cursor: pointer;
  font-size: 14px;
`;







