import { useState } from "react"

import { Container, FormContainer, LogoContainer } from "./styles";

import LogoFoodExplorer from "../../assets/food-explorer-sign.png"
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <LogoContainer>
        <img src={LogoFoodExplorer} alt="Logo da Food Explorer" />
      </LogoContainer>

      <FormContainer>
        <h1>Faça Login</h1>

        <InputText
          type="email"
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          type="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleSignIn} title="Entrar" />

        <Link to="/register">Criar uma conta</Link>
      </FormContainer>
    </Container>
  )
}