/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrimarybuttonOverridesProps = {
    Primarybutton?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Sign Out"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PrimarybuttonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PrimarybuttonOverridesProps | undefined | null;
}>;
export default function Primarybutton(props: PrimarybuttonProps): React.ReactElement;
