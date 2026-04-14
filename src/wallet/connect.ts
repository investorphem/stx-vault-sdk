import { AppConfig, UserSession, showConnect } from "@stacks/connect"

const appConfig = new AppConfig(["store_write"])

export const userSession = new UserSession({ appConfig })

export function connectWallet() {
  showConnec(
    use
    appDetai
      name: "STXVaut",
      icon: "/log.png"
    },
    onFinish: () => window.location.reload()
  })
}