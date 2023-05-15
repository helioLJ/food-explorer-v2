![Logo](./src/assets/logo-food-explorer.png)
![Logo](./src/assets/capa-food-explorer.png)

# Food Explorer V2 🍔💻

Food Explorer é um projeto completo de ponta a ponta com um front-end e back-end, desenvolvido usando as tecnologias aprendidas no curso Explorer da Rocketseat. É um aplicativo interativo para um restaurante fictício, onde os usuários podem visualizar pratos, detalhes dos pratos e preços, além de poder favoritar, bem como fazer pedidos e efetuar pagamentos. Enquanto o usuário Admin pode criar, editar e excluir pratos, bem como alterar o status dos pedidos feitos.


## Índice

- [Stack utilizada 🛠️](#stack-utilizada)
- [Funcionalidades 🚀](#funcionalidades)
- [Screenshots 📷](#screenshots)
- [Rodando localmente 💻](#rodando-localmente)
- [Apêndice 📚](#apêndice)
- [Roadmap 🚗](#roadmap)
- [Figma do Projeto 🎨](#figma-do-projeto)
- [Licença 📜](#licença)


## Stack utilizada


**ReactJS, JavaScript e Styled Components**

### Bibliotecas 📦

Phosphor Icons, React Icons, Axios, dayjs, React Input Mask, React QR Code, React Router DOM, React Slick, Slick Carousel e Vite.

## Funcionalidades

### Usuário 👥

- Cadastrar-se
- Fazer Login
- Fazer Logout
- Visualizar pratos com seus preços e detalhes
- Visualizar cada prato de forma detalhada
- Pesquisar pratos por ingredientes
- Incluir pratos em seu pedido
- Favoritar pratos prediletos
- Visualizar pedido com seus pratos incluídos
- Poder remover pratos do pedido e ver o preço total atualizando
- Simular fluxo de pagamento com PIX (Scaneando o QR Code) ou Cartão de Crédito.
- Receber mensagem de pedido enviado após o pagamento.
- Visualizar histórico de pedidos
- Visualizar todos os pratos favoritos

### Admin (Funcionalidades adicionais) 👨‍💼

- Criar Prato
- Editar Prato
- Excluir Prato
- Alterar status de pedidos

## Screenshots

| SignIn      | SignUp     |
| ------------- | ------------- |
| <img alt="SignIn" src="https://i.imgur.com/LjRWRe5.png"> | <img alt="SignUp" src="https://i.imgur.com/IMahAmI.png"> |
| Home      | Home (Admin)     |
| <img alt="Home" src="https://i.imgur.com/53f9wOd.png"> | <img alt="Home (Admin)" src="https://i.imgur.com/xj4WqPu.png"> |
| Adicionar Prato      | Favoritos     |
| <img alt="Adicionar Prato" src="https://i.imgur.com/rJJgUu4.png"> | <img alt="Favoritos" src="https://i.imgur.com/knR8t6I.png"> |
| Pedido      | Histórico de Pedidos     |
| <img alt="Pedido" src="https://i.imgur.com/blSAUfM.png"> | <img alt="Histórico de Pedidos" src="https://i.imgur.com/IBJMxcn.png"> | 



## Rodando localmente


Clone o projeto

```bash
  git clone https://github.com/helioLJ/food-explorer-v2
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Apêndice


![Fluxograma](./src/assets/fluxo-food-explorer.png)


## Roadmap


- Adicionar filtro de preço


## Figma do Projeto


<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZssWYW8RmoogbaNP0kQvEX%2Ffood-explorer-v2-(Community)%3Ftype%3Ddesign%26node-id%3D201%253A1532%26t%3D5blfrwKVVf2PHlPL-1" allowfullscreen></iframe>


## Licença


[MIT](./LICENSE)