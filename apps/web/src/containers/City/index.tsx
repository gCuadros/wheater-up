import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useCurrentForecastCity } from "api/hooks/slug";
import Link from "next/link";
import Main from "ui/Main";

import Carrousel from "components/Carrousel";
import WeatherByHourCard from "components/City/WeatherByHourCard";
import WeatherCard from "components/City/WeatherCard";
import WeeklyWeatherCard from "components/City/WeeklyWeatherCard";
import Header from "components/Header";

const City = () => {
  const { data: cityForecast, isLoading } = useCurrentForecastCity();

  return (
    <Main
      borderRadius={{ base: "0", md: "16px" }}
      spacing={8}
      paddingY="20px"
      backgroundColor="#f0f5ff"
      position="relative"
    >
      <HStack padding="20px" position="absolute" top="0px">
        <Link href="/">
          <Box boxSize="25px" borderRadius="50%" border="1px solid #1A202C">
            <Image src="/assets/logo.png" alt="logo" />
          </Box>
        </Link>
        <Text fontSize="12px" fontWeight={500}>
          WeatherUp
        </Text>
      </HStack>

      <Header
        paddingX="20px"
        temperature={cityForecast?.current.temp_c}
        isDay={Boolean(cityForecast?.current.is_day)}
        isLoading={isLoading}
      />
      <Stack
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
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
            locationRegion={cityForecast?.location.region}
            locationCountry={cityForecast?.location.country}
            locationTime={cityForecast?.location.localtime}
            locationTemperature={cityForecast?.current.temp_c}
            conditionStatus={cityForecast?.current.condition.text}
            wind={cityForecast?.current.wind_kph}
            humidity={cityForecast?.current.humidity}
            weatherCode={cityForecast?.current.condition.code}
            maxHeight={{ base: "full", md: "365px" }}
            minHeight={{ base: "auto", md: "365px" }}
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
            <Carrousel showArrows gap={{ base: 4, md: 8 }}>
              {cityForecast?.forecast.forecastday[0].hour.map((time, index) => (
                <WeatherByHourCard
                  key={`hour-${index}`}
                  time={time.time}
                  locationTemperature={time.temp_c}
                  iconUrl={time.condition.icon}
                />
              ))}
            </Carrousel>
          </VStack>
          <VStack width="full" alignItems="flex-start" paddingX="20px">
            <Text fontSize="14px" fontWeight={600} color="#363e64">
              Weekly Weather
            </Text>
            <Carrousel showArrows gap={{ base: 4, md: 8 }}>
              {cityForecast?.forecast.forecastday.map((day, index) => (
                <WeeklyWeatherCard
                  key={`day-${index}`}
                  time={day.date}
                  locationTemperature={day.day.avgtemp_c}
                  conditionStatus={day.day.condition.code}
                />
              ))}
            </Carrousel>
          </VStack>
        </VStack>
      </Stack>
    </Main>
  );
};

export default City;
