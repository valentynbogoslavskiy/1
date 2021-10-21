import { FC } from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Link } from '@uikit';
import { theme } from '@styles-config';

import { FooterProps, SocialLinksType } from '@interfaces/footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: `33.33% 33.33% 33.33%`,
    gridGap: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: `50% 50%`,
    },
  },
  ['merge-in-one-column']: {
    [theme.breakpoints.down('xs')]: {
      // marginTop: `${theme.spacing(8) * -1}px`,
      // gridColumnStart: 2,
      // gridColumnEnd: 2,
      // gridRowStart: 2,
      // gridRowEnd: 2,
    },
  },
  gridItem: {
    // extra styles for grid block
    display: 'flex',
    justifyContent: 'center',
  },
  socialLinks: {
    display: 'grid',
    gridGap: theme.spacing(1),
    gridTemplateColumns: `repeat(4, [col] ${theme.spacing(6)}px)`,
    marginTop: `${theme.spacing(7)}px`,
  },
  privacyLinks: {
    display: 'grid',
    gridGap: theme.spacing(1),
    gridTemplateColumns: `repeat(4, [col] ${theme.spacing(11)}px)`,
    marginTop: `${theme.spacing(4)}px`,
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: `${theme.spacing(11)}px`,
      marginTop: `${theme.spacing(4)}px`,
      gridTemplateRows: 'repeat(4, [row] auto)',
    },
  },
  listItem: {
    textAlign: 'center',
  },
}));

export const Footer: FC<FooterProps> = ({ menu, socialLinks, legalMenu }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const classes = useStyles();
  const itemCountInColumn = matches ? [5, 8] : [5, 4, 4]; // 12- current length of menu array with the items
  let currentSumItems = 0;
  return (
    <>
      <div className={classes.root}>
        {itemCountInColumn.map((count, index) => {
          const gridItemClass =
            index === itemCountInColumn.length - 1
              ? `${classes['merge-in-one-column']} ${classes.gridItem}`
              : `${classes.gridItem}`;

          currentSumItems = currentSumItems + itemCountInColumn[index];
          const start = index === 0 ? 0 : currentSumItems - count;
          const end = index === 0 ? count : currentSumItems;
          const slicedMenu = menu.slice(start, end);

          return (
            <div className={gridItemClass} key={index}>
              <List dense disablePadding={true}>
                {slicedMenu.map((item, itemindex) => {
                  return (
                    itemindex < count && (
                      <ListItem key={item.id}>
                        <Link style={{ color: theme.palette.common.white }} href={`${item.path}`}>
                          {item.title}
                        </Link>
                      </ListItem>
                    )
                  );
                })}
              </List>
            </div>
          );
        })}
      </div>
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Grid item>
          <div className={classes.socialLinks}>
            {socialLinks.map((item) => {
              return (
                <div key={item.id} className={classes.listItem}>
                  <Link style={{ color: theme.palette.common.white }} href={item.path}>
                    <IconButton edge='end' color='inherit'>
                      {item.title === SocialLinksType.FB && <FacebookIcon />}
                      {item.title === SocialLinksType.TW && <TwitterIcon />}
                      {item.title === SocialLinksType.LN && <LinkedInIcon />}
                      {item.title === SocialLinksType.YT && <YouTubeIcon />}
                    </IconButton>
                  </Link>
                </div>
              );
            })}
          </div>
        </Grid>
        <Grid item>
          <div className={classes.privacyLinks}>
            {legalMenu.map((item) => {
              return (
                <div className={classes.listItem} key={item.id}>
                  <Link style={{ color: theme.palette.common.white }} href={item.path}>
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </>
  );
};
