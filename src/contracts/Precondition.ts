/* GENERATED BY TYPECHAIN VER. 0.1.4 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import {
  TypeChainContract,
  promisify,
  ITxParams,
  IPayableTxParams,
  DeferredTransactionWrapper
} from "./typechain-runtime";

export class Precondition extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: "active",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "version",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_newOwner", type: "address" }],
        name: "changeOwner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { name: "_name", type: "string" },
          { name: "_version", type: "uint256" },
          { name: "_active", type: "bool" }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      { payable: false, stateMutability: "nonpayable", type: "fallback" },
      {
        constant: false,
        inputs: [{ name: "_active", type: "bool" }],
        name: "setActive",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "_platform", type: "bytes32" },
          { name: "_platformId", type: "string" },
          { name: "_token", type: "address" },
          { name: "_value", type: "uint256" },
          { name: "_funder", type: "address" }
        ],
        name: "isValid",
        outputs: [{ name: "valid", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<Precondition> {
    const contract = new Precondition(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === "0x0") {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get active(): Promise<boolean> {
    return promisify(this.rawWeb3Contract.active, []);
  }
  public get name(): Promise<string> {
    return promisify(this.rawWeb3Contract.name, []);
  }
  public get version(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.version, []);
  }
  public get owner(): Promise<string> {
    return promisify(this.rawWeb3Contract.owner, []);
  }
  public isValid(
    _platform: BigNumber,
    _platformId: string,
    _token: BigNumber | string,
    _value: BigNumber | number,
    _funder: BigNumber | string
  ): Promise<boolean> {
    return promisify(this.rawWeb3Contract.isValid, [
      _platform.toString(),
      _platformId.toString(),
      _token.toString(),
      _value.toString(),
      _funder.toString()
    ]);
  }

  public changeOwnerTx(
    _newOwner: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "changeOwner", [
      _newOwner.toString()
    ]);
  }
  public setActiveTx(_active: boolean): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "setActive", [
      _active.toString()
    ]);
  }
}