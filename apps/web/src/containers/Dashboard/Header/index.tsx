import { HStack, Text, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="flex-start"
      padding="20px"
    >
      <VStack>
        <Text>CurrentTime</Text>
        <Text>CurrentDate</Text>
        <Text>UserName</Text>
      </VStack>
      <Text>darkmodeButton</Text>
    </HStack>
  );
};

export default Header;
