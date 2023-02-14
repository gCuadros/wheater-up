import { BoxProps, HStack } from "@chakra-ui/react";

interface Props extends BoxProps {}

const WeatherCard = () => {
  return (
    <HStack
      borderRadius="8px"
      padding="20px"
      width="full"
      background="linear-gradient(90deg, rgba(119,165,255,1) 0%, rgba(143,181,255,0.5872724089635855) 42%, rgba(182,207,255,1) 100%)"
    ></HStack>
  );
};

export default WeatherCard;
