/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DollarCourses } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DollarCoursesUpdateFormInputValues = {
    name?: string;
    title?: string;
    img?: string;
    desc?: string;
};
export declare type DollarCoursesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DollarCoursesUpdateFormOverridesProps = {
    DollarCoursesUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    img?: FormProps<TextFieldProps>;
    desc?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DollarCoursesUpdateFormProps = React.PropsWithChildren<{
    overrides?: DollarCoursesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dollarCourses?: DollarCourses;
    onSubmit?: (fields: DollarCoursesUpdateFormInputValues) => DollarCoursesUpdateFormInputValues;
    onSuccess?: (fields: DollarCoursesUpdateFormInputValues) => void;
    onError?: (fields: DollarCoursesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DollarCoursesUpdateFormInputValues) => DollarCoursesUpdateFormInputValues;
    onValidate?: DollarCoursesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DollarCoursesUpdateForm(props: DollarCoursesUpdateFormProps): React.ReactElement;
