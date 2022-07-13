// Copyright (c) 2022 Shafil Alam

import { getAssets } from "$lib/rpc.js"

export async function get({params, request}) {
    var assets = await getAssets()
    if(assets.error != null) {
        return {
            status: 500,
            body: {
                error: 'A server error occured'
            }
        }
    } else {
        return {
            status: 200,
            body: {
                assets: assets.res
            }
        }
    }
}
