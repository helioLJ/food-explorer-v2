import { Container } from "./styles";

export function TextArea({ label, placeholder, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <textarea
        id={label}
        placeholder={placeholder}
        {...rest}
      >
      </textarea>
    </Container>
  )
}