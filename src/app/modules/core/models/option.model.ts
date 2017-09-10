import { Field } from "./field.model";

export interface Option {
    key: number;
    value: any;
    label: string;
    field: Field;
    fieldKey: number;
}