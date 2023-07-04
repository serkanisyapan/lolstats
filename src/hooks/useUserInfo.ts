import { useQuery } from "@tanstack/react-query"
import { env } from "~/env.mjs"
import { UserInfo } from "~/types/UserInfo"

const LOL_API_KEY = env.NEXT_PUBLIC_LOLAPIKEY

const fetchUserInfo = async() => {
  const fetchInfo = await fetch(`https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/sek%C3%BClertolga?api_key=${LOL_API_KEY}`)
  const userInfo = await fetchInfo.json() as UserInfo
  return userInfo
}

const useUserInfo = () => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: () => fetchUserInfo(),
    refetchOnWindowFocus: false
  })
}

export { fetchUserInfo, useUserInfo }