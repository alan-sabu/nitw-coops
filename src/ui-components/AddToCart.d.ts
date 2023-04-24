/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CartModel } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddToCartOverridesProps = {
    "99"?: PrimitiveOverrideProps<TextProps>;
    AddToCart?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Product Name"?: PrimitiveOverrideProps<TextProps>;
    qty?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AddToCartProps = React.PropsWithChildren<Partial<FlexProps> & {
    addTo?: String;
    cartModel?: CartModel;
} & {
    overrides?: AddToCartOverridesProps | undefined | null;
}>;
export default function AddToCart(props: AddToCartProps): React.ReactElement;
