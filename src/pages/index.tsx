import Head from "next/head";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { fetchMatches } from "~/hooks/useMatches";
import { UserInfo } from "~/components/UserInfo";
import { fetchUserInfo, useUserInfo } from "~/hooks/useUserInfo";
import { RankedInfo } from "~/components/RankedInfo";

export default function Home() {
  const { data: userInfo } = useUserInfo()
  if (!userInfo) return <h1>nope</h1>
  // const { data: matches, isLoading } = useQuery({
  //   queryKey: ['matches'],
  //   queryFn: () => fetchMatches(userInfo.puuid),
  //   refetchOnWindowFocus: false,
  //   enabled: !!userInfo.puuid
  // })

  return (
    <div className="flex justify-center bg-[#433A87] h-screen">
      <Head>
        <title>LOL-Stats</title>
        <meta name="description" content="Check your stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-3/4">
        <UserInfo/>
        <RankedInfo/>
      </main>
    </div>
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