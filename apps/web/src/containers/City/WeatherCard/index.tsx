import { MdOutlineWaterDrop } from "react-icons/md";
import { SiWindicss } from "react-icons/si";
import { TiLocationOutline } from "react-icons/ti";
import {
  Box,
  BoxProps,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getUrlIconWeather, useDateTime } from "utils";

interface Props extends BoxProps {
  locationTime?: number;
  locationName?: string;
  locationTemperature?: number;
  conditionStatus?: string;
  wind?: number;
  humidity?: number;
  weatherCode?: number;
}

const WeatherCard = ({
  locationTime,
  locationName,
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
      background="linear-gradient(to bottom right, #94A3DD, #1D83FF)"
      spacing={4}
      {...props}
    >
      <HStack
        width="full"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
        <TiLocationOutline color="white" fontSize="20px" fontWeight={600} />
        <Text
          color="white"
          fontSize="16px"
          fontWeight={600}
          textShadow="dark-lg"
        >
          {locationName}
        </Text>
      </HStack>
      <Box boxSize="100px">
        <Image src={getUrlIconWeather(weatherCode)} alt="weather" />
      </Box>
      <Text color="white" fontSize="12px" fontWeight={400} textShadow="dark-lg">
        Today, {date} {monthName}
      </Text>
      {locationTemperature && (
        <HStack spacing={0}>
          <Text fontSize="20px" fontWeight="bold" color="white">
            {locationTemperature}
          </Text>
          <Text
            as="span"
            fontSize="12px"
            fontWeight="bold"
            color="white"
            alignSelf="flex-start"
          >
            º
          </Text>
          <Text
            as="span"
            fontSize="20px"
            fontWeight="bold"
            color="white"
            paddingInlineStart="5px"
          >
            C
          </Text>
        </HStack>
      )}

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
