import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenraList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { Data, isLoading, error } = useGenres();
  const headingColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const activeColor = useColorModeValue("brand.600", "brand.400");
  const hoverColor = useColorModeValue("brand.600", "brand.300");
  const imgBorder = useColorModeValue(
    "1px solid rgba(0, 0, 0, 0.08)",
    "1px solid rgba(255, 255, 255, 0.06)"
  );

  if (error) return null;
  if (isLoading) return <Spinner color="brand.500" size="lg" />;

  return (
    <Box className="glass-sidebar">
      <Heading
        fontSize="sm"
        fontWeight="700"
        textTransform="uppercase"
        letterSpacing="0.1em"
        color={headingColor}
        marginBottom={4}
        paddingX={2}
      >
        Genres
      </Heading>
      <List spacing={1}>
        {Data.map((genre) => (
          <ListItem
            key={genre.id}
            className={`genre-pill ${genre.id === selectedGenre?.id ? "genre-pill-active" : ""}`}
            paddingY="8px"
            paddingX="10px"
            borderRadius="10px"
          >
            <HStack spacing={3}>
              <Image
                boxSize="36px"
                borderRadius={10}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                border={imgBorder}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "600" : "400"}
                color={genre.id === selectedGenre?.id ? activeColor : textColor}
                onClick={() => onSelectGenre(genre)}
                fontSize="sm"
                variant="link"
                _hover={{ textDecoration: "none", color: hoverColor }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenraList;
