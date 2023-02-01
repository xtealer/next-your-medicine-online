import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const data = [
  {
    imageUrl: "/images/communication-icon.png",
    title: "Communication",
    description:
      "For us the communication is important to provide a good customer service.",
  },
  {
    imageUrl: "/images/shopper-icon.png",
    title: "Personal Shoppers",
    description:
      "If there is any other medication you would like to purchase, we can provide you with a quote and a solution.",
  },
  {
    imageUrl: "/images/safety-icon.png",
    title: "Safety",
    description:
      "We provide products from recognized laboratories, safe for human use. As long as it is supervised by your Doctor.",
  },
  {
    imageUrl: "/images/shipping-icon.png",
    title: "Shipping",
    description:
      "We take care of shipping by courier company with fast and safe delivery. We provide safe packaging to ensure maximum quality upon arrival.",
  },
];

const HomeAdvantageCards: FC = () => {
  return (
    <Flex bg="white" justify="center" p="12" gap={6} wrap="wrap">
      {data.map((c) => (
        <Card
          key={c.title}
          align="center"
          justify="center"
          bg="white"
          minH="250px"
          minW="250px"
          flex="1"
        >
          <CardBody userSelect="none" p="6">
            <Image
              src={c.imageUrl}
              height="60px"
              w="60px"
              mx="auto"
              alt={c.title}
              draggable={false}
            />
            <Heading
              textColor="blue.700"
              size="md"
              fontWeight="semibold"
              textAlign="center"
            >
              {c.title}
            </Heading>
            <Text color="gray.600" mt="3" fontSize="sm" textAlign="left">
              {c.description}
            </Text>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default HomeAdvantageCards;
