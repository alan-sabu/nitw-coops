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
export declare type PurchaseModelCreateFormInputValues = {
    email?: string;
    roll?: string;
    room?: string;
    hostel?: string;
    subtotal?: number;
    total?: number;
};
export declare type PurchaseModelCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    roll?: ValidationFunction<string>;
    room?: ValidationFunction<string>;
    hostel?: ValidationFunction<string>;
    subtotal?: ValidationFunction<number>;
    total?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PurchaseModelCreateFormOverridesProps = {
    PurchaseModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    roll?: PrimitiveOverrideProps<TextFieldProps>;
    room?: PrimitiveOverrideProps<TextFieldProps>;
    hostel?: PrimitiveOverrideProps<TextFieldProps>;
    subtotal?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PurchaseModelCreateFormProps = React.PropsWithChildren<{
    overrides?: PurchaseModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PurchaseModelCreateFormInputValues) => PurchaseModelCreateFormInputValues;
    onSuccess?: (fields: PurchaseModelCreateFormInputValues) => void;
    onError?: (fields: PurchaseModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PurchaseModelCreateFormInputValues) => PurchaseModelCreateFormInputValues;
    onValidate?: PurchaseModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function PurchaseModelCreateForm(props: PurchaseModelCreateFormProps): React.ReactElement;
