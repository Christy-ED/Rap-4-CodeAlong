// import styles from "./CardComponent.module.css";

// export default function CardComponent({ YuGiOhCard }) {
//   console.log("Rendering Yu-Gi-Oh card");
//   console.log(YuGiOhCard);
//   return (
//     <>
//       {YuGiOhCard ? (
//         <div className={styles.card}>
//           <div  className={styles.img}>
//             <img
//               src={`${YuGiOhCard.card_images[0].image_url}`} // Display card image
//             alt={`${YuGiOhCard.name}`}
//             style={{ width: "300px", height: "300px", alignitems:"center"}}
//             />
//           </div>
//           <div  className={styles.info}>
//             <h3>Name: {YuGiOhCard.name}</h3> {/* Display card name */}
//             <h3>Type: {YuGiOhCard.type}</h3> {/* Display card type */}
//           </div>
//           <div  className={styles.description}>
//             <p>{YuGiOhCard.desc}</p> {/* Display card description */}
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }
