import { Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { useCurrentIpCity } from "api/hooks/ip/useIp";

import Header from "components/Header";
import WeatherCard from "components/Home/WeatherCard";

const Home = () => {
  const { data: currentCity, isLoading } = useCurrentIpCity();

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/assets/images/weather/sunset.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={{ base: "flex-star", md: "center" }}
        padding="20px"
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        spacing={4}
      >
        <Header
          w="full"
          maxW={"3xl"}
          temperature={currentCity?.current.temp_c}
          isDay={Boolean(currentCity?.current.is_day)}
          isLoading={isLoading}
        />
        <Stack maxW={"3xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: "1xl", md: "2xl" }}
          >
            Get the latest weather news and information on our website. From
            local conditions to national and global weather patterns.
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: "1xl", md: "2xl" }}
          >
            We bring you the latest updates and insights to help you make
            informed decisions about your day-to-day activities.
          </Text>
          <WeatherCard
            locationName={currentCity?.location.name}
            locationRegion={currentCity?.location.region}
            locationCountry={currentCity?.location.country}
            locationTime={currentCity?.location.localtime}
            locationTemperature={currentCity?.current.temp_c}
            conditionStatus={currentCity?.current.condition.text}
            wind={currentCity?.current.wind_kph}
            humidity={currentCity?.current.humidity}
            weatherCode={currentCity?.current.condition.code}
          />
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Home;
