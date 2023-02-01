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

const HomeFAQComponent: FC = () => {
  return (
    <Flex
      p="12"
      bgImage="/images/medic-pills-bg.jpg"
      bgSize="cover"
      bgRepeat="no-repeat"
      flexDirection="column"
    >
      <Heading as="h2" color="primary.700" fontWeight="bold" textAlign="center">
        About us
      </Heading>
      <Flex
        mt="12"
        flexDirection="column"
        bg="primary.400"
        p="10"
        userSelect="none"
        flex="1"
      >
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton py="4">
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3" fontWeight="bold" fontSize="lg">
                  How long does it take to confirm my order?
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Depending on the method used for payment it can take between 1 to
              3 business days.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton py="4">
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3" fontWeight="bold" fontSize="lg">
                  What are the payment methods?
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              The payment methods we currently accept are PayPal, Bank Wire
              Transfer. If you pay through PayPal, you must copy the number that
              appears at the top, once the process is completed write to the
              email and indicate in detail the address to send your order along
              with the confirmation number of the transaction.
              <Image
                src="/images/paypal-sample.webp"
                alt="Paypal Sample Image"
                mx="auto"
                h="300px"
                mt="6"
              />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton py="4">
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3" fontWeight="bold" fontSize="lg">
                  Where do you ship to?
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              We only ship to the United States. At the moment we are evaluating
              if we can ship to other countries.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton py="4">
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3" fontWeight="bold" fontSize="lg">
                  How long does it take for my order to arrive?
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Approximately 7 working days and excluding holidays. * May vary
              depending on state and availability.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton py="4">
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3" fontWeight="bold" fontSize="lg">
                  How do I know where my order is?
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Once payment has been processed and your order is packed for
              shipment we will mail you the tracking number so you can track
              your order. Delivery is usually done with DHL but we can use other
              couriers depending on couriers availability and state.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default HomeFAQComponent;
