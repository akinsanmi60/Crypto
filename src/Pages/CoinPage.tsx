import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../util/apis";
import { CurrencyState } from "../util/Currencycontext";
import { Wrapper } from "./style";
import { CoinProp } from "./type";
import DOMPurify from 'isomorphic-dompurify';
import Global from "../Components/Global";


const CoinPage = () => {
    const { id } = useParams<string>();
    const [coin, setCoin] = useState<CoinProp>();
    const { currency, symbol } = CurrencyState();


    useQuery(
        "songlecoin",
        () =>
            axios.get(SingleCoin(id)),
        {
            onSuccess(e) {
                setCoin(e?.data);
            },
            refetchOnWindowFocus: false,
        },
    );

    if (!coin) return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px"
    }}>
        <CircularProgress style={{ color: "#6900ff" }} />
    </div>;

    const profit1h =
        coin?.market_data?.price_change_percentage_1h_in_currency?.[
        currency.toLowerCase()
        ] >= 0;
    const profit7d =
        coin?.market_data?.price_change_percentage_7d_in_currency?.[
        currency.toLowerCase()
        ] >= 0;
    const profit24h =
        coin?.market_data?.price_change_percentage_24h_in_currency?.[
        currency.toLowerCase()
        ] >= 0;
    const profit14d =
        coin?.market_data?.price_change_percentage_14d_in_currency?.[
        currency.toLowerCase()
        ] >= 0;
    const profit30d =
        coin?.market_data?.price_change_percentage_30d_in_currency?.[
        currency.toLowerCase()
        ] >= 0;
    const profit1y =
        coin?.market_data?.price_change_percentage_1y_in_currency?.[
        currency.toLowerCase()
        ] >= 0; return (
            <Wrapper>
                <div className="coin-container">
                    <div className="content">
                        <h1>{coin.name}</h1>
                    </div>
                    <div className="content">
                        <div className='rank'>
                            <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                        </div>
                        <div className='info'>
                            <div className='coin-heading'>
                                <img src={coin.image.small} alt='' />
                                <p>{coin.name}</p>
                                <p>{coin.symbol.toUpperCase()}/{symbol}</p>
                            </div>
                            <div className='coin-price'>
                                <p>{symbol}{coin?.market_data?.current_price?.[currency.toLowerCase()].toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <table>
                            <thead>
                                <tr>
                                    <th>1h</th>
                                    <th>24h</th>
                                    <th>7d</th>
                                    <th>14d</th>
                                    <th>30d</th>
                                    <th>1yr</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p
                                            style={{
                                                color: profit1h ? "rgb(14, 203, 129)" : "red",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {profit1h && "+"}
                                            {coin?.market_data?.price_change_percentage_1h_in_currency?.[
                                                currency.toLowerCase()
                                            ].toFixed(1)}
                                            %
                                        </p>{" "}
                                    </td>
                                    <td>
                                        <p
                                            style={{
                                                color: profit24h ? "rgb(14, 203, 129)" : "red",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {profit24h && "+"}
                                            {coin?.market_data?.price_change_percentage_24h_in_currency?.[
                                                currency.toLowerCase()
                                            ].toFixed(1)}
                                            %
                                        </p>
                                    </td>
                                    <td>
                                        <p
                                            style={{
                                                color: profit7d ? "rgb(14, 203, 129)" : "red",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {profit7d && "+"}
                                            {coin?.market_data?.price_change_percentage_7d_in_currency?.[
                                                currency.toLowerCase()
                                            ].toFixed(1)}
                                            %
                                        </p>
                                    </td>
                                    <td>
                                        <p
                                            style={{
                                                color: profit14d ? "rgb(14, 203, 129)" : "red",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {profit14d && "+"}
                                            {coin?.market_data?.price_change_percentage_14d_in_currency?.[
                                                currency.toLowerCase()
                                            ].toFixed(1)}
                                            %
                                        </p>
                                    </td>
                                    <td>
                                        <p
                                            style={{
                                                color: profit30d ? "rgb(14, 203, 129)" : "red",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {profit30d && "+"}
                                            {coin?.market_data?.price_change_percentage_30d_in_currency?.[
                                                currency.toLowerCase()
                                            ].toFixed(1)}
                                            %
                                        </p>
                                    </td>
                                    <td>
                                        <p
                                            style={{
                                                color: profit1y ? "rgb(14, 203, 129)" : "red",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {profit1y && "+"}
                                            {coin?.market_data?.price_change_percentage_1y_in_currency?.[
                                                currency.toLowerCase()
                                            ].toFixed(1)}
                                            %
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="content">
                        <div className='stats'>
                            <div className='left'>
                                <div className='row'>
                                    <h4>24 Hour Low</h4>
                                    <p>{symbol}{coin.market_data.low_24h?.[currency.toLowerCase()].toLocaleString()}</p>
                                </div>
                                <div className='row'>
                                    <h4>24 Hour High</h4>
                                    <p>{symbol}{coin.market_data.high_24h?.[currency.toLowerCase()].toLocaleString()}</p>
                                </div>

                            </div>
                            <div className='right'>
                                <div className='row'>
                                    <h4>Market Cap</h4>
                                    <p>{symbol}{coin.market_data.market_cap?.[currency.toLowerCase()].toLocaleString()}</p>
                                </div>
                                <div className='row'>
                                    <h4>Circulating Supply</h4>
                                    <p>{coin.market_data.circulating_supply}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="chart">
                            <Global coin={coin} />
                        </div>
                    </div>
                    <div className="content">
                        <div className='about'>
                            <h3>About</h3>
                            <p dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                            }}>

                            </p>

                        </div>
                    </div>

                </div>
            </Wrapper>
        );
};

export default CoinPage;
