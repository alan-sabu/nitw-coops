/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PurchaseModel } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckoutFormsOverridesProps = {
    CheckoutForms?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31329767006"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<TextProps>;
    label37662776?: PrimitiveOverrideProps<TextProps>;
    label37662777?: PrimitiveOverrideProps<TextProps>;
    label37662778?: PrimitiveOverrideProps<TextProps>;
    TextField37502674?: PrimitiveOverrideProps<TextFieldProps>;
    Divider29767011?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    Delivery?: PrimitiveOverrideProps<TextProps>;
    TextField29767014?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29767015?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 412"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31329767067"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    Cart?: PrimitiveOverrideProps<TextProps>;
    Divider29767040?: PrimitiveOverrideProps<DividerProps>;
    "Frame 316"?: PrimitiveOverrideProps<FlexProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    "Rs. 320.0029767054"?: PrimitiveOverrideProps<TextProps>;
    Divider29767061?: PrimitiveOverrideProps<DividerProps>;
    "Frame 319"?: PrimitiveOverrideProps<FlexProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    "Rs. 320.0029767064"?: PrimitiveOverrideProps<TextProps>;
    Divider29767065?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CheckoutFormsProps = React.PropsWithChildren<Partial<FlexProps> & {
    purchaseModel?: PurchaseModel;
} & {
    overrides?: CheckoutFormsOverridesProps | undefined | null;
}>;
export default function CheckoutForms(props: CheckoutFormsProps): React.ReactElement;
