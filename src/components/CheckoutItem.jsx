import styled from "styled-components"

export default function CheckoutItem(){
    return (
        <SCItemBox>
            <img src="https://imgnike-a.akamaihd.net/768x768/024226ID.jpg" alt="Lebron 20" />
            <div>
                <SCItemName>Nike Air Max</SCItemName>
                <SCItemPrice>R$ 350,00</SCItemPrice>
            </div>
        </SCItemBox>
    )
}

const SCItemBox = styled.div`
    width:300px;
    height:80px;
    display:flex;
    align-items:center;
    gap:15px;
    margin: 0 auto 20px auto;
    img{
        width:85px;
        height:100%;
        object-fit:cover;
        border-radius:15px;
    }
    div{
        height: 100%;
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        p{
            font-family:'Montserrat';
        }
    }
`

const SCItemName = styled.p`
    font-weight:400;
`

const SCItemPrice = styled.p`
    font-weight:500;
`