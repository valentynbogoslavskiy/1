import { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { HeaderMainLayout } from './header-main-layout';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { PageLoader } from '@components/loader';

import { HeaderProps } from '@interfaces/header';
import { FooterProps } from '@interfaces/footer';

interface MainLayoutProps {
  headerContent: HeaderProps;
  footerContent: FooterProps;
  commonContentLoaded: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 56,
    // height: 200,
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 94,
    },
  },
  footer: {
    padding: theme.spacing(3, 0),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[500],
  },
}));

export const MainLayout: FC<MainLayoutProps> = ({ children, headerContent, footerContent, commonContentLoaded }) => {
  const classes = useStyles();

  return (
    <>
      <PageLoader />
      {commonContentLoaded ? (
        <div className={classes.root}>
          <HeaderMainLayout>
            <Header {...headerContent} />
          </HeaderMainLayout>
          <main className={classes.main}>{children}</main>
          <footer className={classes.footer}>
            <Footer {...footerContent} />
          </footer>
        </div>
      ) : null}
    </>
  );
};
