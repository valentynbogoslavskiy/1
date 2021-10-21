import { FC } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { AppButton } from '@uikit';

import styles from './index.module.scss';

interface FullPageImageBannerProps {
  subtitle?: string;
  backgroundImageName: string;
  cta?: string;
  size?: 'lg' | 'md';
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    maxWidth: 1440,
    height: 533,
    overflow: 'hidden',
    width: '100%',
    padding: '0 25px',
    '&.lg': {
      height: 533,
    },
    '&.md': {
      height: 380,
      justifyContent: 'flex-start',
      paddingTop: theme.spacing(9),
    },
  },
  content: {
    maxWidth: 400,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      maxWidth: '100%',
    },
  },
  subtitle: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(2),
    fontWeight: 300,
    fontSize: '1.5rem',
  },
}));

export const FullPageImageBanner: FC<FullPageImageBannerProps> = ({
  children,
  subtitle,
  backgroundImageName,
  cta,
  size = 'lg',
}) => {
  const classes = useStyles();
  return (
    <>
      <section className={`${classes.root} ${styles[backgroundImageName]} ${size}`}>
        <Container maxWidth='lg'>
          <div className={classes.content}>
            {children}
            {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
            {cta && (
              <AppButton variant='contained' color='primary'>
                {cta}
              </AppButton>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};
