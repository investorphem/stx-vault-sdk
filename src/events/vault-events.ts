export async function watchVaultEvents(apiUrl: string, contractId: string) {
  const res = await fetch(`${apiUrl}/extended/v1/contract/${contractId}/events`)
  return res.json()
}