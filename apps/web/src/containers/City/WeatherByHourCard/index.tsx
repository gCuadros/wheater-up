import { AiFillCloud } from "react-icons/ai";
import { BoxProps, HStack, Text, VStack } from "@chakra-ui/react";

interface Props extends BoxProps {}

const WeatherByHourCard = () => {
  return (
    <VStack
      minWidth={{ base: "100%", md: "120px" }}
      borderRadius="16px"
      border="1px solid #faf9f9"
      padding="20px"
      spacing={4}
      boxShadow="md"
      backgroundColor="white"
    >
      <Text fontSize="14px" fontWeight={600} color="#363e64">
        10AM
      </Text>
      <AiFillCloud color="#363e64" fontSize="26px" fontWeight={600} />
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

export default WeatherByHourCard;
