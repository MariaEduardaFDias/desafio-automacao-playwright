import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByTestId('title');
    this.cartItems = page.getByTestId('inventory-item');
    this.checkoutButton = page.getByTestId('checkout');
  }

  getItemByName(productName: string): Locator {
    return this.cartItems.filter({ hasText: productName });
  }

  getItemPrice(productName: string): Locator {
    return this.getItemByName(productName).getByTestId('inventory-item-price');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
