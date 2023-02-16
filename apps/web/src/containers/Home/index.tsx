import { Button, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { useCurrentIpCity } from "api/hooks/ip/useIp";

import Header from "components/Header";

const Home = () => {
  const { data: cityForecast, isLoading } = useCurrentIpCity();

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/assets/images/weather/rainy.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={{ base: 4, md: 8 }}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Header
          w="full"
          maxW={"2xl"}
          temperature={cityForecast?.current.temp_c}
          isDay={Boolean(cityForecast?.current.is_day)}
          isLoading={isLoading}
        />
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Home;
