# Jota's Financias (Full Stack)

**Jota's Financias** é uma aplicação web full stack para gerenciamento de finanças pessoais. O projeto combina um backend robusto em Java com Spring Boot e um frontend moderno e reativo construído com Next.js, oferecendo uma solução completa e eficiente para o controle financeiro.

## 🚀 Sobre o Projeto

Este projeto é dividido em duas partes principais:

  * **Backend (`jota-s-finance`):** Uma API RESTful construída com **Java e Spring Boot** que gerencia toda a lógica de negócio, incluindo autenticação de usuários, operações de CRUD para transações, metas, orçamentos e contas bancárias.
  * **Frontend (`financias`):** Uma interface de usuário moderna e interativa desenvolvida com **Next.js e React**, que consome a API do backend para fornecer uma experiência de usuário fluida e intuitiva.

### ✨ Funcionalidades

  * **Autenticação Segura com JWT:** O backend utiliza Spring Security para gerar tokens JWT, e o frontend os armazena em cookies para gerenciar a sessão do usuário.
  * **Rotas Protegidas:** O acesso às páginas do dashboard no frontend é protegido por um middleware que verifica a validade do token, com a validação final ocorrendo no backend a cada requisição.
  * **Gestão Financeira Completa:**
      * Cadastro e controle de **Contas Bancárias**.
      * Criação e acompanhamento de **Metas Financeiras**.
      * Definição de **Orçamentos Mensais** por categoria.
      * Registro de **Transações** de entrada e saída.
  * **Validação de Dados:** Validação robusta tanto no frontend com **Zod** quanto no backend com **Jakarta Bean Validation**.
  * **Interface Reativa e Moderna:** Construída com componentes reutilizáveis em React e estilizada com **Tailwind CSS**.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com um ecossistema de tecnologias modernas e robustas:

#### **Frontend (`financias-main`)**

  * **[Next.js](https://nextjs.org/)**: Framework React para renderização no servidor e geração de sites estáticos.
  * **[React](https://react.dev/)**: Biblioteca para construir interfaces de usuário.
  * **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
  * **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first para estilização rápida e responsiva.
  * **[Zod](https://zod.dev/)**: Biblioteca para validação de esquemas e tipos de dados no cliente.

#### **Backend (`jota-s-finance`)**

  * **[Java 21](https://www.oracle.com/java/)**: Linguagem de programação principal do backend.
  * **[Spring Boot 3](https://spring.io/projects/spring-boot)**: Framework para criar aplicações Java standalone e baseadas em microserviços.
  * **[Spring Security](https://spring.io/projects/spring-security)**: Para autenticação e controle de acesso.
  * **[Spring Data JPA](https://spring.io/projects/spring-data-jpa)**: Para persistência de dados em um banco relacional.
  * **[PostgreSQL](https://www.postgresql.org/)**: Banco de dados relacional utilizado no projeto.
  * **[Flyway](https://flywaydb.org/)**: Ferramenta para versionamento e migração de banco de dados.
  * **[Docker](https://www.docker.com/)**: Para containerização da aplicação e do banco de dados, facilitando a configuração do ambiente.

## ⚙️ Começando

Siga as instruções abaixo para configurar e executar a aplicação completa em seu ambiente de desenvolvimento.

### Pré-requisitos

  * **Node.js** (versão 18.18.0 ou superior)
  * **JDK 21** ou superior
  * **Maven**
  * **Docker** e **Docker Compose**

### 1\. Configurando e Executando o Backend

O backend foi projetado para ser executado facilmente com Docker.

1.  **Navegue até a pasta do backend:**

    ```bash
    cd jota-s-finance/jota-s-finance-4a98dff0c1068eec203f72f83a09a91f624ccc94
    ```

2.  **Crie o arquivo de variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do diretório do backend e adicione as seguintes variáveis (ajuste os valores se necessário):

    ```env
    DB_USER=admin
    DB_PASSWORD=admin
    DB_NAME=finance
    app_jwt_secret=sua-chave-secreta-para-jwt
    ```

    > **Importante:** A chave `app_jwt_secret` será usada tanto pelo backend para gerar os tokens quanto pelo frontend para validá-los.

3.  **Inicie os containers com Docker Compose:**
    Este comando irá construir a imagem da aplicação Java e iniciar os containers do backend e do banco de dados PostgreSQL.

    ```bash
    docker-compose up --build
    ```

    O backend estará disponível em `http://localhost:8080`.

### 2\. Configurando e Executando o Frontend

1.  **Navegue até a pasta do frontend em um novo terminal:**

    ```bash
    cd financias/financias-main
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente do Frontend:**
    Crie um arquivo `.env.local` na raiz do diretório do frontend e adicione as seguintes variáveis:

    ```env
    # URL da sua API de backend
    BACKEND_API_URL=http://localhost:8080

    # Segredo para verificação do token JWT (deve ser o mesmo do .env do backend)
    JWT_SECRET=sua-chave-secreta-para-jwt
    ```

    > **Nota:** A `BACKEND_API_URL` é essencial para que o frontend possa se comunicar com o servidor. A `JWT_SECRET` é usada pelo middleware do Next.js para validar o token do cookie.

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    Abra **[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)** no seu navegador para ver a aplicação em funcionamento.

## 📄 Licença

Este projeto está licenciado sob a Licença Apache 2.0. Veja o arquivo [LICENSE](https://www.google.com/search?q=joaovictor-jpg/jota-s-finance/jota-s-finance-4a98dff0c1068eec203f72f83a09a91f624ccc94/LICENSE) para mais detalhes.