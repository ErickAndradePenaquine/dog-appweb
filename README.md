# 🐕 Dog Manager

ESQUELETO:
                                                src/
                                                ├── components/
                                                │ └── PrivateRoute.js
                                                ├── services/
                                                │ └── auth.js
                                                ├── views/
                                                │ ├── DogList.js
                                                │ ├── DogCreate.js
                                                │ ├── DogUpdate.js
                                                │ └── Login.js
                                                ├── api.js
                                                └── App.js

## 📋 Sobre o Projeto
O Dog Manager é uma aplicação web desenvolvida em React que permite o gerenciamento de informações sobre cães. A aplicação utiliza autenticação JWT para proteger as rotas e garantir que apenas usuários autenticados possam acessar e manipular os dados.

## 🚀 Tecnologias Utilizadas
- **Frontend:**
  - React.js
  - React Router DOM
  - Axios
  - React Hook Form

- **Backend:**
  - Laravel (API REST)
  - JWT (autenticação)

## 📁 Estrutura do Projeto

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## ⚙️ Funcionalidades

### 🔐 Autenticação
- **Login:** Acesso com email e senha
- **Logout:** Encerramento de sessão
- **Proteção de Rotas:** Todas as rotas de dogs são protegidas
- **Credenciais de Teste:** 
  * Email: test@example.com
  * Senha: password123

### 🐕 Gerenciamento de Dogs
O sistema permite três operações principais:

1. **Listagem**
   - Rota: /dogs
   - Método: GET
   - Endpoint: /api/dogs

2. **Criação**
   - Rota: /dogs/create
   - Método: POST
   - Endpoint: /api/dogs
   - Campos: nome, raça, idade

3. **Atualização**
   - Rota: /dogs/:id/edit
   - Método: PUT
   - Endpoint: /api/dogs/:id
   - Campos: nome, raça, idade

## 🔄 Fluxo de Autenticação

1. **Login**
   - Acesso à página de login
   - Inserção de credenciais
   - Validação pelo sistema
   - Recebimento do token JWT
   - Armazenamento do token

2. **Acesso Protegido**
   - Verificação do token
   - Acesso permitido se válido
   - Redirecionamento para login se inválido

3. **Requisições**
   - Envio automático do token
   - Formato: Authorization: Bearer {token}

4. **Logout**
   - Remoção do token
   - Redirecionamento para login

## ⚠️ Tratamento de Erros

O sistema trata três tipos principais de erros:

1. **401 (Unauthorized)**
   - Token inválido ou ausente
   - Redirecionamento para login
   - Limpeza de dados de autenticação

2. **422 (Unprocessable Entity)**
   - Dados inválidos
   - Exibição de mensagem no formulário

3. **500 (Internal Server Error)**
   - Erro no servidor
   - Exibição de mensagem genérica

## 🔄 Segurança

Medidas de segurança implementadas:
- Tokens JWT com expiração de 60 minutos
- Validação de autenticação em rotas protegidas
- Validação de dados no backend
- Configuração CORS para origens específicas
- Armazenamento seguro de tokens

## 🚀 Como Executar

1. **Instalação**
```bash
npm install
```

2. **Iniciar Servidor**
```bash
npm start
```

3. **Acesso**
- URL: http://localhost:3000
- Use as credenciais de teste fornecidas

## 📋 Requisitos

Para executar o projeto é necessário:
- Node.js (versão 14+)
- NPM (versão 6+)
- Backend Laravel rodando
- Navegador moderno

## 📝 Considerações Finais

O Dog Manager é uma aplicação completa que demonstra:
- Autenticação JWT
- Proteção de rotas
- CRUD de dados
- Tratamento de erros
- Interface responsiva
- Boas práticas de desenvolvimento

## 👥 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✒️ Autores

* **Seu Nome** - *Desenvolvimento* - [seu-usuario](https://github.com/seu-usuario)

## 📞 Suporte

Para suporte, envie um email para seu-email@exemplo.com ou abra uma issue no projeto.
