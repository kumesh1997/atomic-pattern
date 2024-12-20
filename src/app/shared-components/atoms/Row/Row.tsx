import React from "react";
import { CSSModule } from "reactstrap/types/lib/utils";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface RowProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'form'> {
  [key: string]: any;
  cssModule?: CSSModule;
  tag?: React.ElementType;
  noGutters?: boolean;
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
}

declare class Row extends React.Component<RowProps> {}
export default Row;