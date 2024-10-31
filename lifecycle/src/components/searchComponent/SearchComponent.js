// import React, { useState } from "react";
// import CardComponent from "../cardComponent/CardComponent";
// import axios from "axios";

// export default function SearchComponent() {
//   const [card, setCard] = useState(null);
//   const [YuGiOhCard, setYuGiOhCard] = useState("");
//   const [count, setCount] = useState(0);

//   const getYuGiOhCard = async () => {
//     try {
//       let response = await axios.get(
//         `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${YuGiOhCard}`
//       );
//       console.log(response.data);
//       setCard(response.data.data[0]); // Accesing the first card in the response
//       setCount(count + 1);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <h2>Re-renders: {count}</h2>
//       <input
//         type="text"
//         value={YuGiOhCard}
//         onChange={(e) => {
//           setYuGiOhCard(e.target.value);
//           setCount(count + 1);
//         }}
//         // placeholder="Enter Yu-Gi-Oh Name "
//       />
//       <button onClick={getYuGiOhCard}>Get YuGiOhCard</button>
//       <CardComponent YuGiOhCard={card} />
//     </>
//   );
// }
