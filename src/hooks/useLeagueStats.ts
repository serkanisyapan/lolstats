import { env } from '~/env.mjs'

const LOL_API_KEY = env.NEXT_PUBLIC_LOLAPIKEY

const fetchUserStats = async(id: string) => {
  const userStats = await fetch(`https://tr1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${LOL_API_KEY}`)
  return await userStats.json()
}

export { fetchUserStats }
