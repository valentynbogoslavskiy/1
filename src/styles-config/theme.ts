import { createTheme } from '@material-ui/core/styles';

import { customTypography } from './typography';
import { customPallete } from './pallete';

// Create a theme instance.
const theme = createTheme({
  palette: customPallete,
  typography: customTypography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'Open Sans, sans-serif',
        },
      },
    },
    MuiButton: {
      containedPrimary: {
        color: 'white',
      },
    },
  },
});

export default theme;
