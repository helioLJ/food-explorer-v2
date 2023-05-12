import { Plus, X } from '@phosphor-icons/react'
import { Container } from "./styles";

export function Ingredient({ isNew, value, onClick, ...rest }) {
  return (
    <Container
      isNew={isNew}
    >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        placeholder="Adicionar"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onClick();
          }
        }}      
      />
      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <Plus size={17} color="#7C7C8A" /> : <X size={17} color="#FFFFFF" />}
      </button>
    </Container>
  )
}