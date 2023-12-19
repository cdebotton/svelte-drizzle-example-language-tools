<script lang="ts">
	import { objects } from "$lib/server/db";

  export let data;
</script>

<ul>
  {#each data.objects as obj}
    <li>{obj.name}</li>
  {/each}
</ul>

