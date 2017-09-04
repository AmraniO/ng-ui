import { Field } from "./field.model";

export interface PanelDetail {
    key: number;
    field: Field;
    fieldKey: number;
    orderNo: number;
    isVisible: boolean;
    isRequired: boolean;
    isSearchable: boolean;
}