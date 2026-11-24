🚀 Projeto de Automação de Testes - SauceDemo com Playwright

📖  Objetivo

Projeto desenvolvido para um processo seletivo de QA com o objetivo de estruturar uma automação básica de testes E2E utilizando **Playwright**, **TypeScript** e o padrão **Page Object Model (POM)** sobre a aplicação [SauceDemo](https://www.saucedemo.com/).

🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Playwright
- Page Object Model (POM)
- Git e Github

A suíte cobre os seguintes fluxos:

- Login com sucesso
- Adição de um produto ao carrinho
- Validação das informações no checkout

As evidências de cada cenário são capturadas automaticamente e salvas dentro do projeto.

## Estrutura do projeto

```text
├── evidencias/
│   ├── login-sucesso.png
│   ├── produto-carrinho.png
│   └── checkout-resumo.png
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
├── package.json
└── playwright.config.ts
```

### O que cada parte faz

- **`pages/`**: concentra as classes de Page Object, separando seletores e ações de interface da lógica de validação dos testes.
  - `LoginPage.ts`: abre a página inicial e realiza o preenchimento de usuário, senha e envio do formulário de login.
  - `InventoryPage.ts`: localiza produtos no catálogo pelo nome, obtém o preço exibido, adiciona itens ao carrinho e abre a página do carrinho.
  - `CartPage.ts`: consulta os itens e preços presentes no carrinho e aciona o botão para avançar ao checkout.
  - `CheckoutPage.ts`: preenche os dados do comprador e fornece acesso às informações exibidas no resumo do pedido (item, pagamento, entrega, subtotal, imposto e total).
- **`tests/`**: contém os arquivos de teste responsáveis pelas asserções de cada fluxo.
  - `login.spec.ts`: valida o login com o usuário padrão e o redirecionamento para a listagem de produtos.
  - `cart.spec.ts`: valida a adição de um produto ao carrinho, a atualização do contador e a consistência de nome e preço no carrinho.
  - `checkout.spec.ts`: valida no resumo do checkout o produto selecionado, preço, informações de pagamento/entrega e o cálculo de subtotal + imposto = total.
- **`evidencias/`**: pasta onde são salvos os screenshots capturados ao final de cada teste (`login-sucesso.png`, `produto-carrinho.png` e `checkout-resumo.png`).
- **`playwright.config.ts`**: define a URL base da aplicação, o atributo `data-test` como identificador de testes, o navegador Chromium e o formato do relatório no terminal.
- **`package.json`**: declara as dependências do projeto (`@playwright/test`) e o script de execução (`npm test`).

## Instalação e execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior (o `npm` já é instalado junto com o Node).

### Passo a passo

1. Abra o terminal na pasta raiz do projeto:

```bash
cd automation
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Instale o navegador Chromium utilizado pelo Playwright:

```bash
npx playwright install chromium
```

4. Execute os testes:

```bash
npm test
```

Ao concluir a execução, o resultado é exibido no terminal e as capturas de tela ficam registradas na pasta `evidencias/`.
