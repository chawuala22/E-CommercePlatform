export interface ResultFruit {
    message: string;
    data:    Datum[];
}

export interface Datum {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    category:    string;
}