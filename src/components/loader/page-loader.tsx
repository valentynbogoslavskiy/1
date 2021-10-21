import { FC, useEffect, useState } from 'react';

import Router from 'next/router';

import { makeStyles } from '@material-ui/core/styles';

import { Loader } from '@components/loader';

const TRANSITION_TIME = '100ms';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
    transition: `opacity ease-in-out ${TRANSITION_TIME}`,
  },
  fade: {
    transition: `opacity ease-in-out ${TRANSITION_TIME}`,
    opacity: 0.9,
    zIndex: 9999,
  },
}));

export const PageLoader: FC = () => {
  const classes = useStyles();
  const [showLoader, setShowLoader] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const SHOW_PAGE_LOADER_DELAY = 300; // time in ms

  const routeChangeStart = (): void => {
    const timer_ = setTimeout(() => {
      setShowLoader(true);
    }, SHOW_PAGE_LOADER_DELAY);
    setTimer(timer_);
  };

  const routeChangeEnd = (): void => {
    setShowLoader(false);
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
      if (timer) clearTimeout(timer);
      setTimer(null);
    };
  }, []);

  return (
    <div className={`${classes.root}  ${showLoader ? classes.fade : ''}`}>
      <Loader />
    </div>
  );
};
