export interface WindowMaterials {
    name: string;
    img: string;
    to: string;
}

export const materials: WindowMaterials[] = [
    {
        name: "Wood",
        img: "wood.png",
        to: "/windows/wood",
    },
    {
        name: "Vinyl",
        img: "vinyl.png",
        to: "/windows/vinyl",
    },
];
