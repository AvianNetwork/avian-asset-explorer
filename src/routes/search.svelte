<script>
    import { goto } from "$app/navigation";

    let error = "";
    let name = "";

    async function viewAsset() {
        if (name != "") goto("/asset/" + name);
        else error = "Name can't be empty!";
    }
</script>

<main>
    <!-- Hero -->
    <div class="hero" style="height: 90vh;">
        <div class="hero-content flex-col">
            <img
                class="w-20"
                src="/img/avian.png"
                alt="Logo"
            />
            <div class="text-center">
                <h1 class="text-2xl font-bold">
                    View assets on the Avian blockchain!
                </h1>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        {#if error != ""}
                            <div class="alert alert-error shadow-lg mb-4">
                                <span>{error}</span>
                            </div>
                        {/if}
                        <label for="" class="label">
                            <span class="label-text">Asset name:</span>
                        </label>
                        <input
                            bind:value={name}
                            type="text"
                            placeholder="Asset name"
                            class="input input-bordered"
                        />
                    </div>
                    <div class="form-control mt-6">
                        <button on:click={viewAsset} class="btn btn-primary">View Asset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
