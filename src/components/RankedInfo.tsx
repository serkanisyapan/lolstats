import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { fetchUserStats } from "~/hooks/useLeagueStats"
import { useUserInfo } from "~/hooks/useUserInfo"
import { LeagueStats } from "~/types/LeagueStats"

const TIER_IMAGES = {
    "IRON": "ranks/emblem-iron.png",
    "BRONZE": "ranks/emblem-bronze.png",
    "SILVER": "/ranks/emblem-silver.png",
    "GOLD": "ranks/emblem-gold.png",
    "PLATINUM": "ranks/emblem-platinum.png",
    "DIAMOND": "ranks/emblem-diamond.png",
    "CHALLENGER": "ranks/emblem-challenger.png",
    "MASTER": "ranks/emblem-master.png",
    "GRANDMASTER": "ranks/emblem-grandmaster.png",
}

const QUEUE_TYPE = {
    "RANKED_SOLO_5x5": "Ranked Solo",
    "RANKED_FLEX_SR": "Ranked Flex"
}

export const RankedInfo = () => {
    const { data: userInfo } = useUserInfo()
    const { data: leagueStats, isLoading } = useQuery<LeagueStats[]>({
        queryKey: ['leagueStats'],
        // @ts-ignore
        queryFn: () => fetchUserStats(userInfo?.id),
        refetchOnWindowFocus: false,
        enabled: !!userInfo?.puuid
  })
  
  return (
    <div className="mt-7 flex flex-col gap-4 w-[400px]">
        {leagueStats?.map((stat) => {
            const calcWinRate = Math.round((stat.wins * 100) / (stat.wins + stat.losses))
            return (
            <div className="bg-[#5D54A1] w-[400px] text-white text-xl p-4 rounded-md inline-block" key={stat.leagueId}>
                <h3>{QUEUE_TYPE[stat.queueType as keyof typeof QUEUE_TYPE]}</h3>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-row items-center gap-2">
                        <img width="98px" height="98px" alt={`${stat.tier} Tier Image`} src={`${TIER_IMAGES[stat.tier as keyof typeof TIER_IMAGES]}`}/>
                        <div className="flex flex-col">
                            <span>{stat.tier} {stat.rank}</span>
                            <span className="opacity-60">{stat.leaguePoints} LP</span>
                        </div>
                    </div>
                    <div className="flex flex-col opacity-70 justify-end items-center">
                        <span>{stat.wins}W / {stat.losses}L</span>
                        <span>{calcWinRate}% Win rate</span>
                    </div>
                </div>
            </div>
            )
        })} 
    </div>
  )
}