import {
  Box,
  Button,
  HStack,
  StackProps,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import SearchInput from "ui/SearchInput";
import { useState } from "react";
import { useDateTime } from "utils/useDateTime";
import { BsFillMoonFill, BiSun } from "react-icons/bs";

interface Props extends StackProps {}
const Header = ({ ...props }: Props) => {
  const [search, setSearch] = useState("");
  const { dayPeriod } = useDateTime();
  const isAtNight = dayPeriod === "at night";
  return (
    <HStack justifyContent="space-between" alignItems="center" {...props}>
      <Box width="full" maxWidth="500px">
        <SearchInput
          borderRadius="8px"
          searchValue={search}
          onChange={setSearch}
        />
      </Box>
      <HStack>
        <Text fontSize="sm" fontWeight="bold">
          9º
        </Text>
        {isAtNight ? <BsFillMoonFill /> : <BiSun />}
      </HStack>
    </HStack>
  );
};

export default Header;
