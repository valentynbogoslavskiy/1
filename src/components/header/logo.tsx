import NextLink from 'next/link';
import Image from 'next/image';

import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import { MobileMenuButton } from './mobile-menu-icon';
import { useMobileView } from './hooks';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  logoLink: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    '& *': {
      lineHeight: 1.1,
    },
    '& p': {
      fontSize: 13,
      fontWeight: 600,
    },
    '& span': {
      display: 'inline-block',
      marginTop: -4,
      fontSize: 10,
    },
    '&>h1': {
      marginLeft: 8,
    },
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
}));

export const Logo: FC = () => {
  const classes = useStyles();
  const matches = useMobileView();
  return (
    <div className={classes.root}>
      <MobileMenuButton />
      <NextLink href='/'>
        <div className={classes.logoLink}>
          <Image src='/images/logo-icon.png' alt='logo' width='35' height='25' />
          {!matches && (
            <Typography component='h1'>
              <Typography variant='subtitle1' component='p'>
                Innovative
              </Typography>
              <Typography variant='subtitle1' component='p'>
                Sensor Technology
              </Typography>
              <Typography variant='caption' component='span'>
                physical. chemical. biological.
              </Typography>
            </Typography>
          )}
        </div>
      </NextLink>
    </div>
  );
};
