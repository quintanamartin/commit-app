import {Badge, Box, Flex, Heading, Text} from "@chakra-ui/layout";
import React from "react";

import {Commits} from "../types";

type MyParams = {
  commits: Commits[];
};
const Commit: React.FC<MyParams> = ({commits}) => {
  return (
    <Box maxW="xl">
      {commits.map((item) => {
        const {commit, sha} = item;
        const {author, message} = commit;

        return (
          <Box key={item.sha} p={3}>
            <Box bg="gray.800" color="white" fontSize="lg" maxW="3xl" padding="4" rounded="lg">
              <Badge bg="gray.500">{author.date.slice(0, 10)}</Badge>
              <Heading py={3} size="lg">
                {message}
              </Heading>
              <Text fontSize="lg" mt={1}>
                Commit: {sha}
              </Text>
              <Flex alignItems="center" fontSize="sm" justifyContent="space-between" mt={3}>
                <Text> {author.name}</Text>
                <Text> {author.email}</Text>
              </Flex>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Commit;
