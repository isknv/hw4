const api = {
  search: "",
  page: 1,

  async fetchArticles() {
    const response = await fetch(
      `https://pixabay.com/api/?q=${this.search}&page=${this.page}&key=20337481-672a40f89241c2a553d794fbd&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();
    if (!data.totalHits) {
      return alert(`Nothing found for this question.`);
    }
    this.loadMoreImg();
    return data;
  },

  query(value) {
    this.search = value;
  },

  loadMoreImg() {
    this.page += 1;
  },

  reset() {
    this.page = 1;
  },
};

export default api;
