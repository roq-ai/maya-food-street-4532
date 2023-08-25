import { BusinessOwnerInterface } from 'interfaces/business-owner';
import { ShopManagerInterface } from 'interfaces/shop-manager';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;
  created_at: string;
  updated_at: string;

  business_owner: BusinessOwnerInterface[];
  shop_manager: ShopManagerInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
