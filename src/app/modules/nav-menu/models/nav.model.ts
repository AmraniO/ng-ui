export interface Nav {
    name: string;
    label: string;
    component: any;
}

export interface NavCategory {
    name: string;
    label: string;
    icon?: string;
    navs?: Nav[];
    open: boolean;
}