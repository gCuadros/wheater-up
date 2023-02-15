import { Box, BoxProps, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useDateTime } from "utils";

interface Props extends BoxProps {
  time?: Date;
  locationTemperature?: number;
  iconUrl?: string;
}

const WeatherByHourCard = ({
  time,
  locationTemperature,
  iconUrl,
  ...props
}: Props) => {
  const { hours } = useDateTime(time);
  return (
    <VStack
      minWidth={{ base: "100%", md: "120px" }}
      borderRadius="16px"
      border="1px solid #faf9f9"
      padding="20px"
      spacing={4}
      boxShadow="md"
      backgroundColor="white"
      {...props}
    >
      <Text fontSize="16px" fontWeight={600} color="#363e64">
        {hours}
      </Text>
      <Box boxSize="26px">
        <Image src={iconUrl} alt="weather" />
      </Box>
      <HStack spacing={0}>
        <Text fontSize="14px" fontWeight="bold" color="#363e64">
          {locationTemperature}
        </Text>
        <Text
          as="span"
          fontSize="10px"
          fontWeight="bold"
          color="#363e64"
          alignSelf="flex-start"
        >
          º
        </Text>
        <Text
          as="span"
          fontSize="14px"
          fontWeight="bold"
          color="#363e64"
          paddingInlineStart="5px"
        >
          C
        </Text>
      </HStack>
    </VStack>
  );
};

export default WeatherByHourCard;
