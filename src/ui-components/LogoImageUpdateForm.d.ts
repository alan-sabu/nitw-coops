/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoImage } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LogoImageUpdateFormInputValues = {
    imageUrl?: string;
};
export declare type LogoImageUpdateFormValidationValues = {
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogoImageUpdateFormOverridesProps = {
    LogoImageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LogoImageUpdateFormProps = React.PropsWithChildren<{
    overrides?: LogoImageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    logoImage?: LogoImage;
    onSubmit?: (fields: LogoImageUpdateFormInputValues) => LogoImageUpdateFormInputValues;
    onSuccess?: (fields: LogoImageUpdateFormInputValues) => void;
    onError?: (fields: LogoImageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LogoImageUpdateFormInputValues) => LogoImageUpdateFormInputValues;
    onValidate?: LogoImageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LogoImageUpdateForm(props: LogoImageUpdateFormProps): React.ReactElement;
