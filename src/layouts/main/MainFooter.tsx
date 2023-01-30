import { FC } from "react";
import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import Image from "next/image";

const subFooterLinks = [
  { alt: "Visa Logo", url: "https://usa.visa.com/", image: "/images/visa.png" },
  {
    alt: "Mastercard Logo",
    url: "https://www.mastercard.us/en-us.html",
    image: "/images/mastercard.png",
  },
  {
    alt: "Paypal Logo",
    url: "https://www.paypal.com/us/home",
    image: "/images/paypal.png",
  },
];

const MainFooter: FC = () => {
  return (
    <Flex
      bg="white"
      minH="min"
      borderTop={2}
      borderTopStyle="solid"
      borderTopColor="gray.200"
      flexDirection="column"
    >
      <Flex
        direction="row"
        w="full"
        h="50px"
        gap="4"
        justify="center"
        px={4}
        my={2}
      >
        {subFooterLinks.map((sl) => (
          <ChakraLink key={sl.image} href={sl.url} isExternal h="100%" w="auto">
            <Image
              style={{
                height: "100%",
                width: "min-content",
              }}
              src={sl.image}
              height={126.25}
              width={329.25}
              alt={sl.alt}
              draggable={false}
            />
          </ChakraLink>
        ))}
      </Flex>
      <Flex bg="gray.800" justify="center" p="4">
        <Text color="white">
          by YourMedicineOnline @ {new Date().getFullYear()}
        </Text>
      </Flex>
    </Flex>
  );
};

export default MainFooter;
