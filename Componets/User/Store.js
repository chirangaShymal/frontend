// import React from "react";

// function Store({ store, addToCart }) {
//   return (
//     <tr>
//       <td>{store._id}</td>
//       <td>{store.name}</td>
//       <td>Rs{store.price}</td>
//       <td>{store.details}</td>
//       <td>
//         <button onClick={() => addToCart(store)}>Add to Cart</button>
//       </td>
//     </tr>
//   );
// }

// export default Store;

import React from "react";

function Store({ store, addToCart }) {
  // Handle case where `store` is undefined
  if (!store) {
    return <tr><td colSpan="5">No Store Data Available</td></tr>;
  }

  return (
    <tr>
      <td>{store?._id || "N/A"}</td>
      <td>{store?.name || "N/A"}</td>
      <td>Rs{store?.price ?? "N/A"}</td>
      <td>{store?.details || "No details available"}</td>
      <td>
        <button onClick={() => addToCart?.(store)}>Add to Cart</button>
      </td>
    </tr>
  );
}

export default Store;
