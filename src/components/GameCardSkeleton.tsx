import { Card, CardBody, Box } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={16} overflow="hidden">
      <Box className="skeleton-shimmer" height="200px" />
      <CardBody padding="16px">
        <Box className="skeleton-shimmer" height="16px" borderRadius="8px" marginBottom={3} />
        <Box className="skeleton-shimmer" height="12px" borderRadius="8px" width="60%" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
