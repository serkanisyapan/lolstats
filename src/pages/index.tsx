import Head from "next/head";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchMatches, useMatches } from "~/hooks/useMatches";

export default function Home() {
  const { data, isLoading } = useMatches()
  return (
    <>
      <Head>
        <title>LOL-Stats</title>
        <meta name="description" content="Check your stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b h-screen from-[#2e026d] to-[#15162c]">
        <h1 className="text-2xl text-white text-center pt-5">HELLO LOL-STATS</h1>
        <ul className="text-white text-lg">
          {data?.map((match) => (
            <li key={match.metadata.matchId}>{match.metadata.matchId}</li>
          ))}
        </ul>
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

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}