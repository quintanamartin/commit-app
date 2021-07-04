import React from "react";
import {Box, Text} from "@chakra-ui/layout";
import {ButtonGroup, IconButton, Stack} from "@chakra-ui/react";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box as="footer" mx="auto" w="100%">
      <Stack>
        <Stack align="center" direction="column" py="12">
          <ButtonGroup color="gray.600" variant="ghost">
            <IconButton
              aria-label="LinkedIn"
              as="a"
              href="https://www.linkedin.com/in/martin-quintana-534b7b178/"
              icon={<FaLinkedin fontSize="20px" />}
              target="_blank"
            />
            <IconButton
              aria-label="GitHub"
              as="a"
              href="https://github.com/quintanamartin"
              icon={<FaGithub fontSize="20px" />}
              target="_blank"
            />
            <IconButton
              aria-label="Twitter"
              as="a"
              href="https://twitter.com/mquintana1988"
              icon={<FaTwitter fontSize="20px" />}
              target="_blank"
            />
          </ButtonGroup>
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Martin Quintana. All rights reserved.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
