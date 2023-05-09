import { Container } from "./styles";

export function InputText({ label, placeholder, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        placeholder={placeholder}
      />
    </Container>
  )
}