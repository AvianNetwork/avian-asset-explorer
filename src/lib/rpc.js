import * as rpc from 'node-bitcoin-rpc'
rpc.init('127.0.0.1', 9000, 'avian', 'avian')

export function getAssets() {
    return new Promise(resolve => {
        rpc.call('listassets', [], (err, res) => {
            if (err != null) {
                resolve({
                    error: `A server error occured: ${err} ${res}`
                })
            } else {
                resolve({
                    res: res.result
                })
            }
        })
    });
}

export function getAssetInfo(name) {
    return new Promise(resolve => {
        rpc.call('getassetdata', [name], (err, res) => {
            if (err != null) {
                resolve({
                    error: `A server error occured: ${err} ${res}`
                })
            } else {
                resolve({
                    res: res.result
                })
            }
        })
    });
}

