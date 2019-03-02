/* eslint react/prop-types: 0 */
import * as React from 'react';
import * as PropTypes from 'prop-types';

import {
  BreadcrumbStep as _BreadcrumbStep,
  BreadcrumbLink as _BreadcrumbLink,
  BreadcrumbSpan as _BreadcrumbSpan
} from './styled';

export type LocalBreadcrumbStepProps = {
  children: React.ReactNode;
  color?: string;
  href?: string;
  isCurrent?: boolean;
};

export const BreadcrumbStep: React.FunctionComponent<LocalBreadcrumbStepProps> = ({
  children,
  color,
  href,
  isCurrent
}) => (
  <_BreadcrumbStep>
    {href ? (
      <_BreadcrumbLink aria-current={isCurrent ? 'page' : undefined} color={color} href={href}>
        {children}
      </_BreadcrumbLink>
    ) : (
      <_BreadcrumbSpan aria-current={isCurrent ? 'page' : undefined} color={color}>
        {children}
      </_BreadcrumbSpan>
    )}
  </_BreadcrumbStep>
);

export const breadcrumbStepPropTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  href: PropTypes.string,
  isCurrent: PropTypes.bool
};
BreadcrumbStep.propTypes = breadcrumbStepPropTypes;

export const breadcrumbStepDefaultProps = {
  color: undefined,
  href: undefined,
  isCurrent: undefined
};
BreadcrumbStep.defaultProps = breadcrumbStepDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<LocalBreadcrumbStepProps> = BreadcrumbStep;
export default C;
