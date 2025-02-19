import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";
import {
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

const TermsOfServicePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
      </Head>

      <Flex p="12" flexDirection="column" color="black">
        <Heading as="h1" fontWeight="bold" textAlign="center">
          Terms of Service
        </Heading>
        <Text mt="4">
          This document sets forth the terms and conditions that govern the use
          of our medicine sales website (the &quot;Website&quot;). By accessing
          or using the Website, you agree to be bound by these terms. If you do
          not agree to these terms, you may not use the Website.
          <br />
          <br />
          For purposes of these terms, the following definitions apply:
        </Text>
        <OrderedList pl="4">
          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              &quot;Medicines&quot; refers to any prescription or
              over-the-counter drugs available for purchase on the Website.
            </Text>
          </ListItem>

          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              &quot;Customer&quot; or &quot;you&quot; refers to any person or
              entity that accesses or uses the Website.
            </Text>
          </ListItem>

          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              &quot;We&quot; or &quot;us&quot; refers to the owner and operator
              of the Website.
            </Text>
          </ListItem>
        </OrderedList>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Use of the Website:
        </Heading>
        <Text>
          The Website is for your personal, non-commercial use. You may not use
          the Website for any illegal or unauthorized purpose. You may not
          modify, copy, distribute, transmit, display, perform, reproduce,
          publish, license, create derivative works from, transfer, or sell any
          information, software, products, or services obtained from the
          Website.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Purchase of Medicines:
        </Heading>
        <Text>
          All medicines available for purchase on the Website are subject to
          availability. We reserve the right to refuse or cancel any order
          placed for a medicine listed at an incorrect price, or that is
          otherwise unavailable. You agree to pay the purchase price and any
          applicable taxes and shipping fees for any medicines you purchase
          through the Website.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Privacy Policy:
        </Heading>
        <Text>
          Our{" "}
          <ChakraLink
            color="primary._"
            textDecoration="underline"
            href="/privacy-policy"
            isExternal
          >
            Privacy Policy
          </ChakraLink>
          , which is incorporated into these terms by reference, describes how
          we collect, use, and protect your personal information.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Disclaimer of Warranties:
        </Heading>
        <Text>
          The Website and all medicines are provided on an &quot;as is&quot; and
          &quot;as available&quot; basis. We make no representations or
          warranties of any kind, express or implied, as to the operation of the
          Website or the information, content, materials, or products included
          on the Website. You expressly agree that your use of the Website is at
          your sole risk.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Limitation of Liability:
        </Heading>
        <Text>
          In no event will we be liable for any damages, including without
          limitation, direct, indirect, incidental, special, or consequential
          damages, arising out of or in connection with the use of the Website
          or the purchase of medicines.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Governing Law and Jurisdiction:
        </Heading>
        <Text>
          These terms and your use of the Website will be governed by and
          construed in accordance with the laws of the State of Delaware,
          without giving effect to any principles of conflicts of law. Any
          dispute arising from or relating to these terms or the use of the
          Website shall be subject to the exclusive jurisdiction of the state
          and federal courts located in the State of Delaware.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Changes to the TOS:
        </Heading>
        <Text>
          We reserve the right to modify these terms at any time. Your continued
          use of the Website following any changes to these terms constitutes
          your acceptance of the revised terms.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Other Considerations:
        </Heading>
        <OrderedList pl="4">
          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              We only sell prescription medicine to individuals with valid
              prescription.
            </Text>
          </ListItem>

          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              We only ship medicine to the address that is mentioned on the
              prescription.
            </Text>
          </ListItem>

          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              We will not sell or ship controlled substance.
            </Text>
          </ListItem>

          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              We will not sell or ship any medicine that is expired or recalled.
            </Text>
          </ListItem>

          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              We will not sell or ship any medicine to any individual or
              organization that is prohibited by law.
            </Text>
          </ListItem>

          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              We will not sell or ship any medicine without proper
              documentation, labeling and packaging as per the law.
            </Text>
          </ListItem>

          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              We will not sell or ship any medicine to an individual or
              organization that is not authorized to receive it.
            </Text>
          </ListItem>

          <ListItem
            // @ts-ignore
            type="a"
            fontWeight="bold"
          >
            <Text fontWeight="normal">
              We reserve the right to cancel any order if we suspect it to be
              fraudulent or in violation of our policy.
            </Text>
          </ListItem>
        </OrderedList>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Contact Information:
        </Heading>
        <Text>
          If you have any questions or concerns regarding these terms or the
          Website, please contact us at{" "}
          <ChakraLink
            color="primary._"
            textDecoration="underline"
            href="mailto:yourmedicineonlinee@gmail.com"
            isExternal
          >
            yourmedicineonlinee@gmail.com
          </ChakraLink>{" "}
          for inquiries.
        </Text>
      </Flex>
    </>
  );
};

TermsOfServicePage.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default TermsOfServicePage;
