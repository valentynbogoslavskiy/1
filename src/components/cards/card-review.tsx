import { FC } from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import grey from '@material-ui/core/colors/grey';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { theme } from '@styles-config';

import { ReviewCardProps } from '@interfaces/cards';

const image = {
  width: 512,
  height: 290,
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: image.width,
    height: image.height,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    overflow: 'hidden',
  },
  image: {
    width: 'auto',
    height: '100%',
    opacity: 0.6,
  },
  text: {
    fontSize: '0.875rem',
    fontStyle: 'italic',
  },
}));

export const ReviewCard: FC<ReviewCardProps> = ({ message, image, author }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <section className={classes.root}>
      <picture>
        {/* if server sends different images with different dimensions use source tag with media attr */}
        {/* <source srcset="/media/cc0-images/surfer-240-200.jpg"
                media="(min-width: 800px)" /> */}
        <img className={classes.image} src={image} alt='review_card_image' />
      </picture>
      <Box position='absolute' width={isMobile ? '100%' : '50%'} height='100%' display='flex' left={0} top={0}>
        <Box position='absolute' width={'100%'} height='100%' top={0} bgcolor={alpha(grey[500], 0.38)}></Box>
        <Box position='static' zIndex='1' display='flex' px={2} py={2} alignItems={isMobile ? 'center' : 'flex-start'}>
          <Typography component='span' className={classes.text} color='textPrimary' variant='body1'>
            {message}
            <br />
            <br />
            -- {author}
          </Typography>
        </Box>
      </Box>
    </section>
  );
};
