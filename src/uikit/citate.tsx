import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { theme } from '@styles-config';

import { CitateProps } from '@interfaces/citate';

const useStyles = makeStyles(() => ({
  citate: {},
}));

export const Citate: React.FC<CitateProps> = ({
  children,
  maxWidth = 700,
  fontWeight = 600,
  fontStyle = 'italic',
  textAlign = 'center',
  fontSize = '1.75rem',
  color = theme.palette.text.primary,
}) => {
  const classes = useStyles();
  const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box
      maxWidth={maxWidth}
      width='100%'
      mx='auto'
      my={2}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      textAlign={textAlign}
      fontSize={isXS ? '1.25rem' : fontSize}
      color={color}
    >
      <Typography className={classes.citate} component='p' variant='inherit'>
        “{children}”
      </Typography>
    </Box>
  );
};
