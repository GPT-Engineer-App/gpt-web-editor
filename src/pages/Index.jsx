import { Box, Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" py={4}>
        <Flex justifyContent="space-between" alignItems="center" px={8}>
          <Heading as="h1" size="lg" color="white">GPT Engineer</Heading>
          <Button colorScheme="blue" leftIcon={<FaRocket />}>Get Started</Button>
        </Flex>
      </Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="calc(100vh - 64px)"
        bg="gray.50"
        p={8}
      >
        <Heading as="h2" size="xl" mb={6}>
          Revolutionize Your Web Development
        </Heading>
        <Text fontSize="lg" textAlign="center" maxWidth="container.md" mb={6}>
          GPT Engineer is your AI-powered partner in crafting dynamic, responsive, and visually appealing websites. Harness the power of AI to streamline your web development process.
        </Text>
        <Button size="lg" colorScheme="blue" leftIcon={<FaRocket />}>
          Learn More
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;