// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CartModel, PurchaseModel, ProductModel } = initSchema(schema);

export {
  CartModel,
  PurchaseModel,
  ProductModel
};