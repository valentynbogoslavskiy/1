import { BoxProps } from '@material-ui/core/Box';

export type CitateProps = Pick<
  BoxProps,
  'maxWidth' | 'fontWeight' | 'fontStyle' | 'textAlign' | 'fontFamily' | 'fontSize' | 'color'
>;
