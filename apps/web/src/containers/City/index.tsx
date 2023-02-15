import { HStack, Text, VStack } from "@chakra-ui/react";
import Header from "containers/City/Header";
import Carrousel from "ui/Carrousel";
import Main from "ui/Main";
import { useDateTime } from "utils/useDateTime";

import WeatherByHourCard from "./WeatherByHourCard";
import WeatherCard from "./WeatherCard";
import WeeklyWeatherCard from "./WeeklyWeatherCard";

const City = () => {
  const { date, monthName } = useDateTime();
  return (
    <Main
      borderRadius="16px"
      spacing={8}
      paddingY="20px"
      backgroundColor="#f0f5ff"
    >
      <Header paddingX="20px" />
      <HStack justifyContent="space-between" alignItems="flex-start">
        <VStack
          width="full"
          maxWidth={{ base: "100%", md: "350px" }}
          alignItems="flex-start"
          paddingX="20px"
        >
          <Text fontSize="14px" fontWeight={600} color="#363e64">
            Current Weather
          </Text>
          <WeatherCard date={date} monthName={monthName} />
        </VStack>
        <VStack
          width="full"
          height="full"
          justifyContent="space-between"
          overflow="hidden"
        >
          <VStack
            width="full"
            maxW={{ base: "100%", md: "-webkit-fill-available" }}
            alignItems="flex-start"
            paddingX="20px"
          >
            <Text fontSize="14px" fontWeight={600} color="#363e64">
              Weather by hours
            </Text>
            <Carrousel showArrows>
              {[...Array(9)].map((_, i) => (
                <WeatherByHourCard />
              ))}
            </Carrousel>
          </VStack>
          <VStack width="full" alignItems="flex-start" padding="0px 20px 20px">
            <Text fontSize="14px" fontWeight={600} color="#363e64">
              Weekly Weather
            </Text>
            <Carrousel showArrows>
              {[...Array(9)].map((_, i) => (
                <WeeklyWeatherCard />
              ))}
            </Carrousel>
          </VStack>
        </VStack>
      </HStack>
    </Main>
  );
};

export default City;
