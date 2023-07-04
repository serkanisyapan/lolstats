import { useQuery } from "@tanstack/react-query"
import { fetchUserStats } from "~/hooks/useLeagueStats"
import { useUserInfo } from "~/hooks/useUserInfo"

export const UserInfo = () => {
    const { data: userInfo } = useUserInfo()
    const { data: leagueStats, isLoading } = useQuery({
        queryKey: ['leagueStats'],
        // @ts-ignore
        queryFn: () => fetchUserStats(userInfo?.id),
        refetchOnWindowFocus: false,
        enabled: !!userInfo?.puuid
  })

    if (!leagueStats || isLoading) return <div>Loading...</div>

    return (
        <div>
            <h2 className="text-white text-2xl">{leagueStats[0]?.wins}</h2>
        </div>
    )
}