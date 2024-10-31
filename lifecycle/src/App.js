// import logo from "./logo.svg";
// import styles from "./App.module.css";
// import SearchComponent from "./components/searchComponent/SearchComponent";
// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);

//   console.log("rendering app.js");
//   return (
//     <div className={styles.App}>
//       <header className={styles.Appheader}>
//         {/* <input
//           type="text"
//           onChange={(e) => {
//             setCount(count + 1);
//           }}
//         /> */}
//         <SearchComponent />
//       </header>
//     </div>
//   );
// }

// export default App;

import styles from "./App.module.css";
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const [card, setCard] = useState([]); // setCard function manage the data loading in chunks rather than loading all the data at once.
  const countRef = useRef(0);
  const observer = useRef(null);

  // Fetch the data from the API
  const getYuGiOhCard = async () => {
    try {
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${countRef.current}&offset=${countRef.current}`
      );
      const newCard = response.data.data.map((card) => ({
        id: card.id,
        name: card.name,
      }));
      //setCard uses the previous state to accumulate the list of people as more cards are fetched.
      setCard((prevCard) => [...prevCard, ...newCard]);
      countRef.current += 1;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  /*Infinite Scroll with IntersectionObserver:
  The useEffect with IntersectionObserver triggers getYuGiOhCard every time the "SEE ME" element comes into view, 
  fetching additional cards and appending them to the card array. */

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            getYuGiOhCard();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      });

  observer.current.observe(document.getElementById("seen"));
  return () => {
    observer.current.disconnect();
  };

  }, []);

  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        {card.map((data) => (
          <div
            key={data.id}
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {data.name}
          </div>
        ))}
        <div id="seen">SEE ME</div>
      </header>
    </div>
  );
}

export default App;
