import { Box, VStack } from "@chakra-ui/react";
import City from "containers/City";

const Page = () => {
  return (
    <VStack height="100vh" justifyContent="center" alignItems="center">
      <City />
    </VStack>
  );
};

export default Page;
