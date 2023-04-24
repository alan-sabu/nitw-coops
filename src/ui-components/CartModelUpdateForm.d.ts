/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CartModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartModelUpdateFormInputValues = {
    product_name?: string;
    product_price?: number;
    product_qty?: number;
    product_subtotal?: number;
    email?: string;
};
export declare type CartModelUpdateFormValidationValues = {
    product_name?: ValidationFunction<string>;
    product_price?: ValidationFunction<number>;
    product_qty?: ValidationFunction<number>;
    product_subtotal?: ValidationFunction<number>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartModelUpdateFormOverridesProps = {
    CartModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    product_name?: PrimitiveOverrideProps<TextFieldProps>;
    product_price?: PrimitiveOverrideProps<TextFieldProps>;
    product_qty?: PrimitiveOverrideProps<TextFieldProps>;
    product_subtotal?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: CartModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cartModel?: CartModel;
    onSubmit?: (fields: CartModelUpdateFormInputValues) => CartModelUpdateFormInputValues;
    onSuccess?: (fields: CartModelUpdateFormInputValues) => void;
    onError?: (fields: CartModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartModelUpdateFormInputValues) => CartModelUpdateFormInputValues;
    onValidate?: CartModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CartModelUpdateForm(props: CartModelUpdateFormProps): React.ReactElement;
