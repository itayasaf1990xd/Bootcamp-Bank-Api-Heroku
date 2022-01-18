import React from "react";
import './Card.style.css';

const Card = ({ id, users }) => {
  return (
    <div className="card">
      <p>{users[id].name}</p>
      <p>credit: {users[id].credit}</p>
      <p>cash: {users[id].cash}</p>
    </div>
  );
};

export default Card;
