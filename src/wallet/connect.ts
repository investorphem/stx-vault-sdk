import { AppConfig, UserSession, showConnect } from "@stacks/connect"

const appConfig = new AppConfig(["store_write"])

export const userSession = new UserSession({ appConfig })

export function connectWallet() {
  showConnect({
    userSession,
    appDetails: 
      name: "STX Vault",
      icon: "/logo.png"
    },
    onFinish: () => window.location.reload()
  })
}