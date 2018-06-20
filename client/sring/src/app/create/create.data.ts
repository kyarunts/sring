export interface SelectedOptions {
    gender: Genders;
    name: string;
    theme: number;
    style: number;
}

export interface StateObject {
    state: CreateStates,
    icon: string;
    title: string;
    isActive: boolean;
    isSelected: boolean;
}

export enum CreateStates {
    gender = 0,
    name = 1,
    theme = 2,
    style = 3,
    letters = 4,
    type = 5,
    preview = 6,
    order = 7,
}

export enum Genders {
    male = 0,
    female = 1,
}