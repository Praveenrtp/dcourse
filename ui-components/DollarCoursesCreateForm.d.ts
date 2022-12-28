/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DollarCoursesCreateFormInputValues = {
    name?: string;
    title?: string;
    img?: string;
    desc?: string;
};
export declare type DollarCoursesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DollarCoursesCreateFormOverridesProps = {
    DollarCoursesCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    img?: FormProps<TextFieldProps>;
    desc?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DollarCoursesCreateFormProps = React.PropsWithChildren<{
    overrides?: DollarCoursesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DollarCoursesCreateFormInputValues) => DollarCoursesCreateFormInputValues;
    onSuccess?: (fields: DollarCoursesCreateFormInputValues) => void;
    onError?: (fields: DollarCoursesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DollarCoursesCreateFormInputValues) => DollarCoursesCreateFormInputValues;
    onValidate?: DollarCoursesCreateFormValidationValues;
} & React.CSSProperties>;
export default function DollarCoursesCreateForm(props: DollarCoursesCreateFormProps): React.ReactElement;
