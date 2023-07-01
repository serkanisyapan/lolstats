import Head from "next/head";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchMatches, useMatches } from "~/hooks/useMatches";
import { fetchUserStats, useLeagueStats } from "~/hooks/useLeagueStats";

export default function Home() {
  const { data: matches, isLoading } = useMatches()
  const { data: leagueStats } = useLeagueStats()
  return (
    <>
      <Head>
        <title>LOL-Stats</title>
        <meta name="description" content="Check your stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#433A87] h-screen">
        <h1 className="text-2xl text-white text-center pt-5">HELLO LOL-STATS</h1>
        <ul className="text-white text-lg">
          {matches?.map((match) => (
            <li key={match.metadata.matchId}>{match.metadata.matchId}</li>
          ))}
        </ul>
        {leagueStats && <h1 className="text-white text-2xl">{leagueStats[0]?.tier}</h1>}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["matches"],
    queryFn: () => fetchMatches(),
  })

  await queryClient.prefetchQuery({
    queryKey: ["leagueStats"],
    queryFn: () => fetchUserStats()
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}