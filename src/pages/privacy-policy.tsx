import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";
import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const PrivacyPolicy: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Flex p="12" flexDirection="column" color="black">
        <Heading as="h1" fontWeight="bold" textAlign="center">
          Privacy Policy
        </Heading>
        <Text mt="4">
          At our online shopping website for medicine, we are committed to
          protecting the privacy of our customers. We understand that the
          personal information you provide to us is important, and we want to
          assure you that it will be used only to support your customer
          relationship with us.
          <br />
          <br />
          We are committed to protecting the privacy of our customers. We will
          not share or sell any personal information that you provide to us,
          including your name, address, email address, and purchase history.
          <br />
          <br />
          We may use your personal information to send you promotional emails
          about our products and services. You can opt-out of these emails at
          any time by clicking the unsubscribe link at the bottom of the email.
          <br />
          <br />
          We may also use your personal information to improve our website and
          to personalize your shopping experience.
          <br />
          <br />
          We use industry-standard security measures to protect your personal
          information. However, no method of transmitting or storing electronic
          information is completely secure, and we cannot guarantee the complete
          security of your personal information.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Information Collection:
        </Heading>
        <Text>
          We collect information from you when you register on our site, place
          an order, subscribe to our newsletter, respond to a survey, fill out a
          form or enter information on our site.
          <br />
          When ordering or registering on our site, as appropriate, you may be
          asked to enter your name, email address, mailing address, phone number
          or credit card information.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Use of Information:
        </Heading>
        <Text>
          The information we collect from you may be used in one of the
          following ways:
        </Text>
        <UnorderedList pl="4">
          <ListItem>
            To personalize your experience and to allow us to deliver the type
            of content and product offerings in which you are most interested.
          </ListItem>
          <ListItem>
            To improve our website in order to better serve you.
          </ListItem>
          <ListItem>To process transactions.</ListItem>
          <ListItem>
            To send periodic emails regarding your order or other products and
            services.
          </ListItem>
        </UnorderedList>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Security:
        </Heading>
        <Text>
          We implement a variety of security measures to maintain the safety of
          your personal information when you place an order or enter, submit, or
          access your personal information.
          <br />
          We offer the use of a secure server. All supplied sensitive/credit
          information is transmitted via Secure Socket Layer (SSL) technology
          and then encrypted into our Payment gateway providers database only to
          be accessible by those authorized with special access rights to such
          systems, and are required to keep the information confidential.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Cookies:
        </Heading>
        <Text>
          We use &quot;cookies&quot; on this site. A cookie is a piece of data
          stored on a site visitor&apos;s hard drive to help us improve your
          access to our site and identify repeat visitors to our site. For
          instance, when we use a cookie to identify you, you would not have to
          log in a password more than once, thereby saving time while on our
          site.
        </Text>

        <Heading as="h2" fontWeight="bold" fontSize="xl" mt="4">
          Policy Changes:
        </Heading>
        <Text>
          Our Privacy Policy may change from time to time and all updates will
          be posted on this page.
          <br />
          If you have any questions or concerns about our Privacy Policy, please
          contact us.
          <br />
          We appreciate your confidentiality and are committed to protecting
          your privacy.
        </Text>
      </Flex>
    </>
  );
};

PrivacyPolicy.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default PrivacyPolicy;
