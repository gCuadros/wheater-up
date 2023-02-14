import { BoxProps, HStack } from "@chakra-ui/react";

interface Props extends BoxProps {}

const WeatherByHours = () => {
  return (
    <HStack
      borderRadius="8px"
      padding="20px"
      width="full"
      border="1px solid"
    ></HStack>
  );
};

export default WeatherByHours;
