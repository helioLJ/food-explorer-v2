import { useState } from "react";

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

import Camera from "../../assets/camera.png"
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function NewDish() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const [image, setImage] = useState(Camera)
  const [imageFile, setImageFile] = useState(null)

  const [price, setPrice] = useState(null)
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const navigate = useNavigate()

  function isFormValid() {
    return name && description && image !== Camera && price && category && ingredients.length > 0;
  }

  function handleImage(e) {
    const file = e.target.files[0]
    setImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
  }

  function handleAddIngredient() {
    if (newIngredient.trim() === "") {
      return alert("Preencha o campo do ingrediente")
    }
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleCreate() {
    if(category === "example" || category === "") return alert("Selecione uma Categoria")
    if(image == Camera) return alert("Selecione uma imagem para o prato!")

    try {
      const createdDish = await api.post("/dishes", {
        name: name,
        description: description,
        image_url: "Test",
        price: price,
        category: category,
        ingredients: ingredients
      })

      const fileUploadForm = new FormData()
      fileUploadForm.append("image_url", imageFile)

      await api.patch(`/dishes/picture/${createdDish.data.id}`, fileUploadForm)

      alert(createdDish.data.message)
      navigate("/")
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível executar esta ação.");
      }
    }
  }

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <ButtonText onClick={() => navigate(-1)} title="voltar" />

        <section>
          <h1>Adicionar prato</h1>

          <form>
            <div className="image-container">
              <img src={image} />
            </div>

            <div className="rowOne">
              <InputFile handleImage={handleImage} label="Imagem do prato" />
              <InputText value={name} onChange={e => setName(e.target.value)} type="text" label="Nome" placeholder="Ex: Salada Ceasar" />
              <InputSelect value={category} onChange={e => setCategory(e.target.value)} label="Categoria" />
            </div>

            <div className="rowTwo">
              <IngredientsField label="Ingredientes">
                {ingredients.map((ingredient, index) => (
                  <Ingredient
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <Ingredient
                  isNew
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </IngredientsField>
              <InputText value={price} onChange={e => setPrice(e.target.value)} type="number" label="Preço" placeholder="R$ 00,00" />
            </div>

            <TextArea value={description} onChange={e => setDescription(e.target.value)} label="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

            <Button
            onClick={handleCreate}
            title="Adicionar Prato"
            disabled={!isFormValid()}
            />
          </form>
        </section>
      </Content>

      <Footer />
    </Container>
  )
}