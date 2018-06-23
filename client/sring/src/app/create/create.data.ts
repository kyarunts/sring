export interface SelectedOptions {
    gender: Genders;
    name: string;
    theme: string;
    style: string;
    letters: Object;
}

export interface ThemeObject {
    id: string;
    genderID: Genders;
    title: string;
    imageUrl: string;
}

export interface StyleObject {
    id: string;
    title: string;
    genderIDs: Genders[];
    themeIDs: string[];
    imageUrl: string;
}

export interface LetterOption {
    id: string,
    genderIDs: Genders[];
    themeIDs: string[];
    styleIDs: string[];
    letter: string,
    title: string,
    imageUrl: string,
}

export interface TypeObject {
    id: string;
    title: string;
    imageUrl: string;
}

export interface BookOptions {
    themes: ThemeObject[];
    styles: StyleObject[];
    types: TypeObject[];
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