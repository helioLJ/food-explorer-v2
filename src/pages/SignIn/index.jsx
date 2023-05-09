import { Container, FormContainer, LogoContainer } from "./styles";

import LogoFoodExplorer from "../../assets/food-explorer-sign.png"
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <LogoContainer>
        <img src={LogoFoodExplorer} alt="Logo da Food Explorer" />
      </LogoContainer>
      
      <FormContainer>
        <h1>Faça Login</h1>

        <InputText type="email" label="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <InputText type="password" label="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Entrar" />

        <a href="#">Criar uma conta</a>
      </FormContainer>
    </Container>
  )
}