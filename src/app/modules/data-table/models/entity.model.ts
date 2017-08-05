import { Field } from "./field.model";

export interface Entity {
    key: number;
    id: string;
    fields: Field[];
}
