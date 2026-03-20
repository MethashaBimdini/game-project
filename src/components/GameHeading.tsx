import { Heading, useColorModeValue } from "@chakra-ui/react";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  const gradientFrom = useColorModeValue("brand.600", "brand.400");
  const gradientTo = useColorModeValue("accent.600", "accent.400");

  return (
    <Heading
      as="h1"
      marginY={5}
      fontSize="4xl"
      fontWeight="800"
      letterSpacing="-0.03em"
      bgGradient={`linear(to-r, ${gradientFrom}, ${gradientTo})`}
      bgClip="text"
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
