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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Camera from "../../assets/camera.png"
import { api } from "../../services/api";

export function EditDish() {
  const params = useParams()
  const navigate = useNavigate()

  const [newImage, setNewImage] = useState(Camera)
  const [newImageFile, setNewImageFile] = useState(null)
  const [newName, setNewName] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [newIngredients, setNewIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [newPrice, setNewPrice] = useState(null)
  const [newDescription, setNewDescription] = useState("")

  const [dishId, setDishId] = useState(null)

  function isFormValid() {
    return newName && newDescription && newImage !== Camera && newPrice && newCategory && newIngredients.length > 0;
  }

  function handleImage(e) {
    const file = e.target.files[0]
    setNewImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setNewImage(imagePreview)
  }

  function handleAddIngredient() {
    if (newIngredient.trim() === "") {
      return alert("Preencha o campo do ingrediente")
    }
    setNewIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setNewIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleDeleteDish() {
    const confirmation = window.confirm("Tem certeza que deseja excluir permanentemente este prato?")
    if (confirmation) {
      try {
        const deletedDish = await api.delete(`/dishes/${dishId}`)
        alert(deletedDish.data.message)
        navigate("/")
      } catch (error) {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível executar esta ação.");
        }
      }
    }
  }

  async function handleUpdateDish() {
    if (newCategory === "example" || newCategory === "") return alert("Selecione uma Categoria")

    try {
      const updatedDish = await api.put(`/dishes/${dishId}`, {
        name: newName,
        description: newDescription,

        price: newPrice,
        category: newCategory,
        ingredients: newIngredients
      })

      if (newImageFile == false) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("image_url", newImageFile)
        await api.patch(`/dishes/picture/${dishId}`, fileUploadForm)
      }

      alert(updatedDish.data.message)
      navigate("/")
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível executar esta ação.");
      }
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`dishes/${params.id}`)

      setNewImage(`${api.defaults.baseURL}/files/${response.data.image_url}`)
      setNewName(response.data.name)
      setNewCategory(response.data.category)
      setNewIngredients(response.data.ingredients)
      setNewPrice(response.data.price)
      setNewDescription(response.data.description)
      setDishId(response.data.id)
    }

    fetchDish()
  }, [])

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
              <img src={newImage} />
            </div>

            <div className="rowOne">
              <InputFile handleImage={handleImage} label="Imagem do prato" />
              <InputText value={newName} onChange={e => setNewName(e.target.value)} type="text" label="Nome" placeholder="Ex: Salada Ceasar" />
              <InputSelect value={newCategory} onChange={e => setNewCategory(e.target.value)} label="Categoria" />
            </div>

            <div className="rowTwo">
              <IngredientsField label="Ingredientes">
                {newIngredients.map((ingredient, index) => (
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

              <InputText value={newPrice} onChange={e => setNewPrice(e.target.value)} type="number" label="Preço" placeholder="R$ 00,00" />
            </div>

            <TextArea value={newDescription} onChange={e => setNewDescription(e.target.value)} label="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

            <div className="buttons">
              <Button onClick={handleDeleteDish} title="Excluir prato" />
              <Button
                onClick={handleUpdateDish}
                title="Salvar alterações"
                disabled={!isFormValid()}
              />
            </div>
          </form>
        </section>
      </Content>

      <Footer />
    </Container>
  )
}