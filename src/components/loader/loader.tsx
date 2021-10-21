import { FC } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles';

import { LoaderProps } from '@interfaces/loader';

import { SpinerWithAnimation } from './spiner';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: alpha(theme.palette.background.default, 0.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
    position: 'static',
    // zIndex: 9999,
  },
}));

export const Loader: FC<LoaderProps> = ({ text = 'Loading...', spinerIcon = null, showText }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{showText && text}</div>
      <div>{spinerIcon ? spinerIcon : <SpinerWithAnimation />}</div>
    </div>
  );
};
