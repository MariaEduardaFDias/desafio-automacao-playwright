import { expect, test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test('deve adicionar um produto ao carrinho', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const productName = 'Sauce Labs Backpack';

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const productPrice = await inventoryPage.getProductPrice(productName);
  await inventoryPage.addProductToCart(productName);

  await expect(inventoryPage.cartBadge).toHaveText('1');

  await inventoryPage.openCart();

  await expect(page).toHaveURL(/\/cart\.html$/);
  await expect(cartPage.title).toHaveText('Your Cart');
  await expect(cartPage.getItemByName(productName)).toBeVisible();
  await expect(cartPage.getItemPrice(productName)).toHaveText(productPrice);

  await page.screenshot({ path: 'evidencias/produto-carrinho.png', fullPage: true });
});
