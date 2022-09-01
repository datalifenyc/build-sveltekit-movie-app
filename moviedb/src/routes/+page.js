/** @type {import('./$types').PageLoad} */
export async function load() {
  const tmdbApi = import.meta.env.VITE_TMDB_API
  const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=${
    tmdbApi
  }&language=en-US&page=1`
  const response = await fetch(api_url)
  const data = await response.json()
  if (response.ok) {
    return {
      popular: data.results
    };
  } else {
    throw new Error(data);
  }
}
