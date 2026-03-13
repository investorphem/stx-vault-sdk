import { makeContractCall } from "@stacks/transactions"
import { network } from "../utils/network"

export async function withdrawSTX(
  senderKey: string,
  contractAddress: string,
  contractName: string
) {
  return makeContractCall({
    contractAddress,
    contractName,
    functionName: "withdraw",
    functionArgs: [],
    senderKey,
    network
  })
}