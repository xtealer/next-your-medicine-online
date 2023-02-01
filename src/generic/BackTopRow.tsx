import { Button, Flex, Text } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { FC } from "react";

const onClick = () => {
  const node = document.getElementById("main-container");
  node?.scrollTo({
    behavior: "smooth",
    left: 0,
    top: 0,
  });
};

const BackTopRow: FC = () => {
  return (
    <Flex p="12" justify="center">
      <Button colorScheme="primary" color="white" onClick={onClick}>
        <FaArrowUp />
        <Text pl="2">Top</Text>
      </Button>
    </Flex>
  );
};

export default BackTopRow;
