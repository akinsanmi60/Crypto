import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { CoinList } from "../util/apis";
import { CurrencyState } from "../util/Currencycontext";
import Coininfo from "./Coininfo";
import { TableWrapper } from "./style";
import { TrendingProp } from "./type";

const Cointable = () => {
    const [coins, setCoins] = useState<TrendingProp[]>([]);
    const [loading, setLoading] = useState(false);
    const { currency, symbol } = CurrencyState();
    const navigate = useNavigate();
    const [pageNumber, setPageNumber] = useState(0);

    
    useEffect(() => {
      const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        setCoins(data);
        setLoading(false);
      };
    fetchCoins();
  }, [currency]);
    
    const coinsPerPage = 25;
    const pagesVisited = pageNumber * coinsPerPage;
    // setting the pageCount in number
    const pageCount = Math.ceil(coins.length / coinsPerPage);
    // enable to change page number
    const changePage = ({ selected }: { selected: any }) => {
        setPageNumber(selected);
    };

    const displayCoin = coins
        ?.slice(pagesVisited, pagesVisited + coinsPerPage)
        .map((coin =>
            <div onClick={() => navigate(`/coins/${coin.id}`)}
                key={coin.id}>
                <Coininfo coin={coin} symbol={symbol} />
            </div>
        ))


    return (
        <TableWrapper>
            <div className='container'>
                <div>
                    <div className='heading'>
                        <p>#</p>
                        <p className='coin-name'>Coin</p>
                        <p className='coin-name'>Price</p>
                        <p className='coin-name'>24h</p>
                        <p className='hide-mobile'>Volume</p>
                        <p className='hide-mobile'>Mkt Cap</p>
                    </div>
                    {
                        loading ? (
                            <CircularProgress />
                        ) : (
                            <>
                                {displayCoin}
                                <div className="select-btn">
                                    <ReactPaginate
                                        previousLabel="<<<"
                                        nextLabel=">>>"
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        containerClassName="paginationBttns"
                                        previousLinkClassName="previousBttn"
                                        nextLinkClassName="nextBttn"
                                        disabledClassName="paginationDisabled"
                                        activeClassName="paginationActive"
                                    />
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </TableWrapper>
    )
};

export default Cointable;
