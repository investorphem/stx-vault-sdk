import { connectWallet, lockSTX } from "stx-vault-sdk"

async function start() {
  await connectWallet()

  await lockSTX
    100000000,
    900000,
    PRIVATE_KEY,
    CONTRACT_ADDRESS,
    "stx-vault"
  )
}

start()