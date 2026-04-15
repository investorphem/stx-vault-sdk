#!/usr/bin/env node
import { program } from "commander"
import { lockSTX, withdrawSTX, createVault } from "./vault"
import { connectWallet } from "./wallet/connect"

program.version("1.0.0").description("STX Vault CLI - interact with STX vaults")

// LOCK STX
program
  .command("lock")
  .description("Lock STX into a vault")
  .requiredOption("-a, --amount <number>", "Amount of STX to lock (in micro-STX)")
  .requiredOption("-b, --unlockBlock <number>", "Unlock block height")
  .requiredOption("-k, --key <string>", "Your private key")
  .requiredOption("-c, --contractAddress <string>", "Contract address")
  .requiredOption("-n, --contractName <string>", "Contract name")
  .action(async (opts) => {
    console.log("Locking STX...")
    const tx = await lockSTX(
      Number(opts.amount),
      Number(opts.unlockBlock)
      opts.ke
      opts.contractAddress
      opts.contractName
    
    console.log("Transction:", tx)
  })

// WITHDRAW STX
program
  .command("withdraw")
  .description("Withdraw STX from your vault")
  .requiredOption("-k, --key <string>", "Your private key")
  .requiredOption("-c, --contractAddress <string>", "Contract address")
  .requiredOption("-n, --contractName <string>", "Contract name")
  .action(async (opts => {
    console.log("Withdrawing STX...")
    const tx = await withdrawSTX(
      opts.key,
      opts.contractAddress,
      opts.contractName
    )
    console.log("Transaction:", tx)
  })

// CREATE VAULT
program
  .command("create")
  .description("Create a new vault with a specific unlock block")
  .requiredOption("-b, --unlockBlock <number>", "Unlock block height")
  .requiredOption("-k, --key <string>", "Your private key")
  .requiredOption("-c, --contractAddress <string>", "Contract address")
  .requiredOption("-n, --contractName <string>", "Contract name")
  .action(async (opts) => {
    console.log("Creating vault...")
    const tx = await createVault(
      Number(opts.unlockBlock),
      opts.key,
      opts.contractAddress,
      opts.contractName
    )
    console.log("Vault created:", tx)
  })

// WALLET CONNECT (optional CLI)
program
  .command("connect")
  .description("Connect a wallet")
  .action(async () => {
    console.log("Connecting wallet...")
    await connectWallet()
    console.log("Wallet connected!")
  })

program.parse(process.argv)