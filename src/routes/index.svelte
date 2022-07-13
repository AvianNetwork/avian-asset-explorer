<!-- Copyright (c) 2022 Shafil Alam -->
<script context="module">
    export async function load({ fetch }) {
        const res = await fetch("/api/assets");
        const jsonRes = await res.json();

        return {
            props: {
                assets: jsonRes.assets,
            },
        };
    }
</script>

<script>
    export let assets;
</script>

<div class="container mx-auto mt-8">
    <div class="stats shadow-xl flex items-center mb-8">
        <div class="stat">
            <div class="stat-figure" />
            <div class="stat-title">Total assets on the Avian Blockchain</div>
            <div class="stat-value">{assets.length} assets</div>
            <!-- <div class="stat-desc"></div> -->
        </div>
    </div>

    <h1 class="font-bold text-xl mb-4">Assets</h1>
    <div class="space-y-4">
        {#if assets.length != 0}
            {#each assets as asset}
                <div class="alert shadow-lg">
                    <div>
                        <div class="w-8 ml-4">
                            <img src="/img/avian.png" alt="Avian" />
                        </div>
                        <div>
                            <h3 class="font-bold"><a href={`/asset/${asset}`}>{asset}</a></h3>
                        </div>
                    </div>
                </div>
            {/each}
        {:else}
            <p class="mt-10 text-xs text-center">No assets were found.</p>
        {/if}
    </div>
</div>
