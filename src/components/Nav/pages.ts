export interface PagesSubMenuAttributes {
    title: string;
    list: { title: string; path: string }[];
}

export interface PagesAttributes {
    title: string;
    path: string;
    subMenu?: PagesSubMenuAttributes[];
}

export const pages = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Windows",
        path: "/windows",
        subMenu: [
            {
                title: "Materials",
                list: [
                    {
                        title: "Wood",
                        path: "/windows/wood",
                    },
                    {
                        title: "Vinyl",
                        path: "/windows/vinyl",
                    },
                ],
            },
            {
                title: "Styles",
                list: [
                    {
                        title: "Awning",
                        path: "/windows/awning",
                    },
                    {
                        title: "Bay",
                        path: "/windows/bay",
                    },
                    {
                        title: "Bow",
                        path: "/windows/bow",
                    },
                    {
                        title: "Casement",
                        path: "/windows/casement",
                    },
                    {
                        title: "Custom",
                        path: "/windows/custom",
                    },
                    {
                        title: "Double-Hung",
                        path: "/windows/double-hung",
                    },
                    {
                        title: "Single-Hung",
                        path: "/windows/single-hung",
                    },
                    {
                        title: "Sliding",
                        path: "/windows/sliding",
                    },
                ],
            },
        ],
    },
    {
        title: "Doors",
        path: "/doors",
        subMenu: [
            {
                title: "Materials",
                list: [
                    {
                        title: "Fibreglass",
                        path: "/doors/fibreglass",
                    },
                    {
                        title: "Steel",
                        path: "/doors/steel",
                    },
                ],
            },
        ],
    },
    {
        title: "Repairs",
        path: "/repairs",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Commercial",
        path: "/commercial",
    },
    {
        title: "Gallery",
        path: "/gallery",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Testimonials",
        path: "/testimonials",
    },
];
