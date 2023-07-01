import { env } from "~/env.mjs"
import { UserInfo } from "~/types/UserInfo"

const LOL_API_KEY = env.NEXT_PUBLIC_LOLAPIKEY

export const useUserInfo = async(): Promise<UserInfo> => {
  const userInfo = await fetch(`https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/sek%C3%BClertolga?api_key=${LOL_API_KEY}`)
  return await userInfo.json()
}