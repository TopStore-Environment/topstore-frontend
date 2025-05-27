
# 📱 TopStore

**TopStore** é uma aplicação web desenvolvida para a compra e venda de **iPhones usados**. O sistema foi idealizado tanto para o dono da loja quanto para os clientes, oferecendo funcionalidades que facilitam o cadastro de novos produtos e permitem aos usuários acessarem recursos típicos dos maiores e-commerces do mundo.

O principal objetivo da TopStore é simplificar o processo de troca e compra de celulares usados, especialmente **iPhones** que ainda se encontram em boas condições, atuando em um mercado dinâmico e em constante movimento.


## 🚀 Tecnologias Utilizadas no Front-end

O front-end da aplicação foi desenvolvido utilizando as seguintes tecnologias, cada uma contribuindo de forma essencial para a qualidade e eficiência do sistema:

- **React com TypeScript**: para construção de interfaces modernas e com maior segurança no desenvolvimento.
- **React Hook Form**: para simplificar o gerenciamento e a validação de formulários.
- **React Query**: para lidar com requisições assíncronas e gerenciamento de cache de dados.
- **Tailwind CSS**: para estilização rápida, responsiva e com classes utilitárias.


## 🖥️ Back-end do Projeto

O back-end do projeto foi desenvolvido em **Python** e está devidamente publicado em produção, oferecendo a API necessária para o funcionamento da aplicação.

**Obs.:** Não é necessário rodar o back-end localmente para executar o front-end.

## ⚠️ Pré-requisitos

Antes de iniciar a instalação e execução da aplicação, é necessário ter o **Node.js** instalado em sua máquina.

O Node.js é uma dependência essencial para o funcionamento do sistema, pois permite a execução do ambiente de desenvolvimento e o gerenciamento das dependências via **Yarn**.

## 🛠️ Como rodar a aplicação localmente

### 1. Clonar o repositório

> Abra o terminal no diretório que você deseja e execute o seguinte comando:

```bash
git clone https://github.com/TopStore-Environment/topstore-frontend.git
```

---

### 2. Instalar o Yarn globalmente

Caso ainda não tenha o Yarn instalado, execute este comando no terminal:

```bash
npm install -g yarn
```

---

### 3. Instalar as dependências

Agora, na raiz do projeto, rode o comando a seguir para instalar todas as dependências da aplicação:

```bash
yarn
```

---

### 4. Configurar variáveis de ambiente

Antes de subirmos o sistema, crie um arquivo `.env` seguindo como exemplo o `.env.example`, na **raiz do projeto** e adicione esta linha:

```env
VITE_API_URL = https://topstore-backend.fly.dev
```

> Essa variável contém a URL base do back-end da aplicação, permitindo assim sua conexão direta com o front-end.

---

### 5. Iniciar a aplicação

Por fim, execute:

```bash
yarn dev
```

A aplicação estará acessível em:

```
http://localhost:5173
```

---

## ✅ Pronto!

Agora você já pode explorar e utilizar todas as funcionalidades da **TopStore** localmente.
