import styled  from 'styled-components';

export const Wrapper = styled.div`
padding: 15px;
.coin-container .content {
    max-width: 740px;
    margin: 1rem auto;
    padding: .7rem 1rem;
    display: flex;
    flex-direction: column;
    background-color: #26272b;
    box-shadow: 0px 0px 12px #18191b;
    border-radius: 8px;
    .rank {
    margin: .5 0;
}

.rank-btn {
    border: 1px solid #6900ff;
    box-shadow: 0px 0px 8px #6900ff;
    background-color: #6900ff;
    border-radius: 8px;
    padding: .2rem;
}

}

.info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.info .coin-heading {
    display: flex;
    align-items: center;
    margin: 1rem 0;
}

.info .coin-heading {
    display: flex;
    align-items: center;
    margin: 1rem 0;
}

.info .coin-price {
    display: flex;
    align-items: center;
    justify-content: center;

    p{
         text-align: center;
         margin: 1rem;
         font-weight: 800;
    }
}

.info p {
    padding-right: 1rem;
}

table {
    margin: .5rem 0;
}

.chart {
    margin: .5rem 0;
}
td, th {
    padding: 8px;
    text-align: center;
}

th {
    background-color: #333;
}

.stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    width: 100%;
}

.stats .row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #808080;
    margin: .6rem 0;
    padding-bottom: .5rem;
}

.stats .row p:first-child {
    color: #d3d3d3;
}

.about h3 {
    margin: 1rem 0;
}

@media screen and (max-width: 700px) {
    .coin-container .content {
        max-width: 100%;
        margin: .5rem;
        padding: 0 .5rem;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    td,th {
        padding: 3px;
    }

    .rank {
        margin: .5rem;
    }

    .rank-btn {
        margin: .5rem 0;
    }
}
`