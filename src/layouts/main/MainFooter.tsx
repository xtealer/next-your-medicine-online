import { FC, ReactNode } from "react";
import {
  Box,
  Container,
  Flex,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

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

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

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
      {/* <Flex bg="gray.800" justify="center" p="4">
        <Text color="white">
          by YourMedicineOnline @ {new Date().getFullYear()}
        </Text>
      </Flex> */}
      <Box bg="gray.800">
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            // templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }}
            spacing={8}
            gridColumnEnd="1"
            px="4"
          >
            <Stack spacing={6} justify="center" alignItems="center">
              <Box>
                <Flex h="100%" w="auto">
                  <Link href="/">
                    <Image
                      style={{
                        height: "80px",
                        width: "min-content",
                        objectFit: "contain",
                      }}
                      src="/images/logo-full-white.png"
                      height={126.25}
                      width={329.25}
                      alt="Logo of Your Medicine Online"
                      draggable={false}
                    />
                  </Link>
                </Flex>
              </Box>
              <Text fontSize={"sm"} color="white">
                © YourMedicineOnline {new Date().getFullYear()} All rights
                reserved
              </Text>
            </Stack>
            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Products</ListHeader>
              <Link href={"/"}>Store</Link>
              <Link href={"/products/ozempic"}>Buy Ozempic</Link>
              <ChakraLink href={"/#contact-us"}>Tutorials</ChakraLink>
              <Link href={"/products/ozempic"}>Pricing</Link>
              <Link href={"/products/ozempic"}>Releases</Link>
            </Stack>
            {/* <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Company</ListHeader>
              <ChakraLink href={"#"}>About</ChakraLink>
              <ChakraLink href={"#"}>Press</ChakraLink>
              <ChakraLink href={"#"}>Careers</ChakraLink>
              <ChakraLink href={"#"}>Contact</ChakraLink>
              <ChakraLink href={"#"}>Partners</ChakraLink>
            </Stack> */}
            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Support</ListHeader>
              <ChakraLink href={"/#contact-us"}>Help Center</ChakraLink>
              <ChakraLink href={"/#contact-us"}>Contact us</ChakraLink>
              <ChakraLink href={"/terms-of-service"} isExternal>
                Terms of Service
              </ChakraLink>
              <ChakraLink href={"/terms-of-service"} isExternal>
                Legal
              </ChakraLink>
              <ChakraLink href={"/privacy-policy"} isExternal>
                Privacy Policy
              </ChakraLink>
            </Stack>
            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Follow Us</ListHeader>
              <ChakraLink href={"https://facebook.com/"} isExternal>
                Facebook
              </ChakraLink>
              <ChakraLink href={"https://twitter.com/"} isExternal>
                Twitter
              </ChakraLink>
              <ChakraLink href={"https://dribbble.com/"} isExternal>
                Dribbble
              </ChakraLink>
              <ChakraLink href={"https://instagram.com/"} isExternal>
                Instagram
              </ChakraLink>
              <ChakraLink href={"https://linkedin.com/"} isExternal>
                LinkedIn
              </ChakraLink>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

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
    </Flex>
  );
};

export default MainFooter;
