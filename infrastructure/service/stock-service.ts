// src/infrastructure/services/StockService.ts
import { mockProducts, mockWarehouses, mockSales } from "../mocks";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const StockService = {
  async getProducts() {
    await delay(500);
    return mockProducts;
  },
  async getProductById(id: string) {
    await delay(300);
    return mockProducts.find((p) => p.id === id);
  },
  async createProduct(data: any) {
    await delay(800);
    return { ...data, id: `new_${Date.now()}` };
  },
  async getWarehouses() {
    await delay(500);
    return mockWarehouses;
  },
  async getSales() {
    await delay(500);
    return mockSales;
  },
};