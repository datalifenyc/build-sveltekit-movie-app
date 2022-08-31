<script lang="ts">
    /** @type {import('./$types').PageData} */  
    export let data: any;
    
    console.log(`a: ${data.a}`); // `undefined`, it wasn't passed through in +page.js
    console.log(`b: ${data.b}`); // `2`
</script>