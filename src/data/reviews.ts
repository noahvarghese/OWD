export interface ReviewAttributes {
    name: string;
    rating: 1 | 2 | 3 | 4 | 5 | number;
    review: string;
    date: Date | string;
}

export const reviews = [
    {
        name: "Dorothy Lunn",
        rating: 5,
        date: new Date(2021, 6, 30),
        review: "Great staff and great group of people to deal business with for sure. Hands down.",
    },
    {
        name: "Walt Dermott",
        rating: 5,
        date: new Date(2021, 5, 31),
        review: "Originally we ordered front and back doors a European style, beautiful and solid doors that were very professionally over two years ago.  So we went back for a quotation on windows, pricing was fair and competitive and the installation was done professionally. The install team cleaned up after the install of each window.  The job is done and the house looks great....Many thanks Julia and Matthew and your Installation Team!",
    },
    {
        name: "Ilonna Mills",
        rating: 5,
        date: new Date(2021, 2, 28),
        review: "We had windows fitted last week in the snow, the two guys that fitted them were very professional and continued in the snow no matter what, our new windows look great. I would highly recommend Oakville windows, from booking the appointment with Julia   to the guy that come to measure , to the fitting experience is smooth and professional, they conduct their business in a way that puts you at ease and the whole process from start to finish was an extremely nice experience, thank you Oakville windows.",
    },
];
