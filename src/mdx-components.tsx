import type { MDXComponents } from "mdx/types";
import { Heading, Text } from "@chakra-ui/react";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <Heading as="h1" color="gray.800">
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" color="gray.800">
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" color="gray.800">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" color="gray.800">
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading as="h5" color="gray.800">
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading as="h6" color="gray.800">
        {children}
      </Heading>
    ),
    p: ({ children }) => <Text color="gray.800">{children}</Text>,
    ...components,
  };
}
