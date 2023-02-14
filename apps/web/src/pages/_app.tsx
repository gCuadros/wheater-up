import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import { useState } from "react";
import { client } from "api/client";
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
