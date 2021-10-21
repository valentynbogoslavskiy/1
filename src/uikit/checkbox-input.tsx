import React from 'react';

// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

// import { theme } from '@styles-config';

import { CheckboxInputProps } from '@interfaces/checkbox-input';

// const useStyles = makeStyles(() => ({
//   citate: {},
// }));

export const CheckboxInput: React.FC<CheckboxProps & CheckboxInputProps> = ({ label, ...props }) => {
  // const classes = useStyles();
  // const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <FormGroup>
      <FormControlLabel label={label} control={<Checkbox color='primary' {...props} />} />
    </FormGroup>
  );
};
