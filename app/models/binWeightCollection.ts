import { IBinWeight } from './binWeight';

export interface IBinWeightCollection{
    BinCollectionId?: number;
    ClientId?: number;
    ClientName?: string;
    Processed?: boolean;
    BinWeights?: IBinWeight[]
}