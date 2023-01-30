import { FC, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDownload } from "react-icons/md";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const gameRoutes = [
  { name: "Main Menu", path: "/" },
  { name: "Gallery", path: "/gallery" },
];
const secondaryRoutes = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/service-terms" },
];

const MainNavbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useRouter();
  const btnRef = useRef<any>();

  return (
    <Flex
      px={2}
      bg="white"
      borderBottom={2}
      borderBottomStyle="solid"
      borderBottomColor="gray.200"
      minH="100px"
      flex="0"
    >
      <Button
        w="40px"
        ref={btnRef}
        colorScheme="transparent"
        onClick={onOpen}
        p={1}
        display={{ base: "unset", md: "none" }}
        mr="3"
      >
        <RxHamburgerMenu color="#fff" size={30} />
      </Button>

      <Flex
        justifyContent="center"
        alignItems="center"
        ml={{ base: "auto", md: "0" }}
        mr={{ base: "auto", md: "0" }}
        userSelect="none"
      >
        <Flex h="100%" w="auto">
          <Link href="/">
            <Image
              style={{
                height: "100%",
                width: "min-content",
              }}
              src="/images/logo-full.png"
              height={126.25}
              width={329.25}
              alt="Logo of Your Medicine Online"
              draggable={false}
            />
          </Link>
        </Flex>
        <Text
          textColor="white"
          fontWeight="bold"
          fontSize={{ base: "md", md: "2xl" }}
          ml={{ base: "2", lg: "3" }}
        >
          ARTI PARTY
        </Text>
      </Flex>

      <Flex
        direction="row"
        ml="6"
        align="center"
        gap={4}
        display={{ base: "none", md: "flex" }}
        flex="1"
      >
        {gameRoutes.map((r) => {
          return (
            <Link key={`${r.name}_${r.path}`} href={r.path}>
              <Text
                textColor="white"
                p="1"
                textDecorationLine={pathname === r.path ? "underline" : "none"}
              >
                {r.name}
              </Text>
            </Link>
          );
        })}
        <Flex ml="auto" gap={4}>
          {secondaryRoutes.map((r) => {
            return (
              <Link key={`${r.name}_${r.path}`} href={r.path}>
                <Text
                  textColor="white"
                  p="1"
                  textDecorationLine={
                    pathname === r.path ? "underline" : "none"
                  }
                >
                  {r.name}
                </Text>
              </Link>
            );
          })}
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        closeOnEsc
        closeOnOverlayClick
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="appGray.400">
          <DrawerHeader
            borderBottom={2}
            borderBottomColor="appGray.100"
            borderBottomStyle="solid"
          >
            <Flex position="relative">
              <DrawerCloseButton top="0" right="-2" />
            </Flex>
            <Text color="white" fontWeight="bold">
              ARTI PARTY
            </Text>
          </DrawerHeader>

          <DrawerBody>
            {gameRoutes.map((r) => {
              return (
                <Link
                  key={`${r.name}_${r.path}`}
                  href={r.path}
                  onClick={onClose}
                >
                  <Text
                    textColor="white"
                    p="1"
                    textDecorationLine={
                      pathname === r.path ? "underline" : "none"
                    }
                  >
                    {r.name}
                  </Text>
                </Link>
              );
            })}
          </DrawerBody>

          <DrawerFooter
            borderTop={2}
            borderTopColor="appGray.100"
            borderTopStyle="solid"
          >
            <Flex justify="space-evenly" w="100%">
              {secondaryRoutes.map((r) => {
                return (
                  <Link
                    key={`${r.name}_${r.path}`}
                    href={r.path}
                    onClick={onClose}
                  >
                    <Text
                      textColor="white"
                      p="1"
                      textDecorationLine={
                        pathname === r.path ? "underline" : "none"
                      }
                    >
                      {r.name}
                    </Text>
                  </Link>
                );
              })}
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MainNavbar;
