import type { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Box } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card className="game-card">
      <Box overflow="hidden">
        <img
          className="game-card-image"
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
      </Box>
      <CardBody padding="16px">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="lg" fontWeight="700" letterSpacing="-0.02em" lineHeight="1.3">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
