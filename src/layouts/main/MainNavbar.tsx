import { FC, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
  { name: "Store", path: "/" },
  { name: "Buy Ozempic", path: "/products/ozempic" },
  { name: "About Us", path: "/#about-us" },
  { name: "Contact", path: "/#contact-us" },
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
      <Flex
        direction="row"
        align="center"
        justify="center"
        gap={8}
        display={{ base: "none", md: "flex" }}
        flex="1"
      >
        {routes.map((r) => {
          return (
            <Link key={`${r.name}_${r.path}`} href={r.path}>
              <Text
                textColor={pathname === r.path ? "primary._" : "black"}
                _hover={{ color: "secondary._" }}
                p="1"
                textDecorationLine={pathname === r.path ? "underline" : "none"}
              >
                {r.name}
              </Text>
            </Link>
          );
        })}
      </Flex>
      <Flex
        display={{ base: "flex", md: "none" }}
        align="center"
        ml="auto"
        pr="2"
      >
        <Button
          w="40px"
          ref={btnRef}
          colorScheme="transparent"
          onClick={onOpen}
          p={2}
          border="2px"
          ml="3"
        >
          <RxHamburgerMenu color="black" size={30} />
        </Button>
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
        <DrawerContent bg="white">
          <DrawerHeader
            borderBottom={2}
            borderBottomColor="gray.200"
            borderBottomStyle="solid"
          >
            <Flex position="relative">
              <DrawerCloseButton top="0" right="-2" color="black" />
            </Flex>
            <Text color="black">Your Medicine Online</Text>
          </DrawerHeader>

          <DrawerBody>
            {routes.map((r) => {
              return (
                <Link
                  key={`${r.name}_${r.path}`}
                  href={r.path}
                  onClick={onClose}
                >
                  <Text
                    textColor={pathname === r.path ? "primary._" : "black"}
                    _hover={{ color: "secondary._" }}
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
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MainNavbar;
