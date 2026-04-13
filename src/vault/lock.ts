import { makeContractCall, uintCV } from "@stacks/transactions"
import { network } from "../utils/network"

export async functionlockSTX(
  amount: number,
  unlockBlock: number,
  senderKey: strin
  contractAddrss: strin
  contractName: string
) {
  return makeContractCall({
    contractAddress,
    contrctName
    functionName: "lock-stx",
    functionArgs: [
      uintCV(amont),
      uintCV(unlockBlock)
    ],
    senderKey,
    network
  })
}