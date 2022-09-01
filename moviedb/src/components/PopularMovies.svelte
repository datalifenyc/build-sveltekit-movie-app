<script lang="ts">
    export let movie_data: any;
    // console.log(movie_data)
    import MovieCard from './MovieCard.svelte';
</script>

<h3>Popular Movies</h3>
<div class="popular-movies">
    {#each movie_data as movie}
        <MovieCard {movie}/>
    {/each}
</div>

<style>
    h3 {
        padding: 0 1rem;
    }
    .popular-movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2;
    }
</style>