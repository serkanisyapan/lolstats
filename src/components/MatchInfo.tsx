import { useQuery } from "@tanstack/react-query"
import { fetchMatches } from "~/hooks/useMatches"
import { useUserInfo } from "~/hooks/useUserInfo"
import { gameModes } from "~/data/gameModes"

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
                return (
                    <div key={match.metadata.matchId} className="p-4 rounded-md bg-[#5D54A1] h-[200px]">
                        <div>{getGameMode?.type} {getGameMode?.name}</div>
                    </div>
                )
            })}
        </div>

    )
}