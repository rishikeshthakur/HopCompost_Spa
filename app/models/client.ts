import { IContract } from './contract';
export interface IClient{
    Id?: number;
    Name?: string;
    Address?: string;
    EmergencyContact?: string;

    Contracts?: IContract[];
}