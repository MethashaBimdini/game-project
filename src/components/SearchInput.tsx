import { Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const bg = useColorModeValue("rgba(0, 0, 0, 0.04)", "rgba(255, 255, 255, 0.06)");
  const bgHover = useColorModeValue("rgba(0, 0, 0, 0.06)", "rgba(255, 255, 255, 0.08)");
  const bgFocus = useColorModeValue("rgba(0, 0, 0, 0.06)", "rgba(255, 255, 255, 0.08)");
  const borderColor = useColorModeValue("rgba(0, 0, 0, 0.08)", "rgba(255, 255, 255, 0.06)");
  const placeholderColor = useColorModeValue("gray.400", "gray.500");
  const iconColor = useColorModeValue("rgba(124, 58, 237, 0.7)", "rgba(139, 92, 246, 0.6)");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup className="glow-input" transition="all 0.3s ease">
        <InputLeftElement children={<BsSearch color={iconColor} />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          bg={bg}
          border={`1px solid ${borderColor}`}
          _hover={{ bg: bgHover }}
          _focus={{
            bg: bgFocus,
            borderColor: "brand.500",
          }}
          _placeholder={{ color: placeholderColor }}
          fontSize="sm"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
