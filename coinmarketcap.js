"use strict";
var CoinMarketCap = class CoinMarketCap {

    constructor(rp, data, config) {
        this.data = data;
        this.rp = rp;
        this.config = config;
    }

    getConfig() {
        return this.config;
    }

    getName() {
        return 'CoinMarketCap';
    }

    setData(data) {
        this.data = data;
    }

    // Here starts the action
    process(data) {

        if (typeof data !== 'undefined' && data != null) {
            this.data = data;
        }

        // -- Calling CoinMarketCap.com
        let req_url = 'https://api.coinmarketcap.com/v1/ticker/'+encodeURIComponent(data);
        let options = {
            uri: req_url,
            headers: {
                'User-Agent': 'midas'
            },
            json: true // Automatically parses the JSON string in the response
        };
        
        return this.rp(options).then((result) => {
            let _result = [];
            try {
                _result = result;
            } catch (e) {
                _result = null
            }

            // Returning a promise with the result
            return Promise.resolve(_result);
        }).catch((err) => {
            return Promise.resolve('ERROR_NO_RESULT');
        });
    }
};

module.exports.CoinMarketCap = CoinMarketCap;