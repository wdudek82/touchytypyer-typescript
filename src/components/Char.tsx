import React from 'react';

interface Props {
  char: string;
}

const Char = (props: Props): React.ReactElement => {
  const { char } = props;
  return <span style={{ color: 'deeppink' }}>{char}</span>;
};

export default Char;
