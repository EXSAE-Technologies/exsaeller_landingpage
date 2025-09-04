class GithubSdk {
  baseUrl = 'https://api.github.com'
  async getReleases() {
    var response = await fetch(this.baseUrl + "/repos/EXSAE-Technologies/exsaeller_landingpage/releases", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      }
    });
    return await response.json();
  }
}

export default GithubSdk;