import { useQuery } from '@tanstack/react-query'
import { UserInfo } from '~/types/UserInfo'
import { env } from '~/env.mjs'
import { MatchInfo } from '~/types/MatchDetails'

const LOL_API_KEY = env.NEXT_PUBLIC_LOLAPIKEY

const fetchUserInfo = async(): Promise<UserInfo> => {
  const user_info = await fetch(`https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/sek%C3%BClertolga?api_key=${LOL_API_KEY}`)
  return await user_info.json()
}

const fetchMatchIds = async () => {
  const userPUUID = await fetchUserInfo()
  const fetch_matches = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${userPUUID.puuid}/ids?start=0&count=10&api_key=${LOL_API_KEY}`)
  return await fetch_matches.json()
}

const fetchMatches = async () => {
  let matchInfos = []
  const matchIds = await fetchMatchIds()
  for (let i=0; i<matchIds.length; i++) {
    const getMatchInfo = await (await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchIds[i]}?api_key=${LOL_API_KEY}`)).json()
    matchInfos.push(getMatchInfo)
  }
  return matchInfos as MatchInfo[]
}

const useMatches = () => {
  return useQuery({
    queryKey: ['matches'],
    queryFn: () => fetchMatches(),
  })
}

export { useMatches, fetchMatches }
