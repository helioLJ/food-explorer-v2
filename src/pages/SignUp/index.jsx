import { Container, FormContainer, LogoContainer } from "./styles";

import LogoFoodExplorer from "../../assets/food-explorer-sign.png"
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <LogoContainer>
        <img src={LogoFoodExplorer} alt="Logo da Food Explorer" />
      </LogoContainer>
      
      <FormContainer>
        <h1>Crie sua conta</h1>

        <InputText type="text" label="Seu Nome" placeholder="Exemplo: Maria da Silva" />
        <InputText type="email" label="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <InputText type="password" label="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Criar conta" />

        <a href="#">Já tenho uma conta</a>
      </FormContainer>
    </Container>
  )
}