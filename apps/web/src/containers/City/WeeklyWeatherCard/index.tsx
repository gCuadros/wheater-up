import { Box, BoxProps, Image, Text, VStack } from "@chakra-ui/react";
import { getUrlIconWeather, useDateTime } from "utils";

import Thermometer from "../CityThermometer.tsx";

interface Props extends BoxProps {
  time?: string;
  locationTemperature?: number;
  conditionStatus?: number;
}

const WeeklyWeatherCard = ({
  time,
  locationTemperature,
  conditionStatus,
  ...props
}: Props) => {
  const { dayName } = useDateTime(time);

  return (
    <VStack
      width={{ base: "100px", md: "120px" }}
      borderRadius="16px"
      border="1px solid #faf9f9"
      padding="20px"
      spacing={4}
      boxShadow="md"
      backgroundColor="white"
      {...props}
    >
      <Box boxSize="50px">
        <Image src={getUrlIconWeather(conditionStatus)} alt="weather" />
      </Box>
      <Text fontSize="14px" fontWeight={600} color="#363e64">
        {dayName}
      </Text>
      <Thermometer
        temperature={locationTemperature}
        temperatureTextSize="14px"
        degreeTextSize="10px"
        textColor="#363e64"
      />
    </VStack>
  );
};

export default WeeklyWeatherCard;
