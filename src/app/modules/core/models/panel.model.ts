import { Entity } from "./entity.model";
import { Section } from "./section.model";

export interface Panel {
    key: number;
    id: string;    
    entity: Entity;
    entityKey: number;
    sections: Section[];
}