export type CPProp = {
    [x: string]: number
}
export type MCProp = {
    [x: string]: number
}
export type CoinProp = {
    block_time_in_minutes: number
    categories: [string]
    coingecko_rank: number
    coingecko_score: number
    description: {
        en: string,
        ja: string,
        ko: string,
    }
    genesis_date: string
    id: string
    image: {
        small: string
        thumb: string
        large: string
    }
    last_updated: string
    links: {
        homepage: [number]
        official_forum_url: [number]
    }
    liquidity_score: number
    market_cap_rank: string
    market_data: {
        current_price: CPProp,
        market_cap: MCProp,
        price_change_percentage_1h_in_currency: CPProp,
        price_change_percentage_24h_in_currency: CPProp,
        price_change_percentage_7d_in_currency: CPProp,
        price_change_percentage_14d_in_currency: CPProp,
        price_change_percentage_30d_in_currency: CPProp,
        price_change_percentage_1y_in_currency: CPProp,
        low_24h: CPProp,
        high_24h: MCProp,
        circulating_supply: number
    }
    name: string
    symbol: string
}
