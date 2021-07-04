export interface Commits {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
      email: string;
      name: string;
    };
  };
}
