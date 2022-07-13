<!-- Copyright (c) 2022 Shafil Alam -->
<script context="module">
    export async function load({ params, fetch }) {
        const res = await fetch("/api/assets/" + params.name);
        const jsonRes = await res.json();

        return {
            props: {
                assetInfo: jsonRes.asset,
            },
        };
    }
</script>

<script>
    export let assetInfo;
</script>

<div class="container mx-auto px-4 pt-8">
    <div class="flex">
        <!-- Image card -->
        {#if assetInfo.has_ipfs != 0}
        <div class="flex-none mr-10">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={"https://ipfs.io/ipfs/" + assetInfo.ipfs_hash} alt="Data" /></figure>
            </div>
        </div>
        {/if}
        <!-- Main card -->
        <div class="flex-auto w-64">
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{assetInfo.name}</h2>
                    <hr
                        class="mt-4 mb-4 text-gray-400"
                        style="border-top: 1px solid #404040"
                    />
                    <table
                        class="table-auto"
                        style="border-collapse: separate; border-spacing: 0 10px"
                    >
                        <tbody>
                            <tr>
                                <td>Amount:</td>
                                <td>{assetInfo.amount} {assetInfo.name}</td>
                            </tr>
                            <tr>
                                <td>Units:</td>
                                <td>{assetInfo.units}</td>
                            </tr>
                            <tr>
                                <td>Reissuable:</td>
                                <td>{assetInfo.reissuable}</td>
                            </tr>
                            {#if assetInfo.has_ipfs != 0}
                            <tr>
                                <td>IPFS Data:</td>
                                <td>{assetInfo.ipfs_hash}</td>
                            </tr>
                            {/if}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
