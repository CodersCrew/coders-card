import React, { Suspense, FC, lazy } from 'react';
const CardDesktop = lazy(() => import('./CardDesktop'));
const CardMobile = lazy(() => import('./CardMobile'));
const CardTablet = lazy(() => import('./CardTablet'));

export enum CardType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

type Props = {
  type: CardType;
};

const renderCard = (type: CardType) => {
  if (type === CardType.DESKTOP) return <CardDesktop />;
  if (type === CardType.TABLET) return <CardTablet />;
  if (type === CardType.MOBILE) return <CardMobile />;
};

export const PortfolioCard: FC<Props> = ({ type }: Props) => {
  return <Suspense fallback={<div>Loading card</div>}>{renderCard(type)}</Suspense>;
};
