import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const badgeClass =
    score > 75
      ? "score-badge-high"
      : score > 60
        ? "score-badge-mid"
        : "score-badge-low";

  return (
    <Badge
      className={badgeClass}
      fontSize="12px"
      fontWeight="700"
      paddingX={2}
      paddingY="2px"
      borderRadius="6px"
      letterSpacing="0.02em"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
