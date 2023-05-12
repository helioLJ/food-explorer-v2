import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoFoodExplorer from "../../assets/food-explorer-sign.png"

import { api } from "../../services/api"

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

import { Container, FormContainer, LogoContainer } from "./styles";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
      }
    }
  }

  return (
    <Container>
      <LogoContainer>
        <img src={LogoFoodExplorer} alt="Logo da Food Explorer" />
      </LogoContainer>

      <FormContainer>
        <h1>Crie sua conta</h1>

        <InputText
          type="text"
          label="Seu Nome"
          placeholder="Exemplo: Maria da Silva"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

        <Button onClick={handleSignUp} title="Criar conta" />

        <Link to="/">Já tenho uma conta</Link>
      </FormContainer>
    </Container>
  )
}