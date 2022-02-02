export enum DataState {
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
    dataState: DataState,
    data?: T,
    errorMessage?: string
}