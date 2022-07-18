export interface IAgreementRequest {
    id?: number;
    agreedValue: number;
    dataAgree: Date;
    debtsId: number;
    clientDocument: number;
    formOfPayment: number;
}

export interface IAgreementReturn {
    id: number;
    agreedValue: number;
    dataAgree: Date;
    debtsId: number;
    clientDocument: number;
    formOfPayment: number;
}

export interface IAgreementInfo {
    agreedValue: number;
    dataAgree: Date;
    debtsId: number;
    clientDocument: number;
    formOfPayment: number;
}