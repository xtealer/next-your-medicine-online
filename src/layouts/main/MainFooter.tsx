import { FC, ReactNode } from "react";
import Link from "next/link";

import { Flex, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { toggleSupport } from "@/helpers/tawkHelpers";

const subFooterLinks = [
  {
    alt: "Secure SSL Logo",
    url: "https://www.cloudflare.com/learning/ssl/how-does-ssl-work/",
    image: "/images/ssl-secure.png",
  },
  {
    alt: "Verified Logo",
    url: "https://firebase.google.com/products/app-check",
    image: "/images/app-verified.png",
  },
  {
    alt: "Google Recaptcha Logo",
    url: "https://www.google.com/recaptcha/about/",
    image: "/images/recaptcha.png",
  },
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
    <Text fontWeight={"bold"} fontSize={"xl"} mb={2} textColor="white">
      {children}
    </Text>
  );
};

const MainFooter: FC = () => {
  return (
    <Flex
      bg="gray.800"
      minH="min"
      flexDirection="row"
      flexWrap="wrap"
      pt="8"
      pb={{ base: "24", md: "8" }}
      gap="10"
    >
      <Flex
        wrap="wrap"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "10", md: "14" }}
        justify="center"
        px={{ base: "6", md: "10" }}
        mx="auto"
      >
        <Flex
          gap={6}
          flexDirection="column"
          justify="center"
          alignItems="center"
        >
          <Flex w="auto" userSelect="none">
            <Link href="/#shop">
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
          <Text
            fontSize={"sm"}
            color="white"
            textColor="white"
            userSelect="none"
          >
            © Your Medicine Online {new Date().getFullYear()} All rights
            reserved
          </Text>
        </Flex>
        <Flex minW="130px" flexDirection="column">
          <ListHeader>Products</ListHeader>
          <Flex flexDirection="column" gap="2">
            <Link href={"/#shop"}>
              <Text textColor="white">Store</Text>
            </Link>
            <Link href={"/products/ozempic"}>
              <Text textColor="white">Buy Ozempic</Text>
            </Link>
            <Link href={"/faq"}>
              <Text textColor="white">FAQ</Text>
            </Link>
            <Link href={"/blog"}>
              <Text textColor="white">Blog</Text>
            </Link>
          </Flex>
        </Flex>
        <Flex minW="130px" flexDirection="column">
          <ListHeader>Information</ListHeader>
          <Flex flexDirection="column" gap="2">
            <Link href={"/#about-us"}>
              <Text textColor="white">About us</Text>
            </Link>
            <ChakraLink textColor="white" onClick={toggleSupport}>
              Contact us
            </ChakraLink>
            <Link href={"/terms-of-service"}>
              <Text textColor="white">Terms of Service</Text>
            </Link>
            <Link href={"/privacy-policy"}>
              <Text textColor="white">Privacy Policy</Text>
            </Link>
          </Flex>
        </Flex>
        <Flex flexDirection="column" minW="130px">
          <ListHeader>Contact us</ListHeader>
          <Flex flexDirection="column" gap="2">
            <Flex gap="4">
              <ChakraLink
                textColor="white"
                href={
                  "https://www.facebook.com/people/Your-Medicine-Online/100089977901490/"
                }
                isExternal
                fontSize="3xl"
              >
                <FaFacebook />
              </ChakraLink>
              <ChakraLink
                textColor="white"
                href={"https://twitter.com/uMedicineOnline"}
                isExternal
                fontSize="3xl"
              >
                <FaTwitter />
              </ChakraLink>
              <ChakraLink
                textColor="white"
                href={"https://www.instagram.com/yourmedicineonline/"}
                isExternal
                fontSize="3xl"
              >
                <FaInstagram />
              </ChakraLink>
            </Flex>
            <ChakraLink
              textColor="white"
              href={"mailto:yourmedicineonlinee@gmail.com"}
              fontSize="md"
              wordBreak="break-word"
            >
              yourmedicineonlinee@gmail.com
            </ChakraLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        wrap="wrap"
        w="full"
        minH="50px"
        gap="6"
        justify="center"
        alignItems="flex-end"
        borderTop={1}
        borderColor="gray.600"
        borderStyle="solid"
        pt="6"
        px={{ base: "6", md: "10" }}
      >
        {subFooterLinks.map((sl) => (
          <ChakraLink key={sl.image} href={sl.url} isExternal w="auto">
            <Image src={sl.image} alt={sl.alt} draggable={false} />
          </ChakraLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default MainFooter;
