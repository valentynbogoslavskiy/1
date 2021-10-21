import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

import { MainMenu } from './menu';
import { Logo } from './logo';
import { HeaderIcons } from './header-icons';
import { AuthorizationLinks } from './authorization';
import { LocalesSettingsLinks } from './locale-setting-link';

import { HeaderProps } from '@interfaces/header';
import { useMobileView } from './hooks';

export const Header: FC<HeaderProps> = ({ menu, auth, icons }) => {
  const matches = useMobileView();
  return (
    <>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item style={{ width: matches ? '20%' : '47%', display: matches ? 'none' : 'block' }}>
        <MainMenu menu={menu} />
      </Grid>
      <Grid item>
        {!matches && (
          <>
            <LocalesSettingsLinks />
            <AuthorizationLinks />
          </>
        )}
        <HeaderIcons icons={icons} />
      </Grid>
    </>
  );
};
