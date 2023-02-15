import { Box, BoxProps, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface Props extends BoxProps {}

const WeeklyWeatherCard = () => {
  return (
    <VStack
      minW={{ base: "100%", md: "120px" }}
      borderRadius="16px"
      border="1px solid #faf9f9"
      padding="20px"
      spacing={4}
      boxShadow="md"
      backgroundColor="white"
    >
      <Box boxSize="50px">
        <Image src="/assets/icons/weather/sun.png" alt="weather" />
      </Box>
      <Text fontSize="14px" fontWeight={600} color="#363e64">
        Wed
      </Text>
      <HStack spacing={0}>
        <Text fontSize="14px" fontWeight="bold" color="#363e64">
          9
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
