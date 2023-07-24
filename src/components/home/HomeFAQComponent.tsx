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

const data = [
  {
    title: "What is Your Medicine Online selling?",
    description: [
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "We sell prescription medications, including popular medications for conditions such as diabetes, high blood pressure as well as over-the-counter medications.",
      },
      {
        type: DescriptionTypeEnum.LINE_BREAK,
      },
      {
        type: DescriptionTypeEnum.LINE_BREAK,
      },
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "We encourage you to contact us to evaluate the medicine you would like to purchase. Based on the evaluation we will determine if we can ship that medicine to you.",
      },
    ],
  },
  {
    title: "Do I need a prescription to buy Ozempic on your website?",
    description: [
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "Ideally, you should have a valid prescription from a licensed healthcare professional to buy Ozempic on our website.",
      },
      {
        type: DescriptionTypeEnum.LINE_BREAK,
      },
      {
        type: DescriptionTypeEnum.LINE_BREAK,
      },
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "However, we do make some exceptions and will provide you with a valid prescription as long as you take responsibility for its use.",
      },
      {
        type: DescriptionTypeEnum.LINE_BREAK,
      },
      {
        type: DescriptionTypeEnum.LINE_BREAK,
      },
      {
        type: DescriptionTypeEnum.TEXT_ITALIC,
        value:
          "Please note that we are not responsible for the use of the medicine. It is preferable that you are informed and under medical supervision if necessary.",
      },
    ],
  },
  {
    title: "How do I place an order for Ozempic on your website?",
    description: [
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          'By clicking the "Buy now" button and following the Paypal checkout process. You will need to email us to provide a valid prescription and shipping information.',
      },
      {
        type: DescriptionTypeEnum.LINE_BREAK,
      },
      {
        type: DescriptionTypeEnum.LINE_BREAK,
      },
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "If you do not have a valid prescription, but need the medication you can contact us.",
      },
    ],
  },
  {
    title: "Is my personal information safe when I purchase on your website?",
    description: [
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "Yes, your personal information is safe on our website. We use industry-standard encryption technology to protect your information and we do not share your information with third parties.",
      },
    ],
  },
  {
    title: "How long does it take for my order to arrive?",
    description: [
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "Delivery times may vary depending on your location, but we aim to deliver all orders within 3-7 business days excluding holidays and weekends. We generally provide express shipping options for your convenience and quality of the product.",
      },
    ],
  },
  {
    title: "What payment methods do you accept?",
    description: [
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "We accept major credit cards and PayPal. Once the process is completed write to the email and indicate in detail the address to send your order along with the confirmation number of the transaction.",
      },
    ],
  },
  {
    title: "Can I track my order?",
    description: [
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "Yes, you will receive a tracking number by email once your order has been dispatched. You can track the delivery of your order using the tracking number provided by email confirmation of parcel shipping.",
      },
    ],
  },
  {
    title: "Can I change or cancel my order after it has been placed?",
    description: [
      {
        type: DescriptionTypeEnum.TEXT,
        value:
          "If you need to change or cancel your order, please contact our customer service team as soon as possible. We will do our best to accommodate your request, but please keep in mind that once an order has been shipped, it cannot be canceled or changed.",
      },
    ],
  },
  {
    title: "What is your return policy?",
    description: [
      {
        type: DescriptionTypeEnum.TEXT,
        value: "Due to the nature of our products, we do not accept returns.",
      },
    ],
  },
];

const HomeFAQComponent: FC = () => {
  return (
    <Flex
      id="faq"
      px={{ base: "0", md: "12" }}
      py="12"
      flexDirection="column"
      position="relative"
      // minH="1000px"
    >
      <Box position="relative">
        <Heading
          as="h2"
          color="primary.700"
          fontWeight="bold"
          textAlign="center"
        >
          {"FAQ's"}
        </Heading>
        <Box position="absolute" h="full" w="full" zIndex="0" userSelect="none">
          <Image
            src="/images/medic-pills-bg.jpg"
            alt="FAQ Background Image"
            draggable={false}
          />
        </Box>
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
          <Accordion color="white">
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

            {/* <AccordionItem>
            <AccordionButton py="4">
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3" fontWeight="bold" fontSize="lg">
                  What are the payment methods?
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
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
          </AccordionItem> */}
          </Accordion>
        </Flex>
        <Box position="absolute" top="0" left="0" zIndex="0" w="full">
          <Image
            src="/images/medic-pills-bg.jpg"
            alt="FAQ Background Image"
            draggable={false}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeFAQComponent;
