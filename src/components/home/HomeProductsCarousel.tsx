import React, { FC, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const slideDelay = 1000 * 10;

const HomeProductsCarousel: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: slideDelay }),
  ]);

  const onLeft = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onRight = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Box position="relative">
      <Button position="absolute" h="full" zIndex="50" onClick={onLeft}>
        <BsChevronLeft color="white" />
      </Button>
      <Button
        position="absolute"
        right="0"
        h="full"
        zIndex="50"
        onClick={onRight}
      >
        <BsChevronRight color="white" />
      </Button>
      <div className="embla" ref={emblaRef}>
        <Box
          minH="min-content"
          h="100vh"
          maxH="600px"
          className="embla__container"
        >
          <Flex
            bg="secondary._"
            className="embla__slide"
            h="full"
            px="12"
            py="10"
            flexDirection={{ base: "column-reverse", md: "row" }}
            justify="center"
            gap={{ base: "2", md: "10" }}
          >
            <Flex direction="column" justify="center" align="center">
              <Flex flexDirection="column" mx="auto">
                <Heading
                  variant="h2"
                  color="white"
                  fontWeight="bold"
                  fontSize={{ base: "2xl", md: "4xl", xl: "6xl" }}
                >
                  Ozempic
                </Heading>
                <Text
                  color="white"
                  fontSize={{ base: "2xl", md: "5xl" }}
                  pt="0"
                  fontStyle="italic"
                >
                  Injection
                </Text>
              </Flex>
              <Box mt="6" w="full" textAlign="center">
                <Link href="/products/ozempic">
                  <Button
                    color="white"
                    bg="primary._"
                    flex="1"
                    maxW="250px"
                    w="full"
                    fontWeight="bold"
                    fontSize={{ base: "lg", md: "xl", xl: "2xl" }}
                    px="4"
                    py={{ base: "4", md: "8" }}
                  >
                    Buy now
                  </Button>
                </Link>
              </Box>
            </Flex>

            <Flex
              direction="row"
              maxW={{ base: "400px", md: "600px" }}
              mx={{ base: "auto", md: "unset" }}
              w={{ base: "full", md: "unset" }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                src="/images/ozempic-nobg.png"
                height={324}
                width={900}
                alt="Ozempic Medication Picture"
                draggable={false}
              />
            </Flex>
          </Flex>

          <Grid
            className="embla__slide"
            bg="secondary._"
            h="600px"
            px="12"
            py="10"
            gap="6"
            templateColumns={{ base: "1fr", md: "6fr 3fr" }}
            templateRows={{ base: "1fr 1fr", md: "1fr" }}
          >
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent={{ base: "unset", md: "center" }}
            >
              <Heading
                variant="h2"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "2xl", md: "4xl", xl: "6xl" }}
                textAlign="center"
              >
                Do you need another medicament?
              </Heading>
              <Text
                color="white"
                fontSize={{ base: "2xl", md: "5xl" }}
                pt="0"
                fontStyle="italic"
                textAlign="center"
              >
                Feel free to contact us
              </Text>
              <Flex mt="6" justify="center">
                <Link href="/#contact-us" style={{ flex: 1, maxWidth: 250 }}>
                  <Button
                    color="white"
                    bg="primary._"
                    w="full"
                    fontWeight="bold"
                    fontSize={{ base: "lg", md: "xl", xl: "2xl" }}
                    px="4"
                    py={{ base: "4", md: "8" }}
                  >
                    Contact us
                  </Button>
                </Link>
              </Flex>
            </GridItem>

            <GridItem
              gridRow={{ base: 1, md: "auto" }}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Flex flex="1" h={{ base: 150, sm: 200, md: 300, lg: 350 }}>
                <Image
                  style={{
                    objectFit: "contain",
                    flex: 1,
                    height: "100%",
                  }}
                  src="/images/contact-us.png"
                  height={624}
                  width={784}
                  alt="Contact Us Image"
                  draggable={false}
                />
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </div>
    </Box>
  );
};

export default HomeProductsCarousel;
