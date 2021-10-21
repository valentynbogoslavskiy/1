import { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

type AppButtonProps = ButtonProps & {
  casedStyle?: CasedStyle;
  nohover?: boolean;
};

export enum CasedStyle {
  LOWER = 'lowercased',
  CAPITAL = 'capitalized',
  UPPER = 'uppercased',
}

const useStyles = makeStyles(() => ({
  nohover: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  [CasedStyle.LOWER]: {
    textTransform: 'lowercase',
  },
  [CasedStyle.CAPITAL]: {
    textTransform: 'capitalize',
  },
  [CasedStyle.UPPER]: {
    textTransform: 'uppercase',
  },
}));

export const AppButton: FC<AppButtonProps> = ({ casedStyle, nohover, ...props }) => {
  const classes = useStyles();
  const classesName = [];
  const casedStyleClass = casedStyle ? classes[casedStyle] : classes.uppercased;
  classesName.push(casedStyleClass);
  if (nohover) classesName.push(classes.nohover);
  return (
    <>
      <Button className={classesName.join(' ')} {...props} />
    </>
  );
};
