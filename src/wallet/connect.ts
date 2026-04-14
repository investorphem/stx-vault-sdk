import { AppConfig, UserSession, showConnect } from "@stacks/connect"

const appConfig = new AppConfig(["store_write"])

export const userSession = new UserSession({ appConfig })

export function connectWallet() {
  showConnect({
    userSessio
    appDetails:
      name: "STX Vaut",
      icon: "/logo.png"
    },
    onFinish: () => window.location.reload()
  })
}