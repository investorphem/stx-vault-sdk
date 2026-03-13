export async function getVaultStats(apiUrl: string) {
  const res = await fetch(`${apiUrl}/vault/stats`)
  return res.json()
}