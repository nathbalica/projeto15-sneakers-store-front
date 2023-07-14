import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import useAuth from "../hooks/auth"
import apis from "../services/apis"
import { useNavigate } from "react-router-dom"
import { useState } from "react"



export default function SignInPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const { login } = useAuth();

  const navigate = useNavigate()


  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function loginUser(e) {
    e.preventDefault()
    
    apis.login({ ...form })
      .then(res => {
        login(res.data)
        navigate('/home')
      })
      .catch(() => {
        alert('Erro, tente novamente');
      })
  }

  return (
    <SingInContainer>
      <form onSubmit={loginUser}>
        <MyWalletLogo />
        <input
        data-test="email"
          placeholder="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleForm}
          autoComplete="username"
        />
        <input
        data-test="password"
          placeholder="Senha"
          minLength={3}
          type="password"
          autoComplete="new-password"
          name="password"
          value={form.password}
          onChange={handleForm}
          
        />
        <button className="auth-button" type="submit" data-test="sign-in-submit">Entrar</button>
      </form>

      <Link to="/signup">
        Primeira vez? <GreenText>Cadastre-se!</GreenText>
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #0ACF83, #000000);
  padding: 25px;
  

`

const GreenText = styled.span`
  color: #0ACF83;
`;
