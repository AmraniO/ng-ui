import { Entity } from "./entity.model";
import { Option } from "./option.model";
import { FieldTypeEnum } from "../enums";

export interface Field {
    key: number;
    id: string;
    label: string;
    type: string;
    options: Option[];
    entity: Entity;
    entityKey: number;    
}