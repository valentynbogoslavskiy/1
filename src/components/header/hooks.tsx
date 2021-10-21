import useMediaQuery from '@material-ui/core/useMediaQuery';

//**
// * @returns @{convertDesktopToMobileView: boolean}
// * uses in header for cases:
// * 1. Show main menu icon
// * 2. Hide main menu items
// * 3. Hide some icons button
//**
// uses for cases
export const useMobileView = (): boolean => {
  const convertDesktopToMobileView = useMediaQuery('(max-width:1091px)');
  return convertDesktopToMobileView;
};
