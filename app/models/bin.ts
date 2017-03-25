export interface IBin {
    Id?: number;
    ClientId?: number;
    ClientName?: string;
    EmployeeId?: number;
    EmployeeName?: string;
    GreenBinCount?: number;
    BlueBinCount?: number;
    GreyBinCount?: number;
    CollectionDurationInMinutes?: number;
    CollectionDate?: Date;
    Status?: string;
}