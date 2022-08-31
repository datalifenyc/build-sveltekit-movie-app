<script lang="ts">
    /** @type {import('./$types').PageData} */  
    export let data: any;
    
    console.clear()
    // console.log(`popular_movies: ${JSON.stringify(data.popular)}`);
    console.log(`first_title: ${data.popular[0].title}`); 
    console.log(data.popular);
</script>