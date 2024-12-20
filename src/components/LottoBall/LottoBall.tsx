import React from 'react';
import './LottoBall.css';

interface Props  {
  number: number;
}

const LottoBall: React.FC<Props> = ({number}) => {
  return (
    <div className="lotto">
      <strong>{number}</strong>
    </div>
  );
};

export default LottoBall;