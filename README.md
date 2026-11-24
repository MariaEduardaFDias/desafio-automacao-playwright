🚀 Projeto de Automação de Testes - SauceDemo
Automação de testes E2E utilizando Playwright, TypeScript e o padrão Page Object Model (POM).

📋 Descrição
Este projeto foi desenvolvido para validar fluxos críticos da aplicação SauceDemo.

Foram implementados cenários automatizados para:

 - Login de usuário
 - Adição de produtos ao carrinho
 - Validação do checkout
 - Verificação do resumo da compra

🛠️ Tecnologias Utilizadas:

 - Node.js
 - TypeScript
 - Playwright
 - Page Object Model (POM)
 - Git
 - GitHub
   
📁 Estrutura do Projeto
automation/
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

✅ Casos de Teste Implementados

🔐 Login
Login com credenciais válidas
Redirecionamento para página de produtos
🛒 Carrinho
Adicionar produto ao carrinho
Validar quantidade de itens

📦 Checkout

Preencher informações do cliente
Validar resumo do pedido
Finalizar compra com sucesso

🚀 Como Executar os Testes

1️⃣ Clonar o projeto
git clone https://github.com/MariaEduardaFDias/desafio-automacao-playwright.git
2️⃣ Entrar na pasta
cd desafio-automacao-playwright
3️⃣ Instalar dependências
npm install
4️⃣ Instalar navegadores do Playwright
npx playwright install
5️⃣ Executar os testes
npx playwright test
📊 Resultado dos Testes
✅ Login funcionando

✅ Carrinho funcionando

✅ Checkout funcionando

✅ Todos os testes executando com sucesso

📸 Evidências
As evidências dos testes estão disponíveis na pasta:

evidencias/
Login
Login

Carrinho
Carrinho

Checkout
Checkout

👩‍💻 Autora
Maria Eduarda Dias

GitHub: 👉 https://github.com/MariaEduardaFDias
