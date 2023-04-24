/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AddToCartProps } from "./AddToCart";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddToCartCollectionOverridesProps = {
    AddToCartCollection?: PrimitiveOverrideProps<CollectionProps>;
    AddToCart?: AddToCartProps;
} & EscapeHatchProps;
export declare type AddToCartCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => AddToCartProps;
} & {
    overrides?: AddToCartCollectionOverridesProps | undefined | null;
}>;
export default function AddToCartCollection(props: AddToCartCollectionProps): React.ReactElement;
