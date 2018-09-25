import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import _Button from 'reakit/Button';

import Spinner from '../Spinner';

export const SpinnerWrapper = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & + span {
    opacity: 0;
  }
`;

export const Button = ({ children, className, disabled, isLoading, palette, size, type, ...props }) => {
  const themePalette = props.theme.palette; // eslint-disable-line
  return (
    <_Button
      className={className}
      disabled={disabled}
      isLoading={isLoading}
      palette={palette}
      size={size}
      type={type}
      {...props}
    >
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner
            color={type === 'default' ? themePalette[`${palette}Inverted`](props) : themePalette[`${palette}`]}
          />
        </SpinnerWrapper>
      ) : null}
      <span>{children}</span>
    </_Button>
  );
};

Button.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Makes the button disabled. The user is unable to interact with the button. */
  disabled: PropTypes.bool,
  /** Adds a loading indicator to the button. */
  isLoading: PropTypes.bool,
  palette: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning']),
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
  type: PropTypes.oneOf(['default', 'outlined', 'link'])
};

Button.defaultProps = {
  as: null,
  className: null,
  disabled: false,
  isLoading: false,
  palette: 'default',
  size: 'default',
  type: 'default'
};

export const ThemedButton = withTheme(Button);