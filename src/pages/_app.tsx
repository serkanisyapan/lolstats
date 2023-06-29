import { type AppType } from "next/dist/shared/lib/utils";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import "~/styles/globals.css";
import { useState } from "react";
import { AppProps } from "next/app";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
};

export default MyApp;
