import React from 'react';
import { FC } from '../../typings/components';

type DetailsCardProps = {
  someProp: string;
};

export const DetailsCard: FC<DetailsCardProps> = ({ someProp }) => {
  return <div>{someProp}</div>;
};
