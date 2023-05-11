import { Container } from "./styles";

export function InputSelect({ label, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        {...rest}
      >
        <option value="exemplo">exemplo</option>
        <option value="exemplo">exemplo</option>
        <option value="exemplo">exemplo</option>
        <option value="exemplo">exemplo</option>
      </select>
    </Container>
  )
}