import {atom} from "recoil"

export const connectionState = atom({
  key: `connected`,
  default: {connected: false},
})
