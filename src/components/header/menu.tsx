import { FC } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';

import { Link } from '@uikit';
import { useMobileView } from './hooks';

export const MainMenu: FC<{ menu: string[] }> = ({ menu }) => {
  const matches = useMediaQuery('(min-width:1160px)');
  const showMainMenu = useMobileView();
  const gridItemStyle = { width: matches ? '13%' : '14%' };
  return (
    <nav>
      {!showMainMenu ? (
        <Grid container alignItems='baseline' justifyContent='center'>
          <Grid item style={gridItemStyle}>
            <Link href={'/'} display='block' style={{ textAlign: 'center' }}>
              <Typography variant='body2' component='span'>
                Home
              </Typography>
            </Link>
          </Grid>
          {menu.map((item) => {
            const routeUrl = item.replace(' ', '-').toLowerCase();
            return (
              <Grid item key={`item_${Math.random()}`} style={gridItemStyle}>
                <Link display='block' href={`/${routeUrl}`} style={{ textAlign: 'center' }}>
                  <Typography variant='body2' component='span'>
                    {item}
                  </Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <IconButton edge='end' color='inherit'>
          <LanguageIcon />
        </IconButton>
      )}
    </nav>
  );
};
