import React, { useEffect, useState } from "react";
import { GlobalWrap } from "./style";
import { Chart as ChartJS, registerables } from "chart.js"
import { Line } from "react-chartjs-2";
import { CurrencyState } from "../util/Currencycontext";
import { HistoricalChart } from "../util/apis";
import axios from "axios";
import ClickButton from "./Button";
import { CircularProgress } from "@mui/material";



export const chartDays = [
    {
        label: "24 Hours",
        value: 1,
    },
    {
        label: "30 Days",
        value: 30,
    },
    {
        label: "3 Months",
        value: 90,
    },
    {
        label: "1 Year",
        value: 365,
    },
];

type CoinProp = {
    coin: {
        id: string
    }
}

type DataProp = {
    prices: [number, number][]
}
const Global = ({ coin }: CoinProp) => {
    ChartJS.register(...registerables)

    const [historicData, setHistoricData] = useState<DataProp>();
    const [days, setDays] = useState(1);
    const { currency } = CurrencyState();
    const [flag, setflag] = useState(false);

    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(coin?.id, days, currency));
        setflag(true);
        setHistoricData(data);
    };

    useEffect(() => {
        fetchHistoricData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [days]);


    return (
        <GlobalWrap>
            <div className="content">
                {!historicData || flag === false ? (
                   <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "50px"
                        }}>
                         <CircularProgress style={{ color: "#6900ff" }} />
                    </div>
                ) : (
                    <>
                        <Line
                            data={{
                                labels: historicData?.prices?.map((item) => {
                                    const dayDate = item[0];
                                    let date = new Date(dayDate);
                                    let time = date.getHours() > 12
                                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                        : `${date.getHours()}:${date.getMinutes()} AM`;
                                    return days === 1 ? time : date.toLocaleDateString();
                                }),
                                datasets: [
                                    {
                                        data: historicData?.prices?.map((item) => item[1]),
                                        label: `Price ( Past ${days} Days ) in ${currency}`,
                                        borderColor: " #6900ff",
                                        fill: true,
                                    },
                                ],
                            }}
                            options={{
                                elements: {
                                    point: {
                                        radius: 1,
                                    },
                                },
                            }}
                            />
                            <div
                                className="btn"
                            >
                            {chartDays.map((day) => (
                                <ClickButton
                                    key={day.value}
                                    onClick={() => {
                                        setDays(day.value);
                                        setflag(false);
                                    }}
                                    selected={day.value === days}
                                >
                                    {day.label}
                                </ClickButton>
                            ))}
                        </div>
                    </>
                )}
            </div>

        </GlobalWrap>
    );
};

export default Global;
