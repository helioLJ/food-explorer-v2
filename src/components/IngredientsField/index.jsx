import { Container } from "./styles";

export function IngredientsField({ label, children }) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <div className="input-wrapper">
        {children}
      </div>
    </Container>
  )
}