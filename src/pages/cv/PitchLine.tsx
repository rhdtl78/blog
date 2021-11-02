import React from 'react';

const PitchLine = ({ pitchLine }: Props) => (
  <h1 className="text-center my-5 text-2xl">{pitchLine}</h1>
);

interface Props {
  pitchLine: string;
}

export default PitchLine;
