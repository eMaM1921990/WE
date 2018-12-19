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
