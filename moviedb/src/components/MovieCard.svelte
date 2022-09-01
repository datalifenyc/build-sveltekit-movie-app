<script lang="ts">
    import { TMDB_API } from "$env/static/private";

    export let movie: any;
</script>

<div class="movie-card">
    <a href={'/movie/' + movie.id}>
        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
    </a>
    <div class="description">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
    </div>
</div>

<style>
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 0.5rem;
    }
    h2 {
        font-size: 1.2rem;
    }
    .description {
        height: 5vh;
    }
    p {
        font-size: 0.7rem;
    }
    .movie-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem 1rem 4rem 1rem;
    }
</style>