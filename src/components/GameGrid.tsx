import { SimpleGrid, Text, Box, Button, useColorModeValue } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { Data, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const buttonBg = useColorModeValue("rgba(139, 92, 246, 0.1)", "rgba(139, 92, 246, 0.15)");
  const buttonBgHover = useColorModeValue("rgba(139, 92, 246, 0.2)", "rgba(139, 92, 246, 0.25)");
  const buttonBgActive = useColorModeValue("rgba(139, 92, 246, 0.3)", "rgba(139, 92, 246, 0.35)");
  const buttonBorder = useColorModeValue("rgba(139, 92, 246, 0.4)", "rgba(139, 92, 246, 0.3)");
  const buttonColor = useColorModeValue("brand.600", "brand.400");

  if (error) return <Text color="red.300" padding={8}>{error}</Text>;

  if (!isLoading && Data.length === 0)
    return (
      <Text color="gray.400" fontSize="lg" padding={8}>
        No games found.
      </Text>
    );

  return (
    <Box>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {Data.map((game, idx) => (
          <GameCardContainer key={`${game.id}-${idx}`} index={idx % 20}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={`skeleton-${skeleton}`} index={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>

      {hasNextPage && (
        <Box display="flex" justifyContent="center" marginY={10} paddingBottom={10}>
          <Button
            onClick={fetchNextPage}
            isLoading={isLoading}
            loadingText="Loading more games..."
            size="lg"
            bg={buttonBg}
            color={buttonColor}
            border={`1px solid ${buttonBorder}`}
            _hover={{ bg: buttonBgHover }}
            _active={{ bg: buttonBgActive, transform: "scale(0.98)" }}
            borderRadius="16px"
            paddingX={12}
            backdropFilter="blur(10px)"
            className="glow-input"
            fontWeight="600"
            transition="all 0.3s ease"
          >
            Load More Games
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default GameGrid;
