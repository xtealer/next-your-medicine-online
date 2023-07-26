import React, { FC, useCallback, useEffect, useState } from "react";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { toggleSupport } from "@/helpers/tawkHelpers";
import { NOOP } from "@/helpers/callbackHelpers";
import { Timeout } from "@/types/Timeout";

const slideData = [
  {
    title: "Ozempic",
    subtitle: "Injection",
    imageSrc: "/images/ozempic-nobg.png",
    link: "/products/ozempic-pen-2mg",
    buttonText: "Buy now",
  },
  {
    title: "Need another medicament?",
    subtitle: "Feel free to contact us",
    imageSrc: "/images/contact-us.png",
    // TODO: Build Contact Page.
    link: "/contact",
    callback: toggleSupport,
    buttonText: "Contact now",
  },
  // Add more slides here as needed
];

const HomeProductsCarousel: FC = () => {
  const [index, setIndex] = useState(0);
  const [manualUpdate, setManualUpdate] = useState(new Date());

  const onLeft = useCallback((e?: any) => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slideData.length - 1 : prevIndex - 1
    );

    if (!!e) {
      setManualUpdate(new Date());
    }
  }, []);

  const onRight = useCallback((e?: any) => {
    setIndex((prevIndex) =>
      prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
    );

    if (!!e) {
      setManualUpdate(new Date());
    }
  }, []);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      onRight();
    }, Timeout.NORMAL * 8);
    return () => {
      clearTimeout(intervalRef);
    };
  }, [onRight, manualUpdate]);

  return (
    <Box id="shop" position="relative">
      <Box
        left="0"
        h="full"
        position="absolute"
        display="grid"
        justifyContent="center"
        placeItems="center"
        zIndex="1"
      >
        <Button
          minH="100px"
          h="20%"
          onClick={onLeft}
          rounded="none"
          bg="blackAlpha.100"
        >
          <BsChevronLeft color="white" />
        </Button>
      </Box>
      <Box
        right="0"
        h="full"
        position="absolute"
        display="grid"
        justifyContent="center"
        placeItems="center"
        zIndex="1"
      >
        <Button
          minH="100px"
          h="20%"
          onClick={onRight}
          rounded="none"
          bg="blackAlpha.100"
        >
          <BsChevronRight color="white" />
        </Button>
      </Box>
      <Box minH="min-content" h="100vh" maxH="600px" overflow="hidden">
        <Flex
          h="full"
          w={`${slideData.length * 100}%`} // Set the total width of the slides container
          style={{
            transform: `translateX(-${index * (100 / slideData.length)}%)`, // Use a fixed value for the translation
            transition: "transform 0.5s",
          }}
        >
          {slideData.map((slide, idx) => {
            const button = (
              <Button
                onClick={slide.callback ?? NOOP}
                color="white"
                bg="primary._"
                flex="1"
                maxW="250px"
                w="full"
                fontWeight="bold"
                fontSize={{ base: "lg", md: "xl", xl: "2xl" }}
                px="4"
                py={{ base: "6", md: "8" }}
              >
                {slide.buttonText}
              </Button>
            );
            return (
              <Flex
                key={idx}
                bg="secondary._"
                h="full"
                px={{ base: "10", md: "20" }}
                py="10"
                flexDirection={{ base: "column-reverse", md: "row" }}
                justify="center"
                gap={{ base: "2", md: "10" }}
                width="full"
              >
                <Flex direction="column" justify="center" align="center">
                  <Flex flexDirection="column" mx="auto">
                    <Heading
                      variant="h2"
                      color="white"
                      fontWeight="bold"
                      fontSize={{ base: "2xl", md: "6xl", xl: "7xl" }}
                      userSelect="none"
                    >
                      {slide.title}
                    </Heading>
                    <Text
                      color="white"
                      fontSize={{ base: "xl", md: "5xl" }}
                      pt="0"
                      fontStyle="italic"
                      userSelect="none"
                    >
                      {slide.subtitle}
                    </Text>
                  </Flex>
                  <Box mt="6" w="full" textAlign="center">
                    {slide.callback ? (
                      button
                    ) : (
                      <Link href={slide.link}>{button}</Link>
                    )}
                  </Box>
                </Flex>

                <Flex
                  direction="row"
                  maxW={{ base: "full", md: "600px" }}
                  maxH={{ base: "50%", md: "full" }}
                  mx={{ base: "auto", md: "unset" }}
                  w={{ base: "full", md: "unset" }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    src={slide.imageSrc}
                    height={600}
                    width={520}
                    alt={slide.title}
                    draggable={false}
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeProductsCarousel;
