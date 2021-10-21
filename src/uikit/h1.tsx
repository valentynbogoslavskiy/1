import React from 'react';

import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  h1: {
    fontWeight: 600,
  },
}));

export const H1: React.FC<TypographyProps & { component: 'h1' }> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.h1} {...props}>
      {children}
    </Typography>
  );
};
