### enricher-coinmarketcap

A CoinMarketCap.com enricher for midas. 


#### Example

Enrich any CSV, XLSX or JSON file with data from CoinMarketCap.com

###### Source file

```json
[
    {
        "currency": "bitcoin"
    },
    {
        "currency": "ethereum"
    },
    {
        "currency": "litecoin"
    } 
]
```	

###### Enriched target result

```json
[
	{
		"currency": "bitcoin",
		"cmc_data": [
			{
				"id": "bitcoin",
				"name": "Bitcoin",
				"symbol": "BTC",
				"rank": "1",
				"price_usd": "11521.2",
				"price_btc": "1.0",
				"24h_volume_usd": "6504270000.0",
				"market_cap_usd": "194727001950",
				"available_supply": "16901625.0",
				"total_supply": "16901625.0",
				"max_supply": "21000000.0",
				"percent_change_1h": "0.2",
				"percent_change_24h": "3.01",
				"percent_change_7d": "13.48",
				"last_updated": "1520265566"
			}
		]
	},
	{
		"currency": "ethereum",
		"cmc_data": [
			{
				"id": "ethereum",
				"name": "Ethereum",
				"symbol": "ETH",
				"rank": "2",
				"price_usd": "860.81",
				"price_btc": "0.0748893",
				"24h_volume_usd": "1861000000.0",
				"market_cap_usd": "84359817156.0",
				"available_supply": "98000508.0",
				"total_supply": "98000508.0",
				"max_supply": null,
				"percent_change_1h": "-0.28",
				"percent_change_24h": "0.44",
				"percent_change_7d": "-0.99",
				"last_updated": "1520265554"
			}
		]
	},
	{
		"currency": "litecoin",
		"cmc_data": [
			{
				"id": "litecoin",
				"name": "Litecoin",
				"symbol": "LTC",
				"rank": "5",
				"price_usd": "212.836",
				"price_btc": "0.0185164",
				"24h_volume_usd": "603244000.0",
				"market_cap_usd": "11810868029.0",
				"available_supply": "55492812.0",
				"total_supply": "55492812.0",
				"max_supply": "84000000.0",
				"percent_change_1h": "-0.04",
				"percent_change_24h": "1.79",
				"percent_change_7d": "-5.42",
				"last_updated": "1520265542"
			}
		]
	}
]
```	
