import { BigNumber } from '@0x/utils';
import { EventCallback, EventMarmoCallback } from './types';
import { ContractEventArg } from 'ethereum-types';
import { Provider } from 'ethereum-types';

export interface DiasporeConstructorParams {
    diasporeRegistryAddress: string;
    defaultGasPrice?: BigNumber;
}

/**
 * @param provider The web3 provider
 */
export interface DiasporeWeb3ConstructorParams extends DiasporeConstructorParams {
    provider: Provider;
}

export interface RequestParams {
    amount: BigNumber;
    borrower: string;
    salt: BigNumber;
    expiration: BigNumber;
    cuota: BigNumber;
    interestRate: BigNumber;
    installments: BigNumber;
    duration: BigNumber;
    timeUnit: number | BigNumber;
}
export interface RequestCallBackMarmoParams extends RequestParams {
    callback?: EventMarmoCallback;
}

export interface RequestWithCallBackParams extends RequestParams {
    callback: EventCallback<ContractEventArg>;
}

export interface RequestLoanParams {
    amount: BigNumber,
    model: string,
    oracle: string,
    borrower: string,
    salt: BigNumber,
    expiration: BigNumber,
    data: string
}

export interface LendParams {
    id: string;
    value: BigNumber;
}

export interface LendRequestParams {
    id: string,
    oracleData: string,
    cosigner: string,
    cosignerLimit: BigNumber,
    cosignerData: string
  }

  export interface LendWithCallBackMarmoParams extends LendParams {
    callback?: EventMarmoCallback;
}

export interface LendWithCallBackParams extends LendParams {
    callback: EventCallback<ContractEventArg>;
}

/**
 * @param provider The web3 provider
 */
export interface DiasporeWeb3CostructorParams extends DiasporeConstructorParams {
    provider: Provider;
}

/**
 * @param address (optional) Account address
 */
export interface GetBalanceParams {
    address?: string;
}

export interface GetTokensParams {
    amount: number;
    address?: string;
}

export interface PayParams {
    id: string;
    origin: string;
    amount: BigNumber
}

export interface PayWithCallBackParams extends PayParams {
    callback: EventCallback<ContractEventArg>;
}

export interface PayWitCallBackMarmoParams extends PayParams {
    callback: EventMarmoCallback;
}

export interface WithdrawParams {
    id: string;
    to: string;
}

export interface WithdrawWithCallBackParams extends WithdrawParams {
    callback: EventCallback<ContractEventArg>;
}

export interface WithdrawWithCallBackMarmoParams extends WithdrawParams {
    callback: EventMarmoCallback;
}

export interface WithdrawPartialParams extends WithdrawParams {
    amount: BigNumber;
}

export interface WithdrawPartialWithCallBackParams extends WithdrawParams {
    amount: BigNumber;
    callback: EventCallback<ContractEventArg>;
}

export interface WithdrawPartialWithCallBackMarmoParams extends WithdrawParams {
    amount: BigNumber;
    callback?: EventMarmoCallback;
}

export interface ApproveRequestParams {
    id: string;
}

export interface ApproveRequestWithCallBackParams extends ApproveRequestParams {
    callback: EventCallback<ContractEventArg>;
}

export interface ApproveRequestWithCallBackMarmoParams extends ApproveRequestParams {
    callback?: EventMarmoCallback;
}

export interface DiasporeAPI {

    request(params: RequestParams): Promise<string>

    approveRequest(params: ApproveRequestParams): void

    lend(params: LendParams): void

    pay(params: PayParams): void

    payToken(params: PayParams): void

    withdraw(params: WithdrawParams): void

    withdrawPartial(params: WithdrawPartialParams): void

    getAccount(): Promise<string>

    getBalance(params: GetBalanceParams): Promise<BigNumber>

    isTestnet(): Promise<boolean>

}