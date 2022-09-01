<script lang="ts">
    import MovieCard from "../../../components/MovieCard.svelte";
    /** @type {import('./$types').PageData} */  
    export let data: any;
    export let searched_text: any = data.searchedMovie;
    console.clear()
    console.log(`first listed movie: ${searched_text[0].title}`);
    // console.log(searched_text);
    //export let searchedMovie: any;
</script>

<div class="searched-movies">
    {#each searched_text as movie}
        <MovieCard {movie} />
    {/each}
</div>

<style>
    .searched-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        height: 20vh;
    }
</style>