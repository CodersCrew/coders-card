import React from 'react';
import { FC } from '../../typings/components';

import DialogMobile from './DialogMobile';
import DialogDesktop from './DialogDesktop';
import DialogTablet from './DialogTablet';

export type DialogProps = {
  title: string;
  subtitle: string;
  tagTitle: string;
  contentHeader: string;
  imgurl: string;
  contentMain: string;
};

type DialogType = 'mobile' | 'tablet' | 'desktop';

export type DialogTypeProps = {
  type: DialogType;
};
export const PostDialog: FC<DialogProps & DialogTypeProps> = ({ type, ...props }) => {
  if (type === 'mobile') return <DialogMobile {...props} />;
  else if (type === 'desktop') return <DialogDesktop {...props} />;
  else return <DialogTablet {...props} />;
};
