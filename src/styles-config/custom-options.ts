import { alpha } from '@material-ui/core/styles/colorManipulator';

import { default as theme } from './theme';

export const appOptions = Object.freeze({
  palette: {
    primaryExtraLight: alpha(theme.palette.primary.light, 0.1),
  },
});
