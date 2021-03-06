import { darken } from 'polished';
import _defaultPalette from '../../themes/default/palette';
import { palette, css, space } from '../../styled';
import { isInteractive } from '../../Button/styled';

const defaultPalette = _defaultPalette({});

export default {
  base: css`
    border-radius: 0px;
    border: 2px solid ${(props: any) => (props.palette === 'default' ? palette('gray700') : 'transparent')};
    color: ${(props: any) => (props.palette === 'default' ? palette('gray700') : palette(`${props.palette}Inverted`))};
    min-height: 44px;
    padding: 0 ${space(4)}rem;
    font-size: 15px;
    text-transform: uppercase;
    ${props =>
      isInteractive(props) &&
      css`
        &:focus {
          outline: 2px solid ${(props: any) => (props.palette === 'default' ? palette('gray800') : palette())};
          outline-offset: 0;
          box-shadow: none;
          background-color: ${palette()};
        }
      `};
  `,
  outlined: css`
    background-color: white;
    border-width: 2px;
  `,
  ghost: css`
    border: 2px solid transparent;

    &:hover {
      color: ${(props: any) => palette(`${props.palette}Inverted`)(props)};
      fill: ${(props: any) => palette(`${props.palette}Inverted`)(props)};
      background-color: ${palette()};
    }

    &:hover:active {
      color: ${(props: any) => palette(`${props.palette}Inverted`)(props)};
      fill: ${(props: any) => palette(`${props.palette}Inverted`)(props)};
      background-color: ${palette()};
    }

    &:focus {
      border: 2px solid white;
      background-color: unset;
      color: ${(props: any) => (props.palette === 'default' ? palette('text') : palette(props.palette))};
    }
  `,
  interactive: css`
    &:focus {
      border: 2px solid white;
      background-color: ${(props: any) =>
        props.palette === 'default' ? palette('gray800') : palette(`${props.palette}600`)};
      color: ${(props: any) => (props.palette === 'default' ? 'white' : palette(`${props.palette}Inverted`))};
    }
    ${(props: any) =>
      props.palette === 'default' &&
      css`
        &:hover {
          background-color: ${palette('gray700')};
          color: white;
        }
        &:hover:active {
          background-color: ${palette('gray800')};
        }
      `};
  `,
  link: css`
    border: 2px solid transparent;
    background: unset;
  `,
  sizes: {
    small: css`
      height: ${space(8)}rem;
      font-size: 15px;
      padding: 0 ${space(4)}rem;
    `,
    medium: css`
      font-size: 18px;
    `
  }
};
