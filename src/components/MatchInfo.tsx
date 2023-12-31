import { useQuery } from "@tanstack/react-query"
import { fetchMatches } from "~/hooks/useMatches"
import { useUserInfo } from "~/hooks/useUserInfo"
import { gameModes } from "~/data/gameModes"
import { summonerSpells } from "~/data/summonerSpells"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import Image from "next/image"
import { runesInfo } from "~/data/runes"
import { Participant } from "~/types/MatchDetails"
dayjs.extend(relativeTime)

const sortPositions = (positions:any) => {
    const sortedPositions = positions.sort((a, b) => {
        let first = a.individualPosition.toLowerCase()
        let second = b.individualPosition.toLowerCase()
        if (first < second) return -1
        if (first > second) return 1
        return 0
    })
    return sortPositions
}

const SummonerSpells = (props: {winCondition: string, spellId: number}) => {
    const spells = props.spellId as keyof typeof summonerSpells
    return (
        <Image 
            width={35} 
            height={35} 
            className={`rounded-md border ${props.winCondition} mt-1`} 
            alt={`${summonerSpells[spells]}`} 
            src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${summonerSpells[spells]}.png`}
        />
    )
}

const SummonerItems = (props: {itemId: number}) => {
    if (props.itemId === 0) return <div className="w-[35px] h-[35px] bg-[#433A87] rounded-md"></div>
    return (
        <Image 
            width={35} 
            height={35} 
            className="rounded-md"
            alt="Summoner item"
            src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${props.itemId}.png`}
        />
    )
}

const SummonerRunes = (props: {runeId: number | undefined}) => {
    const runeImage = runesInfo[props.runeId as keyof typeof runesInfo]
    return (
        <img 
            width={35} 
            height={35} 
            alt="Rune" 
            className="mt-1"
            src={`https://ddragon.canisback.com/img/${runeImage}`}
        />
    )
}

const MatchParticipants = (props: {participants: Participant[]}) => {
    return (
        <div>Hello</div>
    )
}

export const MatchInfo = () => {
    const { data: userInfo } = useUserInfo()
    if (!userInfo) return <h1>nope</h1>
    const { data: matches, isLoading } = useQuery({
      queryKey: ['matches'],
      queryFn: () => fetchMatches(userInfo.puuid),
      refetchOnWindowFocus: false,
      enabled: !!userInfo.puuid
    })
    const summonerItems = ["item0","item1", "item2", "item3", "item4", "item5", "item6"] 

    const calcAvgCSPerMatch = (matchParticipants: Participant[], gameLength: number) => {
        let sumParticipantCS = 0
        for (let participant of matchParticipants) {
            sumParticipantCS += participant.totalMinionsKilled
        }
        return ((sumParticipantCS / matchParticipants.length) / gameLength).toFixed(1)
    }

    return (
        <div className="flex flex-col gap-3 mt-7 ml-3 text-white w-full text-xl">
            {matches?.map((match) => {
                const getGameMode = gameModes[match.info.queueId]
                const getGameLength = Math.floor(match.info.gameDuration / 60)
                const getGamePlayedDate = dayjs(match.info.gameCreation).fromNow()
                const getUserMatchData = match.info.participants.find((user) => user.puuid === userInfo.puuid)
                const checkWinCondition = getUserMatchData?.win ? "border-green-400" : "border-red-500"
                if (!getUserMatchData) return <div>User does not played any matches yet.</div>
                const calcSummonerKDA = (getUserMatchData.kills + getUserMatchData.assists) / getUserMatchData.deaths
                const summonerRunes = getUserMatchData.perks.styles
                const getAvgCS = calcAvgCSPerMatch(match.info.participants, getGameLength)

                return (
                    <div key={match.metadata.matchId} className="p-4 rounded-md bg-[#5D54A1] h-[200px]">
                        <div className="flex flex-row gap-4 items-center">
                            <div>{getGameMode?.type} {getGameMode?.name}</div>
                            <div className="text-sm opacity-70">{getGamePlayedDate} | {getGameLength} min</div>
                        </div>
                        <div className="mt-4 flex flex-row gap-4">
                            <div className="relative">
                                <Image alt={`${getUserMatchData?.championName}'s Image`} width={94} height={94} className={`rounded-full border-4 ${checkWinCondition}`} src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${getUserMatchData?.championName}.png`}/>
                                <div className={`w-8 h-8 rounded-full absolute right-0 top-16 bg-[#433A87] flex justify-center items-center border ${checkWinCondition}`}>{getUserMatchData?.champLevel}</div>
                            </div>
                            <div>
                                <div className="flex flex-row items-center gap-8">
                                    <div className="flex flex-row gap-2 items-center">
                                        <div>
                                            <SummonerSpells spellId={getUserMatchData.summoner1Id} winCondition={checkWinCondition}/>
                                            <SummonerSpells spellId={getUserMatchData.summoner2Id} winCondition={checkWinCondition}/>
                                        </div>
                                        <div>
                                            <SummonerRunes runeId={summonerRunes[0]?.selections[0]?.perk}/>
                                            <SummonerRunes runeId={summonerRunes[1]?.style}/>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-8">
                                        <div className="flex flex-col gap-2 items-center">
                                            <span>{getUserMatchData.kills} / {getUserMatchData.deaths} / {getUserMatchData.assists}</span>
                                            <span className="text-sm opacity-70">{calcSummonerKDA.toFixed(1)} KDA</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span>{getUserMatchData.totalMinionsKilled} ({(getUserMatchData.totalMinionsKilled / getGameLength).toFixed(1)}) CS</span>
                                            <span>AVG ({getAvgCS}) CS</span>
                                        </div>
                                        <div>
                                            <MatchParticipants participants={match.info.participants}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 mt-5">
                                    {summonerItems.map((item) => (
                                        // @ts-expect-error
                                        <SummonerItems key={item} itemId={getUserMatchData[item]}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}