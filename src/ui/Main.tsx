import {Box} from "@chakra-ui/layout";
import React, {useEffect} from "react";

import api from "../api";
import Commit from "../components/Commit";
import {Commits} from "../types";

const Main: React.FC = () => {
  const [commits, setCommits] = React.useState<Commits[]>([]);

  useEffect(() => {
    api("quintanamartin", "commit-app").then((res) => setCommits(res));
  }, []);

  return (
    <Box>
      Main works
      <Commit commits={commits} />
    </Box>
  );
};

export default Main;
