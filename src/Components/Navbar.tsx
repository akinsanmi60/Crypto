import React from "react";
import { FaForumbee } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CurrencyState } from "../util/Currencycontext";
import NavbarWrapper, { BreakingNews } from "./style";

const Navbar = () => {
  const { currency, setCurrency } = CurrencyState();
  const handleChange = (event: { target: { value: string; }; }) => {
    setCurrency(event.target.value as string);
  };

  return (
    <NavbarWrapper>
      <BreakingNews>
        <div className="newsbox">
          <div className="newsitem">
            👉<p>Get updated </p>
          </div>
          <div className="newsitem">
           👉<p> We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose.</p>
          </div>
          <div className="newsitem">👉 Only pay when you're satisfied </div>
        </div>
      </BreakingNews>
      <Link to='/'>
        <div className='navbar'>
          <FaForumbee className='icon' />
          <h1> Price <span className='purple'>Updater</span></h1>
        </div>
      </Link>
      <div className="currency">
        <p>Currency</p>
        <select
          value={currency}
          onChange={handleChange}
        >
          <option value={"NGN"}>NGN</option>
          <option value={"USD"}>USD</option>
          <option value={"EUR"}>EUR</option>
          <option value={"CAD"}>CAD</option>
        </select>
      </div>
    </NavbarWrapper>
  )
};

export default Navbar;
