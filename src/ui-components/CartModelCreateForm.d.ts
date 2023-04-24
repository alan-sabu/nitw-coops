/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartModelCreateFormInputValues = {
    product_name?: string;
    product_price?: number;
    product_qty?: number;
    product_subtotal?: number;
    email?: string;
};
export declare type CartModelCreateFormValidationValues = {
    product_name?: ValidationFunction<string>;
    product_price?: ValidationFunction<number>;
    product_qty?: ValidationFunction<number>;
    product_subtotal?: ValidationFunction<number>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartModelCreateFormOverridesProps = {
    CartModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    product_name?: PrimitiveOverrideProps<TextFieldProps>;
    product_price?: PrimitiveOverrideProps<TextFieldProps>;
    product_qty?: PrimitiveOverrideProps<TextFieldProps>;
    product_subtotal?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartModelCreateFormProps = React.PropsWithChildren<{
    overrides?: CartModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CartModelCreateFormInputValues) => CartModelCreateFormInputValues;
    onSuccess?: (fields: CartModelCreateFormInputValues) => void;
    onError?: (fields: CartModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartModelCreateFormInputValues) => CartModelCreateFormInputValues;
    onValidate?: CartModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function CartModelCreateForm(props: CartModelCreateFormProps): React.ReactElement;
