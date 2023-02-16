import { VStack } from "@chakra-ui/react";
import City from "containers/City";

const Page = () => {
  return (
    <VStack
      height={{ base: "auto", md: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <City />
    </VStack>
  );
};

export default Page;
