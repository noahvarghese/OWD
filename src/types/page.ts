export interface PagesSubMenuAttributes {
    title: string;
    list: { title: string; path: string }[];
}

export interface PagesAttributes {
    title: string;
    path: string;
    subMenu?: PagesSubMenuAttributes[];
}
