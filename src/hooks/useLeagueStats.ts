import { useQuery } from '@tanstack/react-query'
import { env } from '~/env.mjs'
import { useUserInfo } from './useUserInfo'
import { LeagueStats } from '~/types/LeagueStats'

const LOL_API_KEY = env.NEXT_PUBLIC_LOLAPIKEY

const fetchUserStats = async() => {
  const { id } = await useUserInfo()
  const userStats = await fetch(`https://tr1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${LOL_API_KEY}`)
  return await userStats.json() as LeagueStats[]
}

const useLeagueStats = () => {
  return useQuery({
    queryKey: ['leagueStats'],
    queryFn: () => fetchUserStats(),
  })
}

export { useLeagueStats, fetchUserStats }
