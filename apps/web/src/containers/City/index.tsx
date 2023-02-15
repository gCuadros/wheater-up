import { HStack, Text, VStack } from "@chakra-ui/react";
import Header from "containers/City/Header";
import Main from "ui/Main";
import { useDateTime } from "utils/useDateTime";
import WeatherByHours from "./WeatherByHours";
import WeatherCard from "./WeatherCard";
import WeeklyWeather from "./WeeklyWeather";

const City = () => {
  const { date, monthName } = useDateTime();
  return (
    <Main borderRadius="16px" spacing={8} paddingY="20px">
      <Header paddingX="20px" />
      <HStack justifyContent="space-between" alignItems="flex-start">
        <VStack
          width="full"
          maxWidth={{ base: "100%", md: "350px" }}
          alignItems="flex-start"
          paddingX="20px"
        >
          <Text fontSize="14px" fontWeight={600}>
            Current Weather
          </Text>
          <WeatherCard date={date} monthName={monthName} />
        </VStack>
        <VStack width="full" height="full" justifyContent="space-between">
          <VStack width="full" alignItems="flex-start" paddingX="20px">
            <Text fontSize="14px" fontWeight={600}>
              Weather by hours
            </Text>
            <WeatherByHours />
          </VStack>
          <VStack width="full" alignItems="flex-start" paddingX="20px">
            <Text fontSize="14px" fontWeight={600}>
              Weekly Weather
            </Text>
            <WeeklyWeather />
          </VStack>
        </VStack>
      </HStack>
    </Main>
  );
};

export default City;
