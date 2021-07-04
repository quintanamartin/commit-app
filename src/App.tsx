import {Flex, VStack} from "@chakra-ui/react";
import React from "react";

import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";
function App() {
  return (
    <>
      <Flex>
        <VStack w="100%">
          <Header />
          <Main />
          <Footer />
        </VStack>
      </Flex>
    </>
  );
}

export default App;
