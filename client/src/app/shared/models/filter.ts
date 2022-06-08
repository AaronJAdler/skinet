export interface IFilter {
    id: number;
    name: string;
}

export interface IBrand extends IFilter {}
export interface IProductType extends IFilter {}