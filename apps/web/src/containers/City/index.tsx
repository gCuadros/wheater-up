import { Text, VStack } from "@chakra-ui/react";
import Header from "containers/City/Header";
import Main from "ui/Main";
import WeatherByHours from "./WeatherByHours";
import WeatherCard from "./WeatherCard";
import WeeklyWeather from "./WeeklyWeather";

const City = () => {
  return (
    <Main borderRadius="16px" spacing={12} paddingY="20px">
      <Header paddingX="20px" />
      <VStack alignItems="flex-start" paddingX="20px">
        <Text>Current Weather</Text>
        <WeatherCard />
      </VStack>
      <VStack alignItems="flex-start" paddingX="20px">
        <Text>Weather by hours</Text>
        <WeatherByHours />
      </VStack>
      <VStack alignItems="flex-start" paddingX="20px">
        <Text>Weekly Weather</Text>
        <WeeklyWeather />
      </VStack>
    </Main>
  );
};

export default City;
