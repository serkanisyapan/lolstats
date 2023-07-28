import Head from "next/head";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { UserInfo } from "~/components/UserInfo";
import { fetchUserInfo, useUserInfo } from "~/hooks/useUserInfo";
import { RankedInfo } from "~/components/RankedInfo";
import { MatchInfo } from "~/components/MatchInfo";

export default function Home() {
  return (
    <div className="flex justify-center bg-[#433A87]">
      <Head>
        <title>LOL-Stats</title>
        <meta name="description" content="Check your stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-3/4 h-full">
        <UserInfo/>
        <div className="flex flex-row justify-between">
          <RankedInfo/>
          <MatchInfo/>
        </div>
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