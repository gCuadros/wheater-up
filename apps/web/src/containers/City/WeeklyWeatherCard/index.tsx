import { Box, BoxProps, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { getUrlIconWeather, useDateTime } from "utils";

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
      minW={{ base: "100%", md: "120px" }}
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
      <HStack spacing={0}>
        <Text fontSize="14px" fontWeight="bold" color="#363e64">
          {locationTemperature}
        </Text>
        <Text
          as="span"
          fontSize="7px"
          fontWeight="bold"
          color="#363e64"
          alignSelf="flex-start"
        >
          º
        </Text>
      </HStack>
    </VStack>
  );
};

export default WeeklyWeatherCard;
