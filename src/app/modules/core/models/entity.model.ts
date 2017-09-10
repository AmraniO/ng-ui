import { Panel } from "./panel.model";

export interface Entity {
    key: number;
    id: string;
    panels: Panel[];
}
