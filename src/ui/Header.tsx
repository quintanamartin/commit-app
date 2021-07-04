import {Box, Center, Heading} from "@chakra-ui/layout";
import React from "react";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <Box as="header" mx="auto" py="10" w="100%">
      <Center>
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
      </Center>
    </Box>
  );
};

export default Header;
