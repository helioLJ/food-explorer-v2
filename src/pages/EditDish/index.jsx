import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";

import { Container, Content } from "./styles";

import { InputText } from "../../components/InputText";
import { InputFile } from "../../components/InputFile";
import { InputSelect } from "../../components/InputSelect";
import { TextArea } from "../../components/TextArea";
import { IngredientsField } from "../../components/IngredientsField";
import { Ingredient } from "../../components/Ingredient";

export function EditDish() {
  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <ButtonText title="voltar" />

        <section>
          <h1>Adicionar prato</h1>

          <form>
            <div className="rowOne">
              <InputFile label="Imagem do prato" />
              <InputText type="text" label="Nome" placeholder="Ex: Salada Ceasar" />
              <InputSelect label="Categoria" />
            </div>

            <div className="rowTwo">
              <IngredientsField label="Ingredientes">
                <Ingredient value="Alface" />
                <Ingredient isNew />
                <Ingredient value="Alface" />
                <Ingredient isNew />
                <Ingredient value="Alface" />
                <Ingredient isNew />
                <Ingredient value="Alface" />
                <Ingredient isNew />
                <Ingredient value="Alface" />
                <Ingredient isNew />
              </IngredientsField>

              <InputText type="number" label="Preço" placeholder="R$ 00,00" />
            </div>

            <TextArea label="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

            <div className="buttons">
              <Button title="Excluir prato" />
              <Button title="Salvar alterações" />
            </div>
          </form>
        </section>
      </Content>

      <Footer />
    </Container>
  )
}