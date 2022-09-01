<script lang="ts">
    import PopularMovies from "../components/PopularMovies.svelte";
    import SearchMovies from "../components/SearchMovies.svelte"
    import { fly } from 'svelte/transition';
    /** @type {import('./$types').PageData} */  
    export let data: any;
    export let movie_data: any = data.popular;
    console.clear()
    // console.log(`popular_movies: ${JSON.stringify(data.popular)}`);
    console.log(`first_title: ${movie_data[0].title}`); 
    // console.log(data.popular);
</script>

<section 
    in:fly={{ y: 50, duration: 500 }} 
    out:fly={{ duration: 500 }}>
    <SearchMovies />
    <PopularMovies {movie_data} />
</section>