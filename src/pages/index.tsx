import Head from "next/head";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { fetchMatches } from "~/hooks/useMatches";
import { UserInfo } from "~/components/UserInfo";
import { fetchUserInfo, useUserInfo } from "~/hooks/useUserInfo";

export default function Home() {
  const { data: userInfo } = useUserInfo()
  if (!userInfo) return <h1>nope</h1>

  const { data: matches, isLoading } = useQuery({
    queryKey: ['matches'],
    queryFn: () => fetchMatches(userInfo.puuid),
    refetchOnWindowFocus: false,
    enabled: !!userInfo.puuid
  })

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
        {<UserInfo/>}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["userInfo"],
    queryFn: () => fetchUserInfo()
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}