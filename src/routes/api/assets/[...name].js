// Copyright (c) 2022 Shafil Alam

import { getAssetInfo } from "$lib/rpc.js"

export async function get({params, request}) {
    var name = params.name

    var assets = await getAssetInfo(name)
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
                asset: assets.res
            }
        }
    }
}
