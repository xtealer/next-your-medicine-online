import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";
import Link from "next/link";

const NotFoundPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Not Found | Your Medicine Online</title>
      </Head>
      <Flex flexDirection="column" px="8" py="16" flex="1">
        <Heading textAlign="center" color="primary.500">
          <Text fontSize="6xl" lineHeight="initial">
            ❗️🤖🚫
          </Text>
          Oops! Page Not Found
        </Heading>
        <Text color="gray.500" textAlign="center" mt="5" fontSize="lg">
          The requested page was not found.
        </Text>
        <Flex
          mt="14"
          maxW="400px"
          w="full"
          mx="auto"
          justifyContent="space-evenly"
        >
          <Link href="/" style={{ flex: 1 }}>
            <Button colorScheme="primary" w="full">
              Return to Store
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

NotFoundPage.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default NotFoundPage;
