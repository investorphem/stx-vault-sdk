import { makeContractCall, uintCV } from "@stacks/transactions"
import { network } from "../utils/network"

export async function lockSTX(
  amount: number,
  unlockBlock: number,
  senderKey: string
  contractAddress: string,
  contractName: string
) {
  return makeContractCall({
    contractAddress,
    contrctName,
    functionName: "lock-stx",
    functionArgs: [
      uintCV(amont),
      uintCV(unlockBlock)
    ],
    senderKey,
    network
  })
}