import { FC } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Theme, makeStyles } from '@material-ui/core/styles';

import { useMobileView } from './hooks';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: theme.spacing(2),
    padding: 0,
  },
}));

export const MobileMenuButton: FC = () => {
  const showMainMenuIcon = useMobileView();
  const classes = useStyles();
  return (
    <>
      {showMainMenuIcon && (
        <IconButton edge='end' color='inherit' className={classes.root}>
          <MenuIcon />
        </IconButton>
      )}
    </>
  );
};
