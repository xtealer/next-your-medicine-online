import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const ComingSoonComponent: FC = () => {
  return (
    <Flex flexDirection="column" px={{ base: "0", md: "8" }} py="8" flex="1">
      <Flex
        w="full"
        minH="full"
        flex="1"
        flexDirection="column"
        justify="center"
        bg="#2d478b"
        p={{ base: "5", md: "10" }}
        userSelect="none"
      >
        <Heading color="white" fontWeight="bold" textAlign="center">
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
          <Button as={Link} href="/" colorScheme="secondary" w="full">
            Return to Store
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ComingSoonComponent;
