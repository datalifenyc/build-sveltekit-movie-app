/** @type {import('./$types').PageLoad} */
export async function load( { params }) {
    // console.log(params.id)
    // console.log(params)
    const tmdbApi = import.meta.env.VITE_TMDB_API
    const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${
      tmdbApi
    }&language=en-US&query=${params.id}&page=1&include_adult=false`
    const response = await fetch(api_url)
    const data = await response.json()
    if (response.ok) {
      return {
        searchedMovie: data.results,
      };
    } else {
      throw new Error(data);
    }
}
  