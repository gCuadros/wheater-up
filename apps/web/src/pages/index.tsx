import { dehydrate, QueryClient } from "@tanstack/react-query";
import { cityKey, fetchCity } from "api/hooks/city/useCity";
import { fetchIp, ipKey } from "api/hooks/ip/useIp";
import Home from "containers/Home";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  const citybyIp = await fetchIp({
    queryKey: ipKey(),
    meta: undefined,
  });

  const city = await fetchCity({
    queryKey: cityKey({
      query: { q: citybyIp.city },
    }),
    meta: undefined,
  });
  queryClient.setQueryData(
    cityKey({
      query: { q: citybyIp.city },
    }),
    city
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Page = () => (
  <>
    <NextSeo
      title="WeatherUp"
      description="Get the latest weather news and information"
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
    <Home />
  </>
);

export default Page;
