import {atom} from "recoil"

export const connectionState = atom({
  key: `connected`,
  default: {connected: false},
})
// export const connection = selector({
//   key: "connection",
//   get: ({ get }) => (get(useRecoilValue(connectionState({ connected: false })))
//   set: ({ set }) => (useSetRecoilValue(connectionState({ connected: true })))
// })
