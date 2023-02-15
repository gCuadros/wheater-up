import { Box } from "@chakra-ui/react";

interface Props {
  isActive: boolean;
  handleClick: (index: number) => void;
  index: number;
}

const Dot = ({ index, isActive, handleClick, ...props }: Props) => {
  const isTouchable = matchMedia("(hover: none)")?.matches;
  return (
    <Box
      onClick={() => handleClick(index)}
      padding="4px"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      borderRadius="50%"
      backgroundColor={isActive ? "blue.500" : "gray.300"}
      _hover={{ backgroundColor: isTouchable ? undefined : "blue.500" }}
      {...props}
    />
  );
};

export default Dot;
