import { Box, VStack } from "@chakra-ui/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { API_KEY } from "api/fetcher";
import { cityKey, fetchCity } from "api/hooks/city/useCity";
import City from "containers/City";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  citySlug: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const { citySlug } = params as Params;

  let city;

  city = await fetchCity({
    queryKey: cityKey({
      query: { q: citySlug.toLowerCase(), key: API_KEY, days: 7, aqi: "yes" },
    }),
    meta: undefined,
  });

  queryClient.setQueryData(cityKey({ query: { q: citySlug } }), city);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
const Page = () => {
  return (
    <>
      <NextSeo
        title="WeatherUp"
        description="Get the latest weather news and information of your city"
        openGraph={{
          title: "WeatherUp.com",
          description:
            "Get the latest weather news and information on our website: From local conditions to national and global weather patterns",
          images: [
            {
              url: "/assets/logo.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/assets/logo.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "WeatherUp",
        }}
        twitter={{
          site: "@weatherup",
          cardType: "summary_large_image",
        }}
      />
      <VStack
        height={{ base: "auto", md: "100vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <City />
      </VStack>
    </>
  );
};

export default Page;
