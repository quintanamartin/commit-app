import {Box} from "@chakra-ui/layout";
import React, {useEffect} from "react";

import api from "../api";
import {Commits} from "../types";

const Main = () => {
  const [commits, setCommits] = React.useState<Commits[]>();

  useEffect(() => {
    api("quintanamartin", "commit-app").then((res) => setCommits(res));
  }, []);
  console.log(commits);

  return <Box>Main works</Box>;
};

export default Main;
