import { Container } from "./styles"

export function Button({ title, icon: Icon, price = null, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon size={22} color="#FFFFFF" />}
      {loading ? 'Carregando...' : title}
      {price && ` ∙ ${price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}
    </Container>
  )
}