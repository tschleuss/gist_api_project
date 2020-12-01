const BASE_URL = 'https://api.github.com';

const apiCore = {
  getGistsByUsername: async (username) => {
    const response = await fetch(`${BASE_URL}/users/${username}/gists`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const gists = await response.json();
    const fetchMorePromises = gists.map(async gist => {
      try {
        gist.forks = await apiCore.getGistForksByGistId(gist.id);
      } catch (error) {
        gist.forks = [];
      }
      return gist;
    });
    return Promise.all(fetchMorePromises);
  },
  getGistForksByGistId: async (gistId) => {
    const response = await fetch(`${BASE_URL}/gists/${gistId}/forks`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
};

export default apiCore;