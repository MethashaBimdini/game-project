import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const bg = useColorModeValue("rgba(0, 0, 0, 0.04)", "rgba(255, 255, 255, 0.06)");
  const border = useColorModeValue("rgba(0, 0, 0, 0.08)", "rgba(255, 255, 255, 0.06)");
  const bgHover = useColorModeValue("rgba(0, 0, 0, 0.07)", "rgba(255, 255, 255, 0.1)");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const bgActive = useColorModeValue("rgba(124, 58, 237, 0.1)", "rgba(139, 92, 246, 0.15)");

  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

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
        Order by: {currentSortOrder?.lable || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
            fontSize="sm"
          >
            {order.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
