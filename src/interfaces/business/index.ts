import { BusinessOwnerInterface } from 'interfaces/business-owner';
import { ProductInterface } from 'interfaces/product';
import { ShopManagerInterface } from 'interfaces/shop-manager';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  business_owner?: BusinessOwnerInterface[];
  product?: ProductInterface[];
  shop_manager?: ShopManagerInterface[];
  user?: UserInterface;
  _count?: {
    business_owner?: number;
    product?: number;
    shop_manager?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
