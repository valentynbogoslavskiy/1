import React, { FC } from 'react';

import { Theme, withStyles, alpha } from '@material-ui/core/styles';

interface SpinerProps {
  classes: {
    root: string;
    spinner: string;
    path: string;
  };
}

const Spiner: FC<SpinerProps> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <svg className={classes.spinner} viewBox='0 0 50 50'>
        <circle className={classes.path} cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
      </svg>
    </div>
  );
};

export const SpinerWithAnimation = withStyles((theme: Theme) => ({
  '@keyframes rotate': {
    transform: 'rotate(360deg)',
  },
  '@keyframes dash': {
    '0%': {
      strokeDasharray: '1, 150',
      strokeDashoffset: '0',
    },
    '50%': {
      strokeDasharray: '90, 150',
      strokeDashoffset: '-35',
    },
    '100%': {
      strokeDasharray: '90, 150',
      strokeDashoffset: '-124',
    },
  },
  root: {
    width: '100px',
    height: '100px',
  },
  spinner: {
    animation: '$rotate 2s linear infinite',
    zIndex: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '-25px 0 0 -25px',
    width: '50px',
    height: '50px',
  },
  path: {
    stroke: alpha(theme.palette.primary.main, 0.6),
    strokeLinecap: 'round',
    animation: '$dash 1.5s ease-in-out infinite',
  },
}))(Spiner);
