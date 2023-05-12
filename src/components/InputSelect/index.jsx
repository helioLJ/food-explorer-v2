import { Container } from "./styles";

export function InputSelect({ label, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        {...rest}
      >
        <option value="example">Categorias</option>
        <option value="Refeições">Refeições</option>
        <option value="Sobremesas">Sobremesas</option>
        <option value="Bebidas">Bebidas</option>
      </select>
    </Container>
  )
}