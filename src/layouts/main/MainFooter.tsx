import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";

const MainFooter: FC = () => {
  return (
    <Flex p={4} bg="appGray.400" minH="min" justify="center" align="center">
      <Text>by YourMedicineOnline {new Date().getFullYear()}</Text>
    </Flex>
  );
};

export default MainFooter;
