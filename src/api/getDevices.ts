import { api } from "../lib/api";
import type { Product } from "../types";

interface Data {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

export const getDevices = async (): Promise<Data> => {
  const response = await api.get("/products");
  return response.data;
};
