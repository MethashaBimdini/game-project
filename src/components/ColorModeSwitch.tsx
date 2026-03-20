import { HStack, Text, useColorMode, Icon, Box } from "@chakra-ui/react";
import { BsSun, BsMoonStars } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack spacing={2} cursor="pointer" onClick={toggleColorMode}>
      <Box className="dark-toggle-icon">
        <Icon
          as={colorMode === "dark" ? BsMoonStars : BsSun}
          color={colorMode === "dark" ? "brand.400" : "orange.400"}
          boxSize={5}
        />
      </Box>
      <Text
        whiteSpace="nowrap"
        fontSize="sm"
        fontWeight="500"
        color={colorMode === "dark" ? "gray.400" : "gray.600"}
        _hover={{ color: colorMode === "dark" ? "gray.200" : "gray.800" }}
        transition="color 0.2s ease"
        userSelect="none"
      >
        {colorMode === "dark" ? "Dark" : "Light"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
