const api = async (owner: string, repo: string) => {
  const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
  const apiFetch = await fetch(`${url}`);
  const response = await apiFetch.json();

  return response;
};

export default api;
