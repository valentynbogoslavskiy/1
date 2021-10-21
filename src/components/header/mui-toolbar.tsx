import React, { FC } from 'react';

import { makeStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  regular: {
    minHeight: 50,
    [theme.breakpoints.up('sm')]: {
      minHeight: 94,
    },
  },
}));

export const MuiToolbar: FC = ({ children }) => {
  const classes = useStyles();
  return <Toolbar classes={{ regular: classes.regular }}>{children}</Toolbar>;
};
