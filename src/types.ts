export interface Commits {
  sha: string;
  commit: {
    message: string;
    author: {
      data: string;
      email: string;
      name: string;
    };
  };
}
