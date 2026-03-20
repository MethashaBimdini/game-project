import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  index?: number;
}

const GameCardContainer = ({ children, index = 0 }: Props) => {
  return (
    <Box
      className="fade-in-up"
      borderRadius={16}
      overflow="hidden"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
