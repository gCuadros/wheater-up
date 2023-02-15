import {
  Box,
  BoxProps,
  VStack,
  Image,
  Text,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { TiLocationOutline } from "react-icons/ti";
import { SiWindicss } from "react-icons/si";
import { MdOutlineWaterDrop } from "react-icons/md";

interface Props extends BoxProps {
  date?: number;
  monthName?: string;
}

const WeatherCard = ({ date, monthName, ...props }: Props) => {
  return (
    <VStack
      borderRadius="8px"
      padding="20px"
      width="full"
      background="linear-gradient(to bottom right, #94A3DD, #1D83FF)"
      spacing={4}
      {...props}
    >
      <HStack
        width="full"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
        <TiLocationOutline color="white" fontSize="20px" fontWeight={600} />
        <Text
          color="white"
          fontSize="16px"
          fontWeight={600}
          textShadow="dark-lg"
        >
          Madrid
        </Text>
      </HStack>
      <Box boxSize="100px">
        <Image src="/assets/icons/weather/sun.png" alt="weather" />
      </Box>
      <Text color="white" fontSize="12px" fontWeight={400} textShadow="dark-lg">
        Today, {date} {monthName}
      </Text>
      <Text color="white" fontSize="52px" fontWeight={400} textShadow="dark-lg">
        20°
      </Text>

      <VStack width="full" maxWidth="120px" spacing={2}>
        <Text
          color="white"
          fontSize="16px"
          fontWeight={600}
          textShadow="dark-lg"
        >
          Sunny
        </Text>
        <HStack width="full" spacing={4}>
          <HStack>
            <SiWindicss color="white" fontSize="12px" fontWeight={600} />
            <Text
              color="white"
              fontSize="12px"
              fontWeight={400}
              textShadow="dark-lg"
            >
              Wind
            </Text>
          </HStack>

          <Divider orientation="vertical" height="12px" />
          <Text
            color="white"
            fontSize="12px"
            fontWeight={400}
            textShadow="dark-lg"
          >
            10 km/h
          </Text>
        </HStack>
        <HStack width="full" spacing={4}>
          <HStack>
            <MdOutlineWaterDrop
              color="white"
              fontSize="12px"
              fontWeight={600}
            />
            <Text
              color="white"
              fontSize="12px"
              fontWeight={400}
              textShadow="dark-lg"
            >
              Hum
            </Text>
          </HStack>

          <Divider orientation="vertical" height="12px" />
          <Text
            color="white"
            fontSize="12px"
            fontWeight={400}
            textShadow="dark-lg"
          >
            22 %
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default WeatherCard;
