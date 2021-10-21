import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

import { ElevationScroll, MuiToolbar } from '@components/header';

export const HeaderMainLayout: FC = ({ children }) => {
  return (
    <ElevationScroll>
      <AppBar position='fixed' color='inherit'>
        <MuiToolbar>
          <Grid container alignItems='center' spacing={2} justifyContent='space-between'>
            {children}
          </Grid>
        </MuiToolbar>
      </AppBar>
    </ElevationScroll>
  );
};
