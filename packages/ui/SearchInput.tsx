import { ReactNode, Ref } from "react";

import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { FiSearch, FiX } from "react-icons/fi";

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
  const reset = () => {
    onChange && onChange("");
  };

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
        value={searchValue}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        {...props}
      />
      <InputRightElement w="auto" paddingRight="4px">
        {searchValue && (
          <IconButton
            icon={<FiX />}
            aria-label="clear-search"
            size="xs"
            variant="ghost"
            onClick={reset}
            data-testid="clear-search-selector"
          />
        )}
        {rightElement}
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
