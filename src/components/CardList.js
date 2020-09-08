import React from 'react';
import Card from './Card';

const CardList = ({ list }) => {
  const CardArray = list.map(({ id, name, email }) => {
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <Card id={id} name={name} email={email} />
      </div>
    );
  });

  return CardArray;
};

export default CardList;
