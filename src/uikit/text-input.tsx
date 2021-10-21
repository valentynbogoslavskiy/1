import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

// import { theme } from '@styles-config';

import { TextInputProps } from '@interfaces/text-input';

const useStyles = makeStyles(() => ({
  citate: {},
}));

export const TextInput: React.FC<TextInputProps> = ({ children, label }) => {
  const classes = useStyles();
  // const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box width='100%' mx='auto' my={2}>
      <label>
        <Typography className={classes.citate} component='span' variant='inherit'>
          {label}
        </Typography>
      </label>
      <input type='text' />
    </Box>
  );
};
