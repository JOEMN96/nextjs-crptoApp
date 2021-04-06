import Head from "next/head";
import Search from "../components/SearcBar/Search";
import _JSXStyle from "styled-jsx/style";
import Coinparent from "../components/Coins/Coinparent";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="home">
        <div className="smallPar">
          <small> - Developed by Joe</small>
        </div>
      </div>
      <Search />
      <Coinparent data={data} />
      <style jsx>
        {`
          h1 {
            text-align: center;
            margin: 10px 0;
            color: #d0cae5;
          }
          .smallPar {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
          small {
            color: tomato;
            margin-right: 20px;
          }
        `}
      </style>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  let data = await res.json();

  return {
    props: {
      data,
    },
  };
};
