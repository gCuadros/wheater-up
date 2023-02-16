import { MdOutlineWaterDrop } from "react-icons/md";
import { SiWindicss } from "react-icons/si";
import { TiLocationOutline } from "react-icons/ti";
import {
  Box,
  BoxProps,
  Divider,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getUrlIconWeather, useDateTime } from "utils";

import Thermometer from "components/City/CityThermometer.tsx";

interface Props extends BoxProps {
  locationTime?: string;
  locationName?: string;
  locationRegion?: string;
  locationCountry?: string;
  locationTemperature?: number;
  conditionStatus?: string;
  wind?: number;
  humidity?: number;
  weatherCode?: number;
}

const WeatherCard = ({
  locationTime,
  locationName,
  locationRegion,
  locationCountry,
  locationTemperature,
  conditionStatus,
  wind,
  humidity,
  weatherCode,
  ...props
}: Props) => {
  const { date, monthName } = useDateTime(locationTime);
  return (
    <VStack
      borderRadius="16px"
      padding="20px"
      width="full"
      height="full"
      backgroundColor="#3c3c3cba"
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      spacing={{ base: 2, md: 4 }}
      {...props}
    >
      <HStack
        width="full"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <Icon
          as={TiLocationOutline}
          color="white"
          fontSize="18px"
          fontWeight={600}
          position="relative"
          top="3px"
        />

        <VStack spacing={0} alignItems="flex-start">
          <Text
            color="white"
            fontSize="16px"
            fontWeight={600}
            textShadow="dark-lg"
          >
            {locationName}
          </Text>
          <Text
            color="white"
            opacity={0.8}
            fontSize="10px"
            fontWeight={600}
            textShadow="dark-lg"
          >
            {locationRegion}, {locationCountry}
          </Text>
        </VStack>
      </HStack>
      <Box boxSize={{ base: "50px", md: "100px" }}>
        <Image src={getUrlIconWeather(weatherCode)} alt="weather" />
      </Box>
      <Text color="white" fontSize="12px" fontWeight={400} textShadow="dark-lg">
        Today, {date} {monthName}
      </Text>
      <Thermometer
        temperature={locationTemperature}
        temperatureTextSize="20px"
        degreeTextSize="12px"
        textColor="white"
      />
      <VStack width="full" maxWidth="150px" spacing={2} alignItems="center">
        {conditionStatus && (
          <Text
            color="white"
            fontSize="16px"
            fontWeight={600}
            textShadow="dark-lg"
          >
            {conditionStatus}
          </Text>
        )}
        {wind && (
          <HStack width="full" spacing={4}>
            <HStack>
              <SiWindicss color="white" fontSize="12px" fontWeight={600} />
              <Text
                color="white"
                fontSize="12px"
                fontWeight={400}
                textShadow="dark-lg"
              >
                Wind
              </Text>
            </HStack>

            <Divider orientation="vertical" height="12px" />
            <Text
              color="white"
              fontSize="12px"
              fontWeight={400}
              textShadow="dark-lg"
            >
              {wind} km/h
            </Text>
          </HStack>
        )}
        {humidity && (
          <HStack width="full" spacing={4}>
            <HStack>
              <MdOutlineWaterDrop
                color="white"
                fontSize="12px"
                fontWeight={600}
              />
              <Text
                color="white"
                fontSize="12px"
                fontWeight={400}
                textShadow="dark-lg"
              >
                Hum
              </Text>
            </HStack>

            <Divider orientation="vertical" height="12px" />
            <Text
              color="white"
              fontSize="12px"
              fontWeight={400}
              textShadow="dark-lg"
            >
              {humidity} %
            </Text>
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};

export default WeatherCard;
