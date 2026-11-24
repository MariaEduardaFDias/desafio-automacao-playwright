# Desafio de Automação de Testes – SauceDemo

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Playwright**, **TypeScript** e o padrão de arquitetura **Page Object Model (POM)**, utilizando a aplicação [SauceDemo](https://www.saucedemo.com/).

## Objetivo do Projeto

Desenvolver uma estrutura básica de automação de testes para validar os principais fluxos da aplicação, contemplando autenticação, gerenciamento do carrinho e validação das informações do checkout.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Playwright
- Page Object Model (POM)
- Git e GitHub

## Estrutura do Projeto

```text
desafio-automacao-playwright/
│
├── evidencias/
│   ├── login-sucesso.png
│   ├── produto-carrinho.png
│   └── checkout-resumo.png
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── package.json
├── playwright.config.ts
└── README.md
```

## Cenários Automatizados

### 1. Login com sucesso

- Acessar a aplicação SauceDemo.
- Informar credenciais válidas.
- Validar o redirecionamento para a página de produtos.
- Verificar a apresentação do título e dos produtos disponíveis.

### 2. Adição de produto ao carrinho

- Realizar login na aplicação.
- Selecionar o produto Sauce Labs Backpack.
- Capturar o preço do produto antes da inclusão.
- Adicionar o produto ao carrinho.
- Validar a quantidade de itens no indicador do carrinho.
- Acessar o carrinho.
- Verificar o nome e o preço do produto adicionado.

### 3. Validação das informações no checkout

- Realizar login na aplicação.
- Adicionar o produto Sauce Labs Backpack ao carrinho.
- Prosseguir para o checkout.
- Preencher as informações do cliente.
- Validar o redirecionamento para a tela de resumo do pedido.
- Verificar o nome e o preço do produto.
- Validar as informações de pagamento e entrega.
- Conferir o subtotal, a taxa e o valor total.
- Verificar se o valor total corresponde à soma do subtotal com a taxa.

## Aplicação do Page Object Model (POM)

O projeto utiliza o padrão Page Object Model para separar os elementos e as ações de cada página da aplicação da lógica dos testes.

Cada classe possui responsabilidades específicas:

- **LoginPage:** elementos e ações relacionados à autenticação.
- **InventoryPage:** interação com os produtos e o carrinho.
- **CartPage:** validações e ações relacionadas ao carrinho.
- **CheckoutPage:** preenchimento de informações e validações do checkout.

Essa organização facilita a manutenção, a reutilização de métodos e a legibilidade dos testes automatizados.

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/MariaEduardaFDias/desafio-automacao-playwright.git
```

### 2. Acessar a pasta do projeto

```bash
cd desafio-automacao-playwright
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Instalar os navegadores do Playwright

```bash
npx playwright install
```

### 5. Executar todos os testes

```bash
npx playwright test
```

### 6. Visualizar o relatório de execução

```bash
npx playwright show-report
```

## Evidências dos Testes

As evidências das execuções estão organizadas na pasta `evidencias/`, contendo registros dos seguintes cenários:

- **Login:** evidência da autenticação realizada com sucesso.
- **Carrinho:** evidência da inclusão e validação do produto.
- **Checkout:** evidência da validação do resumo do pedido.

## Considerações Finais

O projeto foi desenvolvido com o objetivo de aplicar conceitos de automação de testes E2E, organização de código utilizando Page Object Model e validação de funcionalidades de uma aplicação web.

A implementação contempla os fluxos de login, adição de produto ao carrinho e validação das informações apresentadas no checkout.

---

**Autora:** Maria Eduarda Dias

**GitHub:** [MariaEduardaFDias](https://github.com/MariaEduardaFDias)
