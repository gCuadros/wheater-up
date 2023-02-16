import { useRef, useState } from "react";
import { BiSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import {
  Box,
  CloseButton,
  HStack,
  Icon,
  Menu,
  MenuItem,
  MenuList,
  Skeleton,
  StackProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useDebounce } from "@react-hook/debounce";
import { useSearchCities } from "api/hooks/city/useSearchCities";
import { useRouter } from "next/router";

import SearchInput from "components/SearchInput";

import Thermometer from "../City/CityThermometer.tsx";

interface Props extends StackProps {
  temperature?: number;
  isDay?: boolean;
  isLoading?: boolean;
}

const Header = ({ temperature, isDay, isLoading, ...props }: Props) => {
  const [search, setSearch] = useDebounce<string>("", 500);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const isActiveSearch = (search: string) => search.length >= 3;

  const { data: cities } = useSearchCities({ query: { q: search } });
  const isCities = !!cities?.length && cities?.length > 0;

  const { push } = useRouter();

  return (
    <HStack justifyContent="space-between" alignItems="center" {...props}>
      <Box width="full" maxWidth="500px">
        <SearchInput
          inputRef={inputSearchRef}
          borderRadius="8px"
          onFocus={onOpen}
          onChange={(e) => {
            isActiveSearch(e) && setSearch(e);
            onOpen();
            inputSearchRef.current?.focus();
          }}
          placeholder="Search for places"
        />
        <Box position="absolute" marginTop="2px">
          <Menu isOpen={isOpen && isCities}>
            <MenuList paddingBottom={0}>
              <HStack paddingX="3" justifyContent="space-between">
                <Text
                  fontSize="12px"
                  fontWeight={600}
                  color="gray.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Icon as={TiLocationOutline} />
                  Places
                </Text>
                <CloseButton color="gray.500" size="sm" onClick={onClose} />
              </HStack>

              {isCities &&
                cities?.map((city, index) => (
                  <MenuItem
                    borderBottom={
                      cities.length - 1 === index ? "none" : "1px solid #eee"
                    }
                    color="#888"
                    onClick={() => {
                      push(`/weather/${city.url}`);
                      onClose();
                      setSearch("");
                    }}
                  >
                    {city.name}, {city.region} , {city.country}
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <HStack spacing={4}>
        {isLoading && (
          <Skeleton height="30px" width="40px" borderRadius="8px" />
        )}
        {!isLoading && (
          <Thermometer
            temperature={temperature}
            temperatureTextSize="32px"
            degreeTextSize="12px"
            textColor="#363e64"
          />
        )}
        {isLoading && (
          <Skeleton height="20px" width="20px" borderRadius="8px" />
        )}
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
