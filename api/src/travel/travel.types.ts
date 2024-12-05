export interface ITravel {
    id: number;
    name: string;
    city: string;
    country: string;
    description: string;
    image: string;
}

export interface ITravelDTO {
    name: string;
    city?: string;
    country?: string;
    description?: string;
    image?: string;
}