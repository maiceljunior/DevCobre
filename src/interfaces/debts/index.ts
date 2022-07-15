export interface IDebtsRequest {
  bankId: number;
  documentClient: number;
  debtType: number;
  debtValue: number;
  ipoc: number;
  debtOrigin: number;
  dateDebt: Date;
}
