/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProductModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductModelUpdateFormInputValues = {
    name?: string;
    price?: number;
    desciption?: string;
    imageUrl?: string;
};
export declare type ProductModelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    desciption?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductModelUpdateFormOverridesProps = {
    ProductModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    desciption?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    productModel?: ProductModel;
    onSubmit?: (fields: ProductModelUpdateFormInputValues) => ProductModelUpdateFormInputValues;
    onSuccess?: (fields: ProductModelUpdateFormInputValues) => void;
    onError?: (fields: ProductModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductModelUpdateFormInputValues) => ProductModelUpdateFormInputValues;
    onValidate?: ProductModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductModelUpdateForm(props: ProductModelUpdateFormProps): React.ReactElement;
