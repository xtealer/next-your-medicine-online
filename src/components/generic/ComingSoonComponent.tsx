import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { FC } from "react";

const ComingSoonComponent: FC = () => {
  return (
    <Flex flexDirection="column" px="8" py="8" flex="1">
      <Flex
        w="full"
        minH="full"
        flex="1"
        flexDirection="column"
        justify="center"
        bg="#2d478b"
        p="10"
        userSelect="none"
      >
        <Heading
          color="white"
          fontWeight="bold"
          textAlign="center"
          fontSize={{ base: "2xl", md: "initial" }}
        >
          <Text fontSize={{ base: "4xl", md: "6xl" }} lineHeight="initial">
            👨🏻‍💻🚧🛠️
          </Text>
          Coming Soon
        </Heading>
        <Text color="white" mt="4" textAlign="center">
          We are working to keep improving our service for you.
        </Text>
        <Flex
          mt="14"
          maxW="400px"
          w="full"
          mx="auto"
          justifyContent="space-evenly"
        >
          <Link href="/" style={{ flex: 1 }}>
            <Button colorScheme="secondary" w="full">
              Return to Store
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ComingSoonComponent;