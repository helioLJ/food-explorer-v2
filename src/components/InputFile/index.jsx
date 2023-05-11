import { UploadSimple } from "@phosphor-icons/react";
import { Container } from "./styles";
import { useState } from "react";

export function InputFile({ label, placeholder, ...rest }) {
  const [image, setImage] = useState()

  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <div className="input-wrapper">
        <input
          type="file"
          id={label}
          placeholder={placeholder}
          {...rest}
          value={image}
          onChange={(e) => {
            setImage(e.target.value)
            console.log(e.target.value);
          }}
        />
        <div className="input-content">
        <UploadSimple size={32} color="#ffffff" />
        <p>Selecione imagem</p>
        </div>
      </div>
    </Container>
  )
}