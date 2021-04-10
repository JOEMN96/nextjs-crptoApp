// import loadConfig from "next/dist/next-server/server/config";
import React from "react";
import Styles from "./id.module.scss";

// import Layout from "../../components/Layout";

const Coin = ({ data }) => {
  return (
    <article className={Styles.article}>
      <div className={Styles.imag_wrapper}>
        <img src={data.image.large} alt={data.id} />
      </div>
      <h1>{data.name}</h1>
      <div className={Styles.container1}>
        <p>Rank: {data.market_cap_rank}</p>
        <p>Price : ₹ {data.market_data.current_price.inr}</p>

        <p>Hashing Algorithm : {data.hashing_algorithm}</p>
      </div>
      <div className={Styles.container2}>
        <p>
          <a target="_blank" href={data.links.homepage[0]}>
            Click Visit {data.name}'s official Page
          </a>
        </p>
        <p>
          <a target="_blank" href={data.links.official_forum_url[0]}>
            Click Visit {data.name}'s Forum
          </a>
        </p>
        <p>Created on : {data.genesis_date}</p>
      </div>
    </article>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
