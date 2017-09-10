import { Field } from "./field.model";
import { Section } from "./section.model";

export interface Control {
    key: number;
    orderNo: number;
    isVisible: boolean;
    isRequired: boolean;
    isSearchable: boolean;    
    field: Field;
    fieldKey: number;
    section: Section;
    sectionKey: number;
}