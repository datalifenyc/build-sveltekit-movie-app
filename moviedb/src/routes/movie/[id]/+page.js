/** @type {import('./$types').PageLoad} */
export async function load( { params }) {
  // console.log(params.id);
  // console.log(params)
  const tmdbApi = import.meta.env.VITE_TMDB_API
  const api_url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${
    tmdbApi
  }&language=en-US`
  const response = await fetch(api_url)
  const movieDetail = await response.json()
  // console.log(movieDetail)
  if (response.ok) {
    return {
      movieDetail: movieDetail,
    };
  } else {
    throw new Error(movieDetail);
  }
}
