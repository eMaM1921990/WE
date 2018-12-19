export interface TokenModel {
  header: {
    timstamp: number,
    customerId: string,
    msisdn: string,
    messageCode: string,
    responseCode: string,
    responseMessage: string,
    locale: string,
    referenceId: string,
    channelId: string,
    responeAdditionalParameters: string
  },
  body: {
    status: string,
    jwt: string,
    userType: string,
    associatedLines: string,
    role: string
  }
}


export interface ADSLSystemInfo {
  header:
    {
      timstamp: number,
      customerId: string,
      msisdn: string,
      messageCode: string,
      responseCode: string,
      responseMessage: string,
      locale: string,
      referenceId: string,
      channelId: string,
      responeAdditionalParameters: string
    },
  body:
    {
      systemType: string,
      redirectURL: string,
    }
}


export interface ADSLPaymentInfoRq {

  header:
    {
      customerId: string,
      msisdn: string,
      messageCode: string,
      locale: string
    },
  body:
    {}

}


export interface ADSLPaymentInfoRs {
  header:
    {
      timstamp:number,
      customerId:string,
      msisdn:string,
      messageCode:string,
      responseCode:string,
      responseMessage:string,
      locale:string,
      referenceId:string,
      channelId:string,
      responeAdditionalParameters:string
    },
  body:
    {
      subscriberType:string,
      subscriptionFee:number,
      minPaidAmount:number,
      renewalDate:string
    }
}


export interface InitiatePaymentRq {
  header: {
    timestamp: number,
    customerId: string,
    msisdn: string,
    messageCode: string,
    locale: string
  },
  body: {
    numberType: string,
    redirectionURL: string,
    sourceMobileNumber: string,
    targetMobileNumber: string,
    amount: number
  }
}


export interface InitiatePaymentRs {
  header: {
    timstamp: number,
    customerId: string,
    msisdn: string,
    messageCode: string,
    responseCode: string,
    responseMessage: string,
    locale: string,
    referenceId: string,
    responeAdditionalParameters: string
  },
  body: {
    hashCode: string,
    newBalanceAmount: string,
    mobileNumber: string,
    transactionID: number,
    paymentSerialNo: string,
    paymentNarration: string
  }
}


export interface FinalizePaymentRq {
  header: {
    timestamp: number,
    customerId: string,
    msisdn: string,
    messageCode: string,
    locale: string
  },
  body: {
    numberType: string,
    email: string,
    targetMobileNumber: string,
    hashCode: string,
    transactionID: number
  }
}


export interface FinalizePaymentRs {
  header: {
    timstamp: number,
    customerId: string,
    msisdn: string,
    messageCode: string,
    responseCode: string,
    responseMessage: string,
    locale: string,
    referenceId: string,
    responeAdditionalParameters: string
  },
  body: {
    hashCode: string,
    newBalanceAmount: number,
    mobileNumber: string,
    transactionID: number,
    paymentSerialNo: string,
    paymentNarration: string
  }
}
