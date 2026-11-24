import { expect, test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test('deve validar as informações no checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const productName = 'Sauce Labs Backpack';

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const productPrice = await inventoryPage.getProductPrice(productName);
  await inventoryPage.addProductToCart(productName);
  await inventoryPage.openCart();
  await cartPage.proceedToCheckout();

  await expect(page).toHaveURL(/\/checkout-step-one\.html$/);
  await checkoutPage.fillCustomerInfo('Lucas', 'Ferreira', '01310-100');

  await expect(page).toHaveURL(/\/checkout-step-two\.html$/);
  await expect(checkoutPage.title).toHaveText('Checkout: Overview');

  const summaryItem = checkoutPage.getSummaryItem(productName);
  await expect(summaryItem).toBeVisible();
  await expect(summaryItem.getByTestId('inventory-item-price')).toHaveText(productPrice);
  await expect(checkoutPage.paymentInfo).toBeVisible();
  await expect(checkoutPage.shippingInfo).toBeVisible();

  const subtotal = await checkoutPage.getAmountFromLabel(checkoutPage.subtotalLabel);
  const tax = await checkoutPage.getAmountFromLabel(checkoutPage.taxLabel);
  const total = await checkoutPage.getAmountFromLabel(checkoutPage.totalLabel);

  expect(subtotal).toBe(Number(productPrice.replace('$', '')));
  expect(total).toBeCloseTo(subtotal + tax, 2);

  await page.screenshot({ path: 'evidencias/checkout-resumo.png', fullPage: true });
});
