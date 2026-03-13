import { callReadOnlyFunction } from "@stacks/transactions"
import { network } from "../utils/network"

export async function getVaultBalance(
  userAddress: string,
  contractAddress: string,
  contractName: string
) {
  return callReadOnlyFunction({
    contractAddress,
    contractName,
    functionName: "get-balance",
    functionArgs: [],
    senderAddress: userAddress,
    network
  })
}