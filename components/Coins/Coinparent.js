// import React from "react";
// import { DataGrid } from "@material-ui/data-grid";

// const columns = [
//   { field: "name", headerName: "Coin Name", width: 150 },
//   { field: "image", headerName: "Image", width: 150 },
//   {
//     field: "current_price",
//     headerName: "Price",
//     type: "number",
//     width: 150,
//   },
//   {
//     field: "market_cap_rank",
//     headerName: "Market Rank",
//     type: "number",
//     width: 140,
//   },
//   {
//     field: "high_24h",
//     headerName: "High 24 Hr",
//     type: "number",
//     width: 140,
//   },
//   {
//     field: "low_24h",
//     headerName: "High 24 Hr",
//     type: "number",
//     width: 140,
//   },
// ];

// let rows = [];

// export default function Coinparent({ data }) {
//   const [state, setstate] = React.useState([]);
//   React.useEffect(() => {
//     setstate(data);
//   }, []);
//   console.log(state);
//   rows = state;
//   return (
//     <div className={styles.parent}>
//       <div style={{ height: 450, width: "100%" }}>
//         <DataGrid rows={rows} columns={columns} pageSize={100} />
//       </div>
//     </div>
//   );
// }

// With

import React from "react";
import styles from "./coinparent.module.scss";
import SingleCoin from "./SingleCoin/Singelcoin";

function Coinparent({ data }) {
  console.log(data);
  return (
    <div className={styles.parent}>
      {data.map((coin) => {
        return <SingleCoin key={coin.id} data={coin} />;
      })}
    </div>
  );
}

export default Coinparent;
