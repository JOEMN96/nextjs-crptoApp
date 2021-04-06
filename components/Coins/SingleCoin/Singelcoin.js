import React from "react";
import Styles from "./SingleCoin.module.scss";
import NumberFormat from "react-number-format";

function Singelcoin({ data }) {
  const {
    image,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
  } = data;
  return (
    <div className={Styles.parent}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h5>{name}</h5>
      </div>
      <div>
        <p className="symbol">{symbol.toUpperCase()}</p>
      </div>
      <div>
        <p>
          <NumberFormat
            className="price"
            value={current_price}
            displayType={"text"}
            thousandSeparator={true}
            thousandsGroupStyle="lakh"
            prefix={"₹ "}
          />
        </p>
      </div>

      <div>
        <p className="rank"> Market Rank - {market_cap_rank}</p>
      </div>

      <div>
        {price_change_percentage_24h < 0 ? (
          <p className="percentageDown">
            {" "}
            {price_change_percentage_24h.toFixed(4)}
          </p>
        ) : (
          <p className="percentageUp">
            + {price_change_percentage_24h.toFixed(4)}{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default Singelcoin;
