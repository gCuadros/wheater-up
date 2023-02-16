import { ReactNode, Ref } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";

interface Props extends Omit<InputProps, "onChange"> {
  inputRef?: Ref<HTMLInputElement>;
  onChange?: (value: string) => void;
  searchValue?: string;
  rightElement?: ReactNode;
}

const SearchInput = ({
  inputRef,
  onChange,
  rightElement,
  size = "sm",
  searchValue,
  ...props
}: Props) => {
  return (
    <InputGroup flex="1" size={size} zIndex="base">
      <InputLeftElement pointerEvents="none">
        <FiSearch />
      </InputLeftElement>
      <Input
        fontSize={{ base: "16px", md: "12px" }} // avoid iPhone zoom on focus
        bg="white"
        ref={inputRef}
        type="text"
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        {...props}
      />
    </InputGroup>
  );
};

export default SearchInput;
