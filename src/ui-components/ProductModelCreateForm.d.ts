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
export declare type ProductModelCreateFormInputValues = {
    name?: string;
    price?: number;
    desciption?: string;
    imageUrl?: string;
};
export declare type ProductModelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    desciption?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductModelCreateFormOverridesProps = {
    ProductModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    desciption?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductModelCreateFormInputValues) => ProductModelCreateFormInputValues;
    onSuccess?: (fields: ProductModelCreateFormInputValues) => void;
    onError?: (fields: ProductModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductModelCreateFormInputValues) => ProductModelCreateFormInputValues;
    onValidate?: ProductModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductModelCreateForm(props: ProductModelCreateFormProps): React.ReactElement;
