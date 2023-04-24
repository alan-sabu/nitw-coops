import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCartModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name: string;
  readonly product_price: number;
  readonly product_qty: number;
  readonly product_subtotal?: number | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name: string;
  readonly product_price: number;
  readonly product_qty: number;
  readonly product_subtotal?: number | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartModel = LazyLoading extends LazyLoadingDisabled ? EagerCartModel : LazyCartModel

export declare const CartModel: (new (init: ModelInit<CartModel>) => CartModel) & {
  copyOf(source: CartModel, mutator: (draft: MutableModel<CartModel>) => MutableModel<CartModel> | void): CartModel;
}

type EagerPurchaseModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PurchaseModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly roll: string;
  readonly room: string;
  readonly hostel: string;
  readonly subtotal?: number | null;
  readonly total?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPurchaseModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PurchaseModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly roll: string;
  readonly room: string;
  readonly hostel: string;
  readonly subtotal?: number | null;
  readonly total?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PurchaseModel = LazyLoading extends LazyLoadingDisabled ? EagerPurchaseModel : LazyPurchaseModel

export declare const PurchaseModel: (new (init: ModelInit<PurchaseModel>) => PurchaseModel) & {
  copyOf(source: PurchaseModel, mutator: (draft: MutableModel<PurchaseModel>) => MutableModel<PurchaseModel> | void): PurchaseModel;
}

type EagerProductModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly desciption?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly desciption?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductModel = LazyLoading extends LazyLoadingDisabled ? EagerProductModel : LazyProductModel

export declare const ProductModel: (new (init: ModelInit<ProductModel>) => ProductModel) & {
  copyOf(source: ProductModel, mutator: (draft: MutableModel<ProductModel>) => MutableModel<ProductModel> | void): ProductModel;
}