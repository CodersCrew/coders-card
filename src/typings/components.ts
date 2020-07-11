import { PropsWithChildren, ReactElement, Ref, ValidationMap } from 'react';

type ChildlessFunctionComponent<P = {}, C = {}> = {
  (props: P, context?: C): ReactElement | null;
  contextTypes?: ValidationMap<C>;
  defaultProps?: Partial<P>;
  displayName?: string;
};

export type CFC<P = {}> = ChildlessFunctionComponent<P>;

type FunctionComponent<P = {}, C = {}> = {
  (props: PropsWithChildren<P>, context?: C): ReactElement | null;
  contextTypes?: ValidationMap<C>;
  defaultProps?: Partial<P>;
  displayName?: string;
};

export type FC<P = {}> = FunctionComponent<P>;

type RefForwardingComponent<T, P = {}, C = {}> = {
  (props: PropsWithChildren<P>, ref: Ref<T>): ReactElement | null;
  contextTypes?: ValidationMap<C>;
  defaultProps?: Partial<P>;
  displayName?: string;
};

export type RFC<T, P = {}> = RefForwardingComponent<T, P>;
