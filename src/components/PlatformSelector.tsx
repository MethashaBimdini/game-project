import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import type { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { Data, error } = usePlatforms();
  const bg = useColorModeValue("rgba(0, 0, 0, 0.04)", "rgba(255, 255, 255, 0.06)");
  const border = useColorModeValue("rgba(0, 0, 0, 0.08)", "rgba(255, 255, 255, 0.06)");
  const bgHover = useColorModeValue("rgba(0, 0, 0, 0.07)", "rgba(255, 255, 255, 0.1)");
  const bgActive = useColorModeValue("rgba(124, 58, 237, 0.1)", "rgba(139, 92, 246, 0.15)");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        bg={bg}
        border={`1px solid ${border}`}
        borderRadius="12px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        _hover={{ bg: bgHover }}
        _active={{ bg: bgActive }}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {Data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
            fontSize="sm"
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
