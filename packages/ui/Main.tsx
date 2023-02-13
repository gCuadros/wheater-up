import { BoxProps, Container } from "@chakra-ui/react";

interface Props extends BoxProps {}

const Main = ({ children, ...props }: Props) => {
  return (
    <Container
      width="full"
      maxW="920px"
      margin="0 auto"
      bg="#FFFFFF"
      {...props}
    >
      {children}
    </Container>
  );
};

export default Main;
