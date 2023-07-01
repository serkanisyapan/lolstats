export interface LeagueStats {
    leagueId: string,
    queueType: string,
    tier: string,
    rank: string,
    summonerId: string,
    summonerName: string,
    keaguePoints: number,
    wins: number,
    losses: number,
    veteran: boolean,
    inactive: boolean,
    freshBlood: boolean,
    hotStreak: boolean,
    miniSeries?: MiniSeries
}

export interface MiniSeries {
    target: number,
    wins: number,
    losses: number,
    progress: string
}