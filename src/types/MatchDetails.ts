    export interface MatchInfo {
        info: MatchDetail;
        metadata: {
            dataVersion: string,
            matchId: string,
            participants: string[]

        }
    }

    export interface MatchDetail {
        /**
         * Match map ID
         */
        mapId: number;
        /**
         * Match creation time. Designates when the team select lobby is created and/or the match is made through match making, not when the game actually starts.
         */
        gameCreation: number;
        /**
         * Match duration
         */
        gameDuration: number;
        /**
         * ID of the match
         */
        gameEndTimeStamp: number;
        gameId: number;
        gameName: string;
        gameStartTimeStamp: number;
        /**
         * Match mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
         */
        gameMode: string;
        /**
         * Match type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
         */
        gameType: string;
        /**
         * Match version
         */
        gameVersion: string;
        /**
         * Participant information
         */
        participants: Participant[];
        /**
         * Platform ID of the match
         */
        platformId: string;
        /**
         * Match queue type (Legal values: CUSTOM, NORMAL_5x5_BLIND, RANKED_SOLO_5x5, RANKED_PREMADE_5x5, BOT_5x5, NORMAL_3x3, RANKED_PREMADE_3x3, NORMAL_5x5_DRAFT, ODIN_5x5_BLIND, ODIN_5x5_DRAFT, BOT_ODIN_5x5, BOT_5x5_INTRO, BOT_5x5_BEGINNER, BOT_5x5_INTERMEDIATE, RANKED_TEAM_3x3, RANKED_TEAM_5x5, BOT_TT_3x3, GROUP_FINDER_5x5, ARAM_5x5, ONEFORALL_5x5, FIRSTBLOOD_1x1, FIRSTBLOOD_2x2, SR_6x6, URF_5x5, ONEFORALL_MIRRORMODE_5x5, BOT_URF_5x5, NIGHTMARE_BOT_5x5_RANK1, NIGHTMARE_BOT_5x5_RANK2, NIGHTMARE_BOT_5x5_RANK5, ASCENSION_5x5, HEXAKILL, KING_PORO_5x5, COUNTER_PICK)
         */
        queueId: number;
        /**
         * Team information
         */
        teams: Team[];
    }

    export interface Participant {
        /**
         * Champion ID
         */
        championId: number;
        /**
         * Highest ranked tier achieved for the previous season, if any, otherwise null. Used to display border in game loading screen. (Legal values: CHALLENGER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE, UNRANKED)
         */
        highestAchievedSeasonTier: string;
        /**
         * List of mastery information
         */
        masteries: Mastery[];
        /**
         * Participant ID
         */
        participantId: number;
        /**
         * List of rune information
         */
        runes: Rune[];
        /**
         * First summoner spell ID
         */
        spell1Id: number;
        /**
         * Second summoner spell ID
         */
        spell2Id: number;
        /**
         * Participant statistics
         */
        stats: ParticipantStats;
        /**
         * Team ID
         */
        teamId: number;
        /**
         * Timeline data. Delta fields refer to values for the specified period (e.g., the gold per minute over the first 10 minutes of the game versus the second 20 minutes of the game. Diffs fields refer to the deltas versus the calculated lane opponent(s).
         */
        timeline: ParticipantTimeline;
    }

    export interface ParticipantIdentity {
        /**
         * Participant ID
         */
        participantId: number;
        /**
         * Player information
         */
        player: Player;
    }

    export interface Team {
        /**
         * If game was draft mode, contains banned champion data, otherwise null
         */
        bans: BannedChampion[];
        /**
         * Number of times the team killed baron
         */
        baronKills: number;
        /**
         * If game was a dominion game, specifies the points the team had at game end, otherwise null
         */
        dominionVictoryScore: number;
        /**
         * Number of times the team killed dragon
         */
        dragonKills: number;
        /**
         * Flag indicating whether or not the team got the first baron kill
         */
        firstBaron: boolean;
        /**
         * Flag indicating whether or not the team got first blood
         */
        firstBlood: boolean;
        /**
         * Flag indicating whether or not the team got the first dragon kill
         */
        firstDragon: boolean;
        /**
         * Flag indicating whether or not the team destroyed the first inhibitor
         */
        firstInhibitor: boolean;
        /**
         * Flag indicating whether or not the team got the first rift herald kill
         */
        firstRiftHerald: boolean;
        /**
         * Flag indicating whether or not the team destroyed the first tower
         */
        firstTower: boolean;
        /**
         * Number of inhibitors the team destroyed
         */
        inhibitorKills: number;
        /**
         * Team ID
         */
        teamId: number;
        /**
         * Number of towers the team destroyed
         */
        towerKills: number;
        /**
         * Number of times the team killed vilemaw
         */
        vilemawKills: number;
        /**
         * Flag indicating whether or not the team won
         */
        winner: boolean;
    }

    export interface Timeline {
        /**
         * Time between each returned frame in milliseconds.
         */
        frameInterval: number;
        /**
         * List of timeline frames for the game.
         */
        frames: Frame[];
    }

    /**
     * Contains mastery information.
     */
    export interface Mastery {
        /**
         * Mastery ID
         */
        masteryId: number;
        /**
         * Mastery rank
         */
        rank: number;
    }

    /**
     * Contains participant statistics information.
     */
    export interface ParticipantStats {
        /**
         * Number of assists
         */
        assists: number;
        /**
         * Champion level achieved
         */
        champLevel: number;
        /**
         * If game was a dominion game, player's combat score, otherwise 0
         */
        combatPlayerScore: number;
        /**
         * Number of deaths
         */
        deaths: number;
        /**
         * Number of double kills
         */
        doubleKills: number;
        /**
         * Flag indicating if participant got an assist on first blood
         */
        firstBloodAssist: boolean;
        /**
         * Flag indicating if participant got first blood
         */
        firstBloodKill: boolean;
        /**
         * Flag indicating if participant got an assist on the first inhibitor
         */
        firstInhibitorAssist: boolean;
        /**
         * Flag indicating if participant destroyed the first inhibitor
         */
        firstInhibitorKill: boolean;
        /**
         * Flag indicating if participant got an assist on the first tower
         */
        firstTowerAssist: boolean;
        /**
         * Flag indicating if participant destroyed the first tower
         */
        firstTowerKill: boolean;
        /**
         * Gold earned
         */
        goldEarned: number;
        /**
         * Gold spent
         */
        goldSpent: number;
        /**
         * Number of inhibitor kills
         */
        inhibitorKills: number;
        /**
         * First item ID
         */
        item0: number;
        /**
         * Second item ID
         */
        item1: number;
        /**
         * Third item ID
         */
        item2: number;
        /**
         * Fourth item ID
         */
        item3: number;
        /**
         * Fifth item ID
         */
        item4: number;
        /**
         * Sixth item ID
         */
        item5: number;
        /**
         * Seventh item ID
         */
        item6: number;
        /**
         * Number of killing sprees
         */
        killingSprees: number;
        /**
         * Number of kills
         */
        kills: number;
        /**
         * Largest critical strike
         */
        largestCriticalStrike: number;
        /**
         * Largest killing spree
         */
        largestKillingSpree: number;
        /**
         * Largest multi kill
         */
        largestMultiKill: number;
        /**
         * Magical damage dealt
         */
        magicDamageDealt: number;
        /**
         * Magical damage dealt to champions
         */
        magicDamageDealtToChampions: number;
        /**
         * Magic damage taken
         */
        magicDamageTaken: number;
        /**
         * Minions killed
         */
        minionsKilled: number;
        /**
         * Neutral minions killed
         */
        neutralMinionsKilled: number;
        /**
         * Neutral jungle minions killed in the enemy team's jungle
         */
        neutralMinionsKilledEnemyJungle: number;
        /**
         * Neutral jungle minions killed in your team's jungle
         */
        neutralMinionsKilledTeamJungle: number;
        /**
         * If game was a dominion game, number of node captures
         */
        nodeCapture: number;
        /**
         * If game was a dominion game, number of node capture assists
         */
        nodeCaptureAssist: number;
        /**
         * If game was a dominion game, number of node neutralizations
         */
        nodeNeutralize: number;
        /**
         * If game was a dominion game, number of node neutralization assists
         */
        nodeNeutralizeAssist: number;
        /**
         * If game was a dominion game, player's objectives score, otherwise 0
         */
        objectivePlayerScore: number;
        /**
         * Number of penta kills
         */
        pentaKills: number;
        /**
         * Physical damage dealt
         */
        physicalDamageDealt: number;
        /**
         * Physical damage dealt to champions
         */
        physicalDamageDealtToChampions: number;
        /**
         * Physical damage taken
         */
        physicalDamageTaken: number;
        /**
         * Number of quadra kills
         */
        quadraKills: number;
        /**
         * Sight wards purchased
         */
        sightWardsBoughtInGame: number;
        /**
         * If game was a dominion game, number of completed team objectives (i.e., quests)
         */
        teamObjective: number;
        /**
         * Total damage dealt
         */
        totalDamageDealt: number;
        /**
         * Total damage dealt to champions
         */
        totalDamageDealtToChampions: number;
        /**
         * Total damage taken
         */
        totalDamageTaken: number;
        /**
         * Total heal amount
         */
        totalHeal: number;
        /**
         * If game was a dominion game, player's total score, otherwise 0
         */
        totalPlayerScore: number;
        /**
         * If game was a dominion game, team rank of the player's total score (e.g., 1-5)
         */
        totalScoreRank: number;
        /**
         * Total dealt crowd control time
         */
        totalTimeCrowdControlDealt: number;
        /**
         * Total units healed
         */
        totalUnitsHealed: number;
        /**
         * Number of tower kills
         */
        towerKills: number;
        /**
         * Number of triple kills
         */
        tripleKills: number;
        /**
         * True damage dealt
         */
        trueDamageDealt: number;
        /**
         * True damage dealt to champions
         */
        trueDamageDealtToChampions: number;
        /**
         * True damage taken
         */
        trueDamageTaken: number;
        /**
         * Number of unreal kills
         */
        unrealKills: number;
        /**
         * Vision wards purchased
         */
        visionWardsBoughtInGame: number;
        /**
         * Number of wards killed
         */
        wardsKilled: number;
        /**
         * Number of wards placed
         */
        wardsPlaced: number;
        /**
         * Flag indicating whether or not the participant won
         */
        winner: boolean;
    }

    export interface ParticipantTimeline {
        /**
         * Ancient golem assists per minute timeline counts
         */
        ancientGolemAssistsPerMinCounts: ParticipantTimelineData;
        /**
         * Ancient golem kills per minute timeline counts
         */
        ancientGolemKillsPerMinCounts: ParticipantTimelineData;
        /**
         * Assisted lane deaths per minute timeline data
         */
        assistedLaneDeathsPerMinDeltas: ParticipantTimelineData;
        /**
         * Assisted lane kills per minute timeline data
         */
        assistedLaneKillsPerMinDeltas: ParticipantTimelineData;
        /**
         * Baron assists per minute timeline counts
         */
        baronAssistsPerMinCounts: ParticipantTimelineData;
        /**
         * Baron kills per minute timeline counts
         */
        baronKillsPerMinCounts: ParticipantTimelineData;
        /**
         * Creeps per minute timeline data
         */
        creepsPerMinDeltas: ParticipantTimelineData;
        /**
         * Creep score difference per minute timeline data
         */
        csDiffPerMinDeltas: ParticipantTimelineData;
        /**
         * Damage taken difference per minute timeline data
         */
        damageTakenDiffPerMinDeltas: ParticipantTimelineData;
        /**
         * Damage taken per minute timeline data
         */
        damageTakenPerMinDeltas: ParticipantTimelineData;
        /**
         * Dragon assists per minute timeline counts
         */
        dragonAssistsPerMinCounts: ParticipantTimelineData;
        /**
         * Dragon kills per minute timeline counts
         */
        dragonKillsPerMinCounts: ParticipantTimelineData;
        /**
         * Elder lizard assists per minute timeline counts
         */
        elderLizardAssistsPerMinCounts: ParticipantTimelineData;
        /**
         * Elder lizard kills per minute timeline counts
         */
        elderLizardKillsPerMinCounts: ParticipantTimelineData;
        /**
         * Gold per minute timeline data
         */
        goldPerMinDeltas: ParticipantTimelineData;
        /**
         * Inhibitor assists per minute timeline counts
         */
        inhibitorAssistsPerMinCounts: ParticipantTimelineData;
        /**
         * Inhibitor kills per minute timeline counts
         */
        inhibitorKillsPerMinCounts: ParticipantTimelineData;
        /**
         * Participant's lane (Legal values: MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM)
         */
        lane: string;
        /**
         * Participant's role (Legal values: DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT)
         */
        role: string;
        /**
         * Tower assists per minute timeline counts
         */
        towerAssistsPerMinCounts: ParticipantTimelineData;
        /**
         * Tower kills per minute timeline counts
         */
        towerKillsPerMinCounts: ParticipantTimelineData;
        /**
         * Tower kills per minute timeline data
         */
        towerKillsPerMinDeltas: ParticipantTimelineData;
        /**
         * Vilemaw assists per minute timeline counts
         */
        vilemawAssistsPerMinCounts: ParticipantTimelineData;
        /**
         * Vilemaw kills per minute timeline counts
         */
        vilemawKillsPerMinCounts: ParticipantTimelineData;
        /**
         * Wards placed per minute timeline data
         */
        wardsPerMinDeltas: ParticipantTimelineData;
        /**
         * Experience difference per minute timeline data
         */
        xpDiffPerMinDeltas: ParticipantTimelineData;
        /**
         * Experience per minute timeline data
         */
        xpPerMinDeltas: ParticipantTimelineData;
    }

    export interface Rune {
        /**
         * Rune rank
         */
        rank: number;
        /**
         * Rune ID
         */
        runeId: number;
    }

    /**
     * Contains match player information.
     */
    export interface Player {
        /**
         * Match history URI
         */
        matchHistoryUri: string;
        /**
         * Profile icon ID
         */
        profileIcon: number;
        /**
         * Summoner ID
         */
        summonerId: number;
        /**
         * Summoner name
         */
        summonerName: string;
    }

    /**
     * Contains information about banned champions.
     */
    export interface BannedChampion {
        /**
         * Banned champion ID
         */
        championId: number;
        /**
         * Turn during which the champion was banned
         */
        pickTurn: number;
    }

    /**
     * Contains contains game frame information.
     */
    export interface Frame {
        /**
         * List of events for this frame.
         */
        events: Event[];
        /**
         * Map of each participant ID to the participant's information for the frame.
         */
        participantFrames: { [s: string]: ParticipantFrame; };
        /**
         * Represents how many milliseconds into the game the frame occurred.
         */
        timestamp: number;
    }

    /**
     * Contains timeline data.
     */
    export interface ParticipantTimelineData {
        /**
         * Value per minute from 10 min to 20 min
         */
        tenToTwenty: number;
        /**
         * Value per minute from 30 min to the end of the game
         */
        thirtyToEnd: number;
        /**
         * Value per minute from 20 min to 30 min
         */
        twentyToThirty: number;
        /**
         * Value per minute from the beginning of the game to 10 min
         */
        zeroToTen: number;
    }

    export interface Event {
        /**
         * The ascended type of the event. Only present if relevant. Note that CLEAR_ASCENDED refers to when a participants kills the ascended player. (Legal values: CHAMPION_ASCENDED, CLEAR_ASCENDED, MINION_ASCENDED)
         */
        ascendedType: string;
        /**
         * The assisting participant IDs of the event. Only present if relevant.
         */
        assistingParticipantIds: number[];
        /**
         * The building type of the event. Only present if relevant. (Legal values: INHIBITOR_BUILDING, TOWER_BUILDING)
         */
        buildingType: string;
        /**
         * The creator ID of the event. Only present if relevant.
         */
        creatorId: number;
        /**
         * Event type. (Legal values: ASCENDED_EVENT, BUILDING_KILL, CAPTURE_POINT, CHAMPION_KILL, ELITE_MONSTER_KILL, ITEM_DESTROYED, ITEM_PURCHASED, ITEM_SOLD, ITEM_UNDO, PORO_KING_SUMMON, SKILL_LEVEL_UP, WARD_KILL, WARD_PLACED)
         */
        eventType: string;
        /**
         * The ending item ID of the event. Only present if relevant.
         */
        itemAfter: number;
        /**
         * The starting item ID of the event. Only present if relevant.
         */
        itemBefore: number;
        /**
         * The item ID of the event. Only present if relevant.
         */
        itemId: number;
        /**
         * The killer ID of the event. Only present if relevant. Killer ID 0 indicates a minion.
         */
        killerId: number;
        /**
         * The lane type of the event. Only present if relevant. (Legal values: BOT_LANE, MID_LANE, TOP_LANE)
         */
        laneType: string;
        /**
         * The level up type of the event. Only present if relevant. (Legal values: EVOLVE, NORMAL)
         */
        levelUpType: string;
        /**
         * The monster type of the event. Only present if relevant. (Legal values: BARON_NASHOR, BLUE_GOLEM, DRAGON, RED_LIZARD, VILEMAW, RIFTHERALD)
         */
        monsterType: string;
        /**
         * The participant ID of the event. Only present if relevant.
         */
        participantId: number;
        /**
         * The point captured in the event. Only present if relevant. (Legal values: POINT_A, POINT_B, POINT_C, POINT_D, POINT_E)
         */
        pointCaptured: string;
        /**
         * The position of the event. Only present if relevant.
         */
        position: Position;
        /**
         * The skill slot of the event. Only present if relevant.
         */
        skillSlot: number;
        /**
         * The team ID of the event. Only present if relevant.
         */
        teamId: number;
        /**
         * Represents how many milliseconds into the game the event occurred.
         */
        timestamp: number;
        /**
         * The tower type of the event. Only present if relevant. (Legal values: BASE_TURRET, FOUNTAIN_TURRET, INNER_TURRET, NEXUS_TURRET, OUTER_TURRET, UNDEFINED_TURRET)
         */
        towerType: string;
        /**
         * The victim ID of the event. Only present if relevant.
         */
        victimId: number;
        /**
         * The ward type of the event. Only present if relevant. (Legal values: SIGHT_WARD, TEEMO_MUSHROOM, UNDEFINED, VISION_WARD, YELLOW_TRINKET, YELLOW_TRINKET_UPGRADE)
         */
        wardType: string;
    }

    /**
     * Contains participant frame information.
     */
    export interface ParticipantFrame {
        /**
         * Participant's current gold
         */
        currentGold: number;
        /**
         * Dominion score of the participant
         */
        dominionScore: number;
        /**
         * Number of jungle minions killed by participant
         */
        jungleMinionsKilled: number;
        /**
         * Participant's current level
         */
        level: number;
        /**
         * Number of minions killed by participant
         */
        minionsKilled: number;
        /**
         * Participant ID
         */
        participantId: number;
        /**
         * Participant's position
         */
        position: Position;
        /**
         * Team score of the participant
         */
        teamScore: number;
        /**
         * Participant's total gold
         */
        totalGold: number;
        /**
         * Experience earned by participant
         */
        xp: number;
    }

    /**
     * Contains participant frame position information.
     */
    export interface Position {
        /**
         *
         */
        x: number;
        /**
         *
         */
        y: number;
    }