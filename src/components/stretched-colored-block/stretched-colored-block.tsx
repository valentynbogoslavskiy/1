import { FC } from 'react';

import Container from '@material-ui/core/Container';

import { makeStyles, Theme } from '@material-ui/core/styles';

import { appOptions } from '@styles-config';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: appOptions.palette.primaryExtraLight,
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export const StrechedColoredBlock: FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children && <Container maxWidth='lg'>{children}</Container>}</div>;
};
