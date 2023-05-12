import { UploadSimple } from "@phosphor-icons/react";
import { Container } from "./styles";

export function InputFile({ label, placeholder, handleImage, ...rest }) {

  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <div className="input-wrapper">
        <input
          type="file"
          id={label}
          placeholder={placeholder}
          {...rest}
          onChange={handleImage}
        />
        <div className="input-content">
          <UploadSimple size={32} color="#ffffff" />
          <p>Selecione imagem</p>
        </div>
      </div>
    </Container>
  )
}