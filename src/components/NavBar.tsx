import { HStack, Image, Box } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack className="glass-navbar" padding="12px 20px" spacing={4}>
      <Image
        src={logo}
        boxSize="50px"
        filter="drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))"
        transition="transform 0.3s ease"
        _hover={{ transform: "scale(1.1)" }}
      />
      <Box flex="1">
        <SearchInput onSearch={onSearch} />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
