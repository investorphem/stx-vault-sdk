export async function getVaultHistory(apiUrl: string, address: string) {
  const res = await fetch(`${apiUrl}/extended/v1/address/${address}/transactions`)
  return res.json()
}