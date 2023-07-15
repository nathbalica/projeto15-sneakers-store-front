import styled from "styled-components"
import CheckoutItem from "../components/CheckoutItem"
import { useState } from "react"

export default function CheckoutPage() {

    const [finish, setFinish] = useState(false);

    return (
        <>
            <SCHeader>
                <ion-icon style={{width:"30px", height:"30px", marginLeft: "15px"}} name="chevron-back-outline"></ion-icon>
                <p>Checkout</p>
                <ion-icon style={{width:"30px", height:"26px", marginRight: "15px"}} name="home-outline"></ion-icon>
            </SCHeader>
            {!finish && (
            <>
                <SCInputAdress> <input placeholder='Endereço' /></SCInputAdress>
                <CheckoutItem />
                <CheckoutItem />
                <CheckoutItem />
                <SCTotal>
                    <p>Total:</p>
                    <p>R$ 500,00</p>
                </SCTotal>
                <SCContainerButton>
                    <button onClick={() => setFinish(true)}> Concluir Compra </button>
                </SCContainerButton>
            </>)}
            {finish && (
                <>
                <SCFinalMessage> Compra concluída </SCFinalMessage>
                <SCCheck>
                    <ion-icon style={{color:"#0ACF83", width: "100%", height:"90px"}} name="checkmark-circle-sharp"></ion-icon>
                </SCCheck>
                <SCInfos>
                    <p>Nome: <span>Gabigol</span></p>
                    <p>Endereço de entrega: <span>Av. Borges de Medeiros, 997</span></p>
                    <p>Total: <span>R$ 500,00</span></p>
                </SCInfos>
                <SCContainerButton>
                    <button> Continuar comprando </button>
                </SCContainerButton>
            </>)}
        </>
    )
}

const SCHeader = styled.div`
    width:100%;
    height:55px;
    margin-top: 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    p {
        font-family: 'Montserrat';
        font-weight:600;
        font-size:18px;
    }
`

const SCInputAdress = styled.div`
    width:100%;
    height:38px;
    display: flex;
    align-items:center;
    justify-content:center;
    margin: 20px 0 50px 0;
    input {
        height:100%;
        width:300px;
        border: 1px solid #DBDBDB;
        border-radius: 10px;
        padding-left: 20px;
        &&placeholder{
            font-family: 'Montserrat'
        }
    }
`

const SCTotal = styled.div`
    width:300px;
    height:35px;
    margin: 50px auto 25px auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    p{
        font-family: 'Montserrat';
        font-weight:700;
        font-size:18px;
    }
`

const SCContainerButton = styled.div`
    width:280px;
    height: auto;
    margin: 0 auto;
    button{
        width:100%;
        height:55px;
        background-color: #0ACF83;
        border:1px solid #0ACF83;
        border-radius:7px;
        font-family: 'Montserrat';
        font-size:18px;
        font-weight:700;
        color: #FFFFFF;
    }
`

const SCFinalMessage = styled.p`
    width:240px;
    height:100px;
    margin: 60px auto 10px auto;
    font-family: 'Montserrat';
    font-size: 34px;
    font-weight:300;
    text-align:center;
    line-height: 42px;
`

const SCCheck = styled.div`
    width:90px;
    height:auto;
    margin:0 auto;
`

const SCInfos = styled.div`
    width:320px;
    height:auto;
    margin: 30px auto 40px auto;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
    gap:20px;
    p{
        font-family: 'Montserrat';
        font-weight:400;
        font-size:17px;
        line-height:22px;
    }
    span{
        font-weight:500;
    }
`