import { env } from '~/env.mjs'
import { MatchInfo } from '~/types/MatchDetails'

const LOL_API_KEY = env.NEXT_PUBLIC_LOLAPIKEY

const fetchMatchIds = async (puuid: string) => {
  const fetchMatches = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${LOL_API_KEY}`)
  return await fetchMatches.json()
}

const fetchMatches = async (puuid: string) => {
  let matchInfos = []
  const matchIds = await fetchMatchIds(puuid)
  for (let i=0; i<matchIds.length; i++) {
    const getMatchInfo = await (await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchIds[i]}?api_key=${LOL_API_KEY}`)).json()
    matchInfos.push(getMatchInfo)
  }
  return matchInfos as MatchInfo[]
}

export { fetchMatches }
