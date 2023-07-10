import { useQuery } from "@tanstack/react-query"
import { fetchMatches } from "~/hooks/useMatches"
import { useUserInfo } from "~/hooks/useUserInfo"
import { gameModes } from "~/data/gameModes"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

export const MatchInfo = () => {
    const { data: userInfo } = useUserInfo()
    if (!userInfo) return <h1>nope</h1>
    const { data: matches, isLoading } = useQuery({
      queryKey: ['matches'],
      queryFn: () => fetchMatches(userInfo.puuid),
      refetchOnWindowFocus: false,
      enabled: !!userInfo.puuid
    })

    return (
        <div className="flex flex-col gap-3 mt-7 ml-3 text-white w-full text-xl">
            {matches?.map((match) => {
                const getGameMode = gameModes[match.info.queueId]
                const getGameLength = Math.floor(match.info.gameDuration / 60)
                const getGamePlayedDate = dayjs(match.info.gameCreation).fromNow()
                const getUserMatchData = match.info.participants.find((user) => user.puuid === userInfo.puuid)
                return (
                    <div key={match.metadata.matchId} className="p-4 rounded-md bg-[#5D54A1] h-[200px]">
                        <div className="flex flex-row gap-4 items-center">
                            <div>{getGameMode?.type} {getGameMode?.name}</div>
                            <div className="text-sm opacity-70">{getGamePlayedDate} | {getGameLength} min</div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}