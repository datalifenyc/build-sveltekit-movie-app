<script lang="ts">
    export let data: any;
    export let movieDetail: any = data.movieDetail;
    // console.log(movieDetail);
</script>

<div class="movie-details">
    <div class="img-container">
        <img 
            src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path} 
            alt={movieDetail.title}>
    </div>
    <div class="txt-container">
        <h1>{movieDetail.title}</h1>
        <p class="overview">{movieDetail.overview}</p>
        <p>
            <span>Release date:</span>
            {movieDetail.release_date}<br />
            <span>Budget:</span>
            {movieDetail.budget}<br />
            <span>Rating:</span>
            {movieDetail.vote_average}<br />
            <span>Runtime:</span>
            {movieDetail.runtime}mins<br />
        </p>
    </div>
</div>

<style>
    h1 {
        padding: 1rem 0rem 0.5rem;
    }
    p {
        padding: 0.5rem 0rem;
    }
    .img-container {
        width: 100%;
    }
    img {
        width: 100%;
        border-radius: 1rem;
    }
    .movie-details {
        margin: 2rem 20%;
    }
    span {
        font-weight: bold;
    }
</style>