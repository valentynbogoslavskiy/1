import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Link } from '@uikit';

export const AuthorizationLinks: FC = () => {
  const matches = useMediaQuery('(min-width:1355px)');
  return (
    <Box style={{ display: 'inline-block' }} mr={3}>
      <Link href='/login'>
        {matches ? (
          <Typography variant='body2' component='span' noWrap>
            Register | SignIn
          </Typography>
        ) : (
          <Typography variant='body2' component='span' noWrap>
            <IconButton edge='end' color='inherit'>
              <PersonOutlineIcon />
            </IconButton>
          </Typography>
        )}
      </Link>
    </Box>
  );
};

export const AuthorizationLinksForMobile: FC = () => {
  return (
    <Box style={{ display: 'inline-block' }} mr={3}>
      <Link href='/login'>
        <Typography variant='body2' component='span' noWrap>
          Register | SignIn
        </Typography>
      </Link>
    </Box>
  );
};
