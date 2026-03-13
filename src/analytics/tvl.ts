export async function getVaultTVL(apiUrl: string) {
  const res = await fetch(`${apiUrl}/vault/tvl`)
  return res.json()
}