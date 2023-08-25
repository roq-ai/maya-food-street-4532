interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Shop Manager'],
  tenantName: 'Business',
  applicationName: 'Maya Food Street',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
