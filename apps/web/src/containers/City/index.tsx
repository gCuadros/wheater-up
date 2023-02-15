import { HStack, Text, VStack } from "@chakra-ui/react";
import { useCurrentForecastCity } from "api/hooks/slug";
import Header from "containers/City/Header";
import Carrousel from "ui/Carrousel";
import Main from "ui/Main";

import WeatherByHourCard from "./WeatherByHourCard";
import WeatherCard from "./WeatherCard";
import WeeklyWeatherCard from "./WeeklyWeatherCard";

const City = () => {
  const { data: cityForecast, isLoading } = useCurrentForecastCity();
  return (
    <Main
      borderRadius="16px"
      spacing={8}
      paddingY="20px"
      backgroundColor="#f0f5ff"
    >
      <Header
        paddingX="20px"
        temperature={cityForecast?.current.temp_c}
        isDay={Boolean(cityForecast?.current.is_day)}
        isLoading={isLoading}
      />
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
          <WeatherCard
            locationName={cityForecast?.location.name}
            locationTime={cityForecast?.location.localtime}
            locationTemperature={cityForecast?.current.temp_c}
            conditionStatus={cityForecast?.current.condition.text}
            wind={cityForecast?.current.wind_kph}
            humidity={cityForecast?.current.humidity}
            weatherCode={cityForecast?.current.condition.code}
            minHeight="365px"
          />
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
            <Carrousel showArrows gap={8}>
              {cityForecast?.forecast.forecastday[0].hour.map((time, index) => (
                <WeatherByHourCard
                  key={index}
                  time={time.time}
                  locationTemperature={time.temp_c}
                  iconUrl={time.condition.icon}
                />
              ))}
            </Carrousel>
          </VStack>
          <VStack width="full" alignItems="flex-start" padding="0px 20px 20px">
            <Text fontSize="14px" fontWeight={600} color="#363e64">
              Weekly Weather
            </Text>
            <Carrousel showArrows gap={8}>
              {cityForecast?.forecast.forecastday.map((day) => (
                <WeeklyWeatherCard key={day.date_epoch} />
              ))}
            </Carrousel>
          </VStack>
        </VStack>
      </HStack>
    </Main>
  );
};

export default City;
