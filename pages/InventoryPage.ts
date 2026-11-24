import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByTestId('title');
    this.inventoryItems = page.getByTestId('inventory-item');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.cartLink = page.getByTestId('shopping-cart-link');
  }

  getProductCard(productName: string): Locator {
    return this.inventoryItems.filter({ hasText: productName });
  }

  async getProductPrice(productName: string): Promise<string> {
    const price = await this.getProductCard(productName)
      .getByTestId('inventory-item-price')
      .textContent();
    return price?.trim() ?? '';
  }

  async addProductToCart(productName: string) {
    await this.getProductCard(productName)
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
