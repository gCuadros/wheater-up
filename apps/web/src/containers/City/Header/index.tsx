import { useState } from "react";
import { BiSun,BsFillMoonFill } from "react-icons/bs";
import {
  Box,
  Button,
  HStack,
  StackProps,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import SearchInput from "ui/SearchInput";
import { useDateTime } from "utils/useDateTime";

interface Props extends StackProps {}
const Header = ({ ...props }: Props) => {
  const [search, setSearch] = useState("");
  const { dayPeriod } = useDateTime();
  const isAtNight = dayPeriod === "at night";
  return (
    <HStack justifyContent="space-between" alignItems="center" {...props}>
      <Box width="full" maxWidth="500px">
        <SearchInput
          borderRadius="16px"
          searchValue={search}
          onChange={setSearch}
          placeholder="Search for places"
        />
      </Box>
      <HStack>
        <HStack spacing={0}>
          <Text fontSize="24px" fontWeight="bold" color="#363e64">
            9
          </Text>
          <Text
            as="span"
            fontSize="12px"
            fontWeight="bold"
            color="#363e64"
            alignSelf="flex-start"
          >
            º
          </Text>
        </HStack>
        {isAtNight ? (
          <BsFillMoonFill color="#363e64" />
        ) : (
          <BiSun color="#363e64" />
        )}
      </HStack>
    </HStack>
  );
};

export default Header;
