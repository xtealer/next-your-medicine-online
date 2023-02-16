import { Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

const HomeAboutUsComponent: FC = () => {
  return (
    <Flex
      id="about-us"
      py="12"
      px={{ base: "0", md: "20" }}
      bgImage="/images/pills-bg.jpg"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex
        flexDirection="column"
        bg="#2d478b"
        p="10"
        userSelect="none"
        flex={{ base: "1", lg: "0.5" }}
      >
        <Heading as="h2" color="white" fontWeight="bold">
          About us
        </Heading>
        <Text color="white" mt="4">
          Helping people find medications that are unavailable or out of stock.
          Allowing them to purchase these medicines at an affordable price.
          Medicine like Ozempic and others.
        </Text>
      </Flex>
    </Flex>
  );
};

export default HomeAboutUsComponent;
