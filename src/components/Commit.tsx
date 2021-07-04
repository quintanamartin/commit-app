import {Box, Text} from "@chakra-ui/layout";
import React from "react";

import {Commits} from "../types";

type MyParams = {
  commits: Commits[];
};
const Commit: React.FC<MyParams> = ({commits}) => {
  return (
    <Box maxW="sm" overflow="hidden">
      {commits.map((item) => {
        const {commit} = item;
        const {author, message} = commit;

        return (
          <Box key={item.sha} py="3">
            <Box bg="gray.100" maxW="3xl" padding="4">
              <Text> {message}</Text>
              <Text> {author.name}</Text>
              <Text> {author.date}</Text>
              <Text> {author.email}</Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Commit;
