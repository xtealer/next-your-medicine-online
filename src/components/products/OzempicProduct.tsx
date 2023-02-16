import useDidHydrate from "@/hooks/useDidHydrate";
import { ImageItem } from "@/types/ImageItem";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import FacebookButton from "../buttons/FacebookButton";
import PayPalButton from "../buttons/PaypalButton";
import TwitterButton from "../buttons/TwitterButton";
import WhatsappButton from "../buttons/WhatsappButton";
import ImagesPreview from "../images/ImagesPreview";

const images = [
  {
    url: "/images/ozempic-nobg.png",
    alt: "Ozempic Front Box",
    id: "/images/ozempic-nobg.png",
  },
  {
    url: "/images/ozempic-woman-hand.jpg",
    alt: "Ozempic Front Woman Hand",
    id: "/images/ozempic-woman-hand.jpg",
  },
  {
    url: "/images/ozempic-box-backfront.jpg",
    alt: "Ozempic Box Backfront",
    id: "/images/ozempic-box-backfront.jpg",
  },
] as ImageItem[];

const OzempicProduct: FC = () => {
  const { didHydrate } = useDidHydrate();

  return (
    <Flex
      flexDirection="column"
      p={{ base: "8", sm: "10", md: "12" }}
      color="gray.800"
    >
      {didHydrate && (
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/#store">
              <BreadcrumbLink href="/#store" tabIndex={-1}>
                Home
              </BreadcrumbLink>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href="/products/ozempic">
              <BreadcrumbLink href="/products/ozempic" tabIndex={-1}>
                Products
              </BreadcrumbLink>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link href="/products/ozempic">
              <BreadcrumbLink
                href="/products/ozempic"
                color="primary._"
                tabIndex={-1}
                as={Link}
                fontWeight="bold"
              >
                Ozempic
              </BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      )}

      <Flex
        flexDirection={{ base: "column-reverse", md: "row" }}
        justifyContent="center"
        pt="12"
      >
        <Flex
          flexDirection="column"
          flex="1"
          maxW="600px"
          px={{ base: "0", md: "6" }}
        >
          <ImagesPreview images={images} />
          <Text fontWeight="semibold" pt="6">
            Ozempic® (semaglutide) injection 0.5 mg, 1 mg, or 2 mg is an
            injectable prescription medication used:
          </Text>

          <Text fontWeight="regular" pt="6">
            Along with diet and exercise to improve blood sugar (glucose) levels
            in adults with type 2 diabetes mellitus, to reduce the risk of
            serious cardiovascular events such as heart attack, stroke or death
            in adults with type 2 diabetes mellitus with confirmed heart
            disease.
            <br />
            <br />
            It is not known whether Ozempic® can be used in people who have had
            pancreatitis.
            <br />
            Ozempic® is not for use in people with type 1 diabetes.
            <br />
            <br />
            Ozempic® is a medicine for adults with type 2 diabetes that, along
            with diet and exercise, may improve blood sugar. While not for
            weight loss, Ozempic® may help you lose some weight.
          </Text>

          <Text pt="6" textColor="primary.500" fontWeight="semibold">
            Please consult your general doctor for better information.
          </Text>
        </Flex>
        <Flex
          px={{ base: "0", md: "6" }}
          flexDirection="column"
          flex="1"
          pb="12"
          maxW="600px"
          alignItems={{ base: "center", md: "unset" }}
        >
          <Heading
            as="h1"
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            Ozempic Pen 2mg / 1,5ml
          </Heading>

          <Text fontWeight="semibold" pt="2" pb="3" fontSize="2xl">
            Price: $600
          </Text>

          <PayPalButton />

          <Flex pt="6" gap="3">
            <WhatsappButton link="https://api.whatsapp.com/send?text=https://yourmedicine.online/products/ozempic" />
            <FacebookButton link="https://www.facebook.com/sharer/sharer.php?u=https://www.yourmedicine.online/products/ozempic" />
            <TwitterButton link="https://twitter.com/intent/tweet?url=https://www.yourmedicine.online/products/ozempic&text=Ozempic" />
          </Flex>

          <Text fontWeight="semibold" pt="6" w="full">
            Shipping to the United States cost is $150.00 (all couriers) **
            <br />
            <br />
            Remember to send us a copy of your PayPal Receipt to{" "}
            <ChakraLink
              color="primary._"
              textDecoration="underline"
              href="mailto:yourmedicineonlinee@gmail.com"
              isExternal
            >
              yourmedicineonlinee@gmail.com
            </ChakraLink>{" "}
            for order confirmation.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OzempicProduct;
