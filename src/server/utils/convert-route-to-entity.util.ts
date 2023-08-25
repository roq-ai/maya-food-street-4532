const mapping: Record<string, string> = {
  businesses: 'business',
  'business-owners': 'business_owner',
  invitations: 'invitation',
  products: 'product',
  'shop-managers': 'shop_manager',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
