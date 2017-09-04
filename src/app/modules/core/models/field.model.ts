import { Entity } from "./entity.model";

export interface Field {
    key: number;
    id: string;
    label: string;
    entity: Entity;
    entityKey: number;
}