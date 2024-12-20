import React from 'react';

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