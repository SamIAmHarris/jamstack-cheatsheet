import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { color } from '../styles/colors';

export const Ul = styled(Box)`
  list-style: none;
`;
Ul.defaultProps = {
  as: 'ul',
  fontSize: [2, 3],
  mt: [3, 4],
};

export const Li = styled(Text)`
  border-bottom: 1px solid;
  transition: all 133ms ease;

  &:not(:hover) {
    color: ${color.grey};
  }

  a {
    display: block;
    text-decoration: none;
    transition: none;

    &:hover {
      color: inherit;
    }
  }
`;
Li.defaultProps = {
  as: 'li',
};
