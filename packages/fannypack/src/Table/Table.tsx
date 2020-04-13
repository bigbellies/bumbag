import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalTableProps = {
  hasDividers?: boolean;
  isStriped?: boolean;
  isHoverable?: boolean;
  isResponsive?: boolean;
  responsiveBreakpoint?: string;
  dividerColor?: string;
  stripeColor?: string;
  hoverColor?: string;
  variant?: string;
};
export type TableProps = BoxProps & LocalTableProps;

export const TableContext = React.createContext({ overrides: {}, tableVariant: 'default' });

const useProps = createHook<TableProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { children, overrides, variant } = props;

    const tableWrapperClassName = useClassName({
      style: styles.TableWrapper,
      styleProps: props,
      themeKey,
      themeKeyOverride
    });
    const boxProps = Box.useProps({
      ...props,
      wrapElement: element => <Box className={tableWrapperClassName}>{element}</Box>
    });

    const className = useClassName({
      style: styles.Table,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    const contextValue = React.useMemo(() => ({ overrides, tableVariant: variant }), [overrides, variant]);

    return {
      ...boxProps,
      className,
      children: <TableContext.Provider value={contextValue}>{children}</TableContext.Provider>
    };
  },
  {
    defaultProps: {
      dividerColor: 'white800',
      hoverColor: 'white600',
      stripeColor: 'white600',
      responsiveBreakpoint: 'mobile',
      variant: 'default'
    },
    themeKey: 'Table'
  }
);

export const Table = createComponent<TableProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'table'
    },
    themeKey: 'Table'
  }
);