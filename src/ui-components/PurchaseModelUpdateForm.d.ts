/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PurchaseModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PurchaseModelUpdateFormInputValues = {
    email?: string;
    roll?: string;
    room?: string;
    hostel?: string;
    subtotal?: number;
    total?: number;
};
export declare type PurchaseModelUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    roll?: ValidationFunction<string>;
    room?: ValidationFunction<string>;
    hostel?: ValidationFunction<string>;
    subtotal?: ValidationFunction<number>;
    total?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PurchaseModelUpdateFormOverridesProps = {
    PurchaseModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    roll?: PrimitiveOverrideProps<TextFieldProps>;
    room?: PrimitiveOverrideProps<TextFieldProps>;
    hostel?: PrimitiveOverrideProps<TextFieldProps>;
    subtotal?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PurchaseModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: PurchaseModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    purchaseModel?: PurchaseModel;
    onSubmit?: (fields: PurchaseModelUpdateFormInputValues) => PurchaseModelUpdateFormInputValues;
    onSuccess?: (fields: PurchaseModelUpdateFormInputValues) => void;
    onError?: (fields: PurchaseModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PurchaseModelUpdateFormInputValues) => PurchaseModelUpdateFormInputValues;
    onValidate?: PurchaseModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PurchaseModelUpdateForm(props: PurchaseModelUpdateFormProps): React.ReactElement;
