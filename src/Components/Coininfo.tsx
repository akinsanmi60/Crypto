import React from "react";
import { InfoWrapper } from "./style";
import { TrendingProp } from "./type";

type InfoProp = {
    coin: TrendingProp,
    symbol: string
}

const Coininfo = ({ coin, symbol }: InfoProp) => {
    let profit = coin?.price_change_percentage_24h >= 0
        console.log("e456678=============9",profit)

    return (
        <InfoWrapper>
            <div className='coin-row'>
                <p>{coin.market_cap_rank}</p>
                <div className='img-symbol'>
                    <img src={coin.image} alt='' />
                    <p>{coin.symbol.toUpperCase()}</p>
                </div>
                <p>{symbol}{coin.current_price.toLocaleString()}</p>
                <p
                    style={{
                        color: profit ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                    }}>
                    {profit && "+"}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
                <p className='hide-mobile'>{symbol}{coin.total_volume.toLocaleString()}</p>
                <p className='hide-mobile'>{symbol}{coin.market_cap.toLocaleString()}</p>
            </div>
        </InfoWrapper>
    )
};

export default Coininfo;
