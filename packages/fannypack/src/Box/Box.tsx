import * as React from 'react';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box';

import { BoxThemeConfig, CSSProperties } from '../types';
import * as utils from '../utils';
import StyledBox from './styled';

export type LocalBoxProps = {
  children?: React.ReactNode | ((props: ReakitBoxProps) => React.ReactNode);
  overrides?: BoxThemeConfig;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;

export function Box(props: BoxProps) {
  const { children, overrides, ...restProps } = props;
  const style = utils.useStyle(props);
  const htmlProps = utils.pickHTMLProps(restProps);
  return (
    <StyledBox
      overrides={overrides}
      // @ts-ignore
      style={style}
      {...htmlProps}
    >
      {children}
    </StyledBox>
  );
}
