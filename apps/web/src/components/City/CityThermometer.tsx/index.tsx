import { BoxProps, HStack, Text, TextProps } from "@chakra-ui/react";

interface Props extends BoxProps {
  temperature?: number;
  temperatureTextSize?: TextProps["fontSize"];
  degreeTextSize?: TextProps["fontSize"];
  textColor?: TextProps["color"];
}

const Thermometer = ({
  temperature,
  temperatureTextSize,
  degreeTextSize,
  textColor,
  ...props
}: Props) => {
  if (temperature === undefined) return null;

  return (
    <HStack spacing={0} {...props} alignItems="flex-start">
      <Text fontSize={temperatureTextSize} fontWeight="bold" color={textColor}>
        {temperature}
      </Text>

      <Text
        as="span"
        fontSize={degreeTextSize}
        fontWeight="bold"
        color={textColor}
        paddingInlineStart="2px"
        paddingTop="2px"
      >
        °C
      </Text>
    </HStack>
  );
};
export default Thermometer;
