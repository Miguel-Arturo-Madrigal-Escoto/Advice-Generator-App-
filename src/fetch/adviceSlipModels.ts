export interface RootFetch {
    slip: Slip;
}

export interface Slip {
    id?:     number;
    advice?: string;
}