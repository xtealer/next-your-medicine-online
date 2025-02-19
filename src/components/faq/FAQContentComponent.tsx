import { DescriptionTypeEnum } from "@/types/IDescription";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

const data = [];

const FAQContentComponent: FC = () => {
  return (
    <Flex
      px={{ base: "0", md: "12" }}
      py="12"
      flexDirection="column"
      // minH="1000px"
    >
      <Box position="relative">
        <Box zIndex="1" position="relative">
          <Heading
            as="h2"
            color="primary.700"
            fontWeight="bold"
            textAlign="center"
          >
            {"FAQ's"}
          </Heading>

          <Flex
            mt="12"
            flexDirection="column"
            bg="primary.400"
            px={{ base: "4", md: "10" }}
            py={{ base: "4", md: "12" }}
            userSelect="none"
            maxW={{ base: "100%", lg: "700px" }}
            w="full"
            mx="auto"
            zIndex="1"
            position="relative"
          >
            <Accordion color="white" allowMultiple>
              {data.map((d, i) => {
                return (
                  <AccordionItem key={i}>
                    <AccordionButton py="4">
                      <Box as="span" flex="1" textAlign="left">
                        <Heading as="h3" fontWeight="bold" fontSize="lg">
                          {d.title}
                        </Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      {d.description.map((d, s_i) => {
                        const childKey = `${i}_${s_i}`;

                        if (d.type === DescriptionTypeEnum.TEXT) {
                          return d.value;
                        }

                        if (d.type === DescriptionTypeEnum.TEXT_ITALIC) {
                          return (
                            <Text key={childKey} fontStyle="italic">
                              {d.value}
                            </Text>
                          );
                        }

                        if (d.type === DescriptionTypeEnum.LINE_BREAK) {
                          return <br key={childKey} />;
                        }

                        return null;
                      })}
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Flex>
        </Box>

        <Box
          position="absolute"
          top="0"
          left="0"
          zIndex="0"
          w="full"
          h="full"
          display={{ base: "none", lg: "initial" }}
        >
          <Image
            src="/images/medic-pills-bg.jpg"
            alt="FAQ Background Image"
            draggable={false}
            objectFit="contain"
            w="full"
            h="full"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default FAQContentComponent;
