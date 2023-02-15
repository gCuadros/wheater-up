import { useState } from "react";
import { BiSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { Box, HStack, Skeleton, StackProps, Text } from "@chakra-ui/react";
import SearchInput from "ui/SearchInput";

interface Props extends StackProps {
  temperature?: number;
  isDay?: boolean;
  isLoading?: boolean;
}

const Header = ({ temperature, isDay, isLoading, ...props }: Props) => {
  const [search, setSearch] = useState("");

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
        {isLoading && <Skeleton height="40px" width="30px" />}
        {temperature && !isLoading && (
          <HStack spacing={0}>
            <Text fontSize="20px" fontWeight="bold" color="#363e64">
              {temperature}
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
            <Text
              as="span"
              fontSize="20px"
              fontWeight="bold"
              color="#363e64"
              alignSelf="flex-start"
            >
              C
            </Text>
          </HStack>
        )}
        {isLoading && <Skeleton height="20px" width="20px" />}
        {isDay !== undefined &&
          !isLoading &&
          (isDay ? (
            <BiSun color="#363e64" fontSize="24px" />
          ) : (
            <BsFillMoonFill color="#363e64" fontSize="24px" />
          ))}
      </HStack>
    </HStack>
  );
};

export default Header;
