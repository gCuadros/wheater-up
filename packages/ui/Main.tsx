import { Stack, StackProps } from "@chakra-ui/react";

interface Props extends StackProps {}

const Main = ({ children, ...props }: Props) => {
  return (
    <Stack
      width="full"
      height={{ base: "100vh", md: "auto" }}
      maxW="920px"
      margin="0 auto"
      bg="#FFFFFF"
      {...props}
    >
      {children}
    </Stack>
  );
};

export default Main;
