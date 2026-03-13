import { makeContractCall, uintCV } from "@stacks/transactions"
import { network } from "../utils/network"

export async function createVault(
  unlockBlock: number,
  senderKey: string,
  contractAddress: string,
  contractName: string
) {
  return makeContractCall({
    contractAddress,
    contractName,
    functionName: "create-vault",
    functionArgs: [uintCV(unlockBlock)],
    senderKey,
    network
  })
}