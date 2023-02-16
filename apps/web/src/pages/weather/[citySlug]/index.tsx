import { Box, VStack } from "@chakra-ui/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { cityKey, fetchCity } from "api/hooks/city/useCity";
import {
  cityForecastKey,
  fetchForecastCity,
} from "api/hooks/city/useForecastCity";
import { fetchIp, ipKey } from "api/hooks/ip/useIp";
import City from "containers/City";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  citySlug: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const { citySlug } = params as Params;

  let city;
  try {
    city = await fetchForecastCity({
      queryKey: cityForecastKey({ query: { q: citySlug } }),
      meta: undefined,
    });
  } catch {
    return { notFound: true, revalidate: true };
  }

  queryClient.setQueryData(cityForecastKey({ query: { q: citySlug } }), city);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
const Page = () => {
  return (
    <VStack
      height={{ base: "auto", md: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <City />
    </VStack>
  );
};

export default Page;
