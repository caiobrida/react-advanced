import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  console.log("User context", userContext);
  console.log("Cart context", cartContext);

  return (
    <div>
      MovieRow {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
