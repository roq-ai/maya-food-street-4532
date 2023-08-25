import axios from 'axios';
import queryString from 'query-string';
import { ShopManagerInterface, ShopManagerGetQueryInterface } from 'interfaces/shop-manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getShopManagers = async (
  query?: ShopManagerGetQueryInterface,
): Promise<PaginatedInterface<ShopManagerInterface>> => {
  const response = await axios.get('/api/shop-managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createShopManager = async (shopManager: ShopManagerInterface) => {
  const response = await axios.post('/api/shop-managers', shopManager);
  return response.data;
};

export const updateShopManagerById = async (id: string, shopManager: ShopManagerInterface) => {
  const response = await axios.put(`/api/shop-managers/${id}`, shopManager);
  return response.data;
};

export const getShopManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/shop-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteShopManagerById = async (id: string) => {
  const response = await axios.delete(`/api/shop-managers/${id}`);
  return response.data;
};
