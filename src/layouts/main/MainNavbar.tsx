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
import useDidHydrate from "@/hooks/useDidHydrate";
import { toggleSupport } from "@/helpers/tawkHelpers";
import { NOOP } from "@/helpers/callbackHelpers";

const routes = [
  { name: "Store", path: "/#store" },
  { name: "Buy Ozempic", path: "/products/ozempic" },
  { name: "About Us", path: "/#about-us" },
  { name: "FAQ", path: "/faq" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", onClick: toggleSupport },
];

const planeIconWidth = 21.96 * 0.8;
const planeIconHeight = 21.92 * 0.8;

const MainNavbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { didHydrate } = useDidHydrate();
  const btnRef = useRef<any>();

  if (!didHydrate) {
    return null;
  }

  const pathname = `${window.parent.location.pathname}${window.parent.location.hash}`;

  return (
    <Flex flexDirection="column" as="header" w="full">
      <Flex
        backgroundColor="#F53950"
        px={4}
        py={2}
        justifyContent="center"
        gap={3}
        userSelect="none"
      >
        <Text fontWeight="bold" textAlign="center" color="white" fontSize="sm">
          Fast Shipping to the United States, Monday through Friday
        </Text>
        <Image
          width={planeIconWidth}
          height={planeIconHeight}
          src="/images/simple-line-icons_plane.png"
          alt="Fast Shipping Image"
          style={{ objectFit: "contain" }}
          draggable={false}
        />
      </Flex>
      <Flex
        w="full"
        bg="white"
        px={2}
        borderBottom={2}
        borderBottomStyle="solid"
        borderBottomColor="gray.200"
        h="80px"
      >
        <Flex h="100%" flexShrink="1" maxW="260px">
          <Link href="/#store">
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
          flexGrow="1"
        >
          {routes.map((r) => {
            const content = (
              <Text
                userSelect="none"
                textColor={pathname === r.path ? "primary._" : "black"}
                _hover={{ textDecoration: "underline", color: "primary._" }}
                p="1"
              >
                {r.name}
              </Text>
            );

            if (!r.path) {
              return (
                <Flex
                  key={`${r.name}_${r.path}`}
                  onClick={r.onClick ?? NOOP}
                  cursor="pointer"
                >
                  {content}
                </Flex>
              );
            }

            return (
              <Link key={`${r.name}_${r.path}`} href={r.path}>
                {content}
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
              <Text color="black" fontWeight="normal">
                Menu
              </Text>
            </DrawerHeader>

            <DrawerBody>
              {routes.map((r) => {
                const content = (
                  <Text
                    userSelect="none"
                    textColor={pathname === r.path ? "primary._" : "black"}
                    _hover={{ textDecoration: "underline", color: "primary._" }}
                    p="1"
                  >
                    {r.name}
                  </Text>
                );

                if (!r.path) {
                  return (
                    <Flex
                      key={`${r.name}_${r.path}`}
                      onClick={r.onClick ?? NOOP}
                      cursor="pointer"
                    >
                      {content}
                    </Flex>
                  );
                }

                return (
                  <Link key={`${r.name}_${r.path}`} href={r.path}>
                    {content}
                  </Link>
                );
              })}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default MainNavbar;
