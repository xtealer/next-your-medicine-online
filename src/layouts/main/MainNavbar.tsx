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
import { toggleSupport } from "@/helpers/tawkHelpers";
import { NOOP } from "@/helpers/callbackHelpers";
import useDidHydrate from "@/hooks/useDidHydrate";

const routes = [
  { name: "Shop", path: "/#shop" },
  // { name: "Get Ozempic Pen Now", path: "/products/ozempic-pen-2mg" },
  { name: "FAQ", path: "/faq" },
  { name: "Blog", path: "/blog" },
  { name: "Quotes", onClick: toggleSupport },
];

const planeIconWidth = 19.96;
const planeIconHeight = 19.92;

const LOGO_HEIGHT = 79;
const LOGO_WIDTH = 204;

const pathRegex = /^\/[^/?#]*/; // Regex to match the route path without query params or hash params

const MainNavbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { didHydrate } = useDidHydrate();
  const btnRef = useRef<any>();

  const pathname = didHydrate
    ? `${window.parent.location.pathname}${window.parent.location.hash}`
    : "";

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
        <Flex
          h="full"
          flexShrink="1"
          maxW="260px"
          as={Link}
          href="/#shop"
          alignItems="center"
        >
          <Image
            src="/images/logo-full.png"
            style={{
              height: "auto",
              width: "auto",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            height={LOGO_HEIGHT}
            width={LOGO_WIDTH}
            alt="Logo of Your Medicine Online"
            draggable={false}
            priority
          />
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
            const pathMatch = pathname.match(pathRegex);
            const routePathMatch = r.path?.match(pathRegex);
            const pathIsActive =
              pathMatch && routePathMatch && pathMatch[0] === routePathMatch[0];

            const content = (
              <Text
                userSelect="none"
                textColor={pathIsActive ? "primary._" : "black"}
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
                const pathMatch = pathname.match(pathRegex);
                const routePathMatch = r.path?.match(pathRegex);
                const pathIsActive =
                  pathMatch &&
                  routePathMatch &&
                  pathMatch[0] === routePathMatch[0];
                const hasNoPath = !r.path;

                const onClickItem = () => {
                  if (hasNoPath) {
                    const cb = r.onClick ?? NOOP;
                    cb();
                  }

                  onClose();
                };

                const content = (
                  <Text
                    userSelect="none"
                    textColor={pathIsActive ? "primary._" : "black"}
                    _hover={{ textDecoration: "underline", color: "primary._" }}
                    p="1"
                  >
                    {r.name}
                  </Text>
                );

                if (hasNoPath) {
                  return (
                    <Flex
                      key={`${r.name}_${r.path}`}
                      onClick={onClickItem}
                      cursor="pointer"
                    >
                      {content}
                    </Flex>
                  );
                }

                return (
                  <Link
                    key={`${r.name}_${r.path}`}
                    href={r.path}
                    onClick={onClickItem}
                  >
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
