import React from "react";
import MainCards from "./mainCards";
import iconSnappyProcess from '../images/icon-snappy-process.svg'
import iconAffordablePrices from '../images/icon-affordable-prices.svg'
import iconPeopleFirst from '../images/icon-people-first.svg'
import './styles/main.css'
const Main = () => {
  return (
    <div className="main flex-col">
      <h1>We’re different</h1>
      <div className="cards">
      <MainCards logo={iconSnappyProcess} heading={"Snappy Process"}>
        Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.
      </MainCards>
      <MainCards logo={iconAffordablePrices} heading={"Affordable Prices"}>
      We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
      </MainCards>
      <MainCards logo={iconPeopleFirst} heading={"People First"}>
      Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.
      </MainCards>
      
      </div>
      <div className="main--work flex-col">
        <h1>Find out more about how we work</h1>
        <button className="btn">How we work</button>
      </div>
    </div>
  );
};

export default Main;
