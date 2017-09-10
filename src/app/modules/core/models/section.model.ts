import { Panel } from "./panel.model";
import { Control } from "./control.model";

export interface Section {
    key: number;
    id: string;
    label: string;
    panel: Panel;
    panelKey: number;
    controls: Control[];
}