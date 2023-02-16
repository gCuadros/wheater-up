import { VStack } from "@chakra-ui/react";
import City from "containers/City";
import { NextSeo } from "next-seo";

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
