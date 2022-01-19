const API_KEY = process.env.API_KEY;
export default {
  fetchTrending: {
    title: "Trending",
    url: `/treinding/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "Tv Movie",
    url: `/treinding/all/top_rated?api_key=${API_KEY}&with_genres=10770`,
  },
};
