import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LOL-Stats</title>
        <meta name="description" content="Check your stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b h-screen from-[#2e026d] to-[#15162c]">
        <h1 className="text-2xl text-white text-center pt-5">HELLO LOL-STATS</h1>
      </main>
    </>
  );
}