var _BridgefyClient = {
    user:{},
    deviceList:[],
}

function getBridgefyClient() {
    return _BridgefyClient
}

var BridgefyClient = getBridgefyClient()
module.exports = BridgefyClient