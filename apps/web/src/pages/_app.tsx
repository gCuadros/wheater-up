import "@fontsource/manrope/400.css";
import "@fontsource/urbanist/400.css";

import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { client } from "api/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import theme from "ui/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => client);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
