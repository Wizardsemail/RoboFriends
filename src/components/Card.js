import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div>
      <img
        src={`https://robohash.org/${id}?200x200&bgset=${
          id % 2 ? "bg1" : "bg2"
          }`}
        alt="user"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
