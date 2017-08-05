import { Entity } from "./entity.model";
import { PanelDetail } from "./panel-detail.model";

export interface Panel {
    key: number;
    label: string;
    panelDetails: PanelDetail[];
    entity: Entity;
    entityKey: number;
}