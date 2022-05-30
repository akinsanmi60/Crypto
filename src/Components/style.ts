import styled, { keyframes } from "styled-components";

const NavbarWrapper = styled.div`
.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -22px;

}

.icon {
    font-size: 2rem;
    color: #6900ff;
}

.purple {
    color: #6900ff;
}
.currency {
     display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -22px;
}
`
export default NavbarWrapper
const tickerh = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-300%, 0, 0);
    }
`;

export const BreakingNews = styled.div`
  width: 100%;
  height: 32px;
  padding: 2px;
  overflow: hidden;
  p {
    font-size: 13px;
    color: white;
  }
  z-index: 99999;
  &:active {
    color: #e8491d;
  }

  .newsbox {
    display: flex;
    animation: ${tickerh} 90s linear infinite;
    .newsitem {
      flex-shrink: 0;
      width: 100%;
      text-align: center;
      color: white;
    }
  }
`;

export const TableWrapper = styled.div`
.container {
    max-width: 1140px;
    margin: auto;
    .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #26272b;
        box-shadow: 0px 0px 12px #18191b;
        border-radius: 8px;
        margin: 2rem 1rem;
        padding: .7rem 1rem;
        font-weight: 700;
        position: sticky;
        top: 0;
        .coin-name {
            margin-left: -3rem;
        }
    }
    @media screen and (max-width: 720px) {
    .hide-mobile {
        display: none;
    }
}
 .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .select-btn {
    display: flex;
    justify-content: center;
  }
  .paginationBttns a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #6900ff;
    color: white;
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: #6900ff;
  }

  .paginationActive a {
    color: white;
    background-color: #6900ff;
  }

  .paginationDisabled a {
    color: grey;
    background-color: transprent;
  }

}


`
export const InfoWrapper = styled.div`
.coin-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #26272b;
    box-shadow: 0px 0px 12px #18191b;
    border-radius: 8px;
    margin: 2rem 1rem;
    padding: .7rem 1rem;

    img {
    height: 40px;
    margin-right: 8px;
    width: auto;
}

.img-symbol {
    display: flex;
    align-items: center;
}

@media screen and (max-width: 720px) {
    .hide-mobile {
        display: none;
    }
}
}
`

export const GlobalWrap = styled.div`
    .content{
      .btn {
        display: flex;
        margin-top: 20px;
        justify-content: space-around;
        width: 100%;
      }
       @media screen and (max-width: 425px) {
      .btn {
        display: none;
    }
    }
` 
export const SelectedButton = styled.span`
border: 1px solid  #6900ff;
border-radius: 5px;
padding: 10px;
padding-left: 20px;
padding-right: 20px;
font-family: Montserrat;
cursor: pointer;
background-color: none ;
color:  #6900ff;
font-weight: 200,
&:hover: {
background-olor:  #6900ff;
color: black;
},
width: 20%;
      //   margin: 5,
`