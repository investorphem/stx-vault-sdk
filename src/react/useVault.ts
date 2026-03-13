import { useState } from "react"
import { getVaultBalance } from "../vault/balance"

export function useVault(address: string, contractAddress: string, contractName: string) {
  const [balance, setBalance] = useState<number | null>(null)

  async function refresh() {
    const result = await getVaultBalance(address, contractAddress, contractName)
    setBalance(result)
  }

  return { balance, refresh }
}