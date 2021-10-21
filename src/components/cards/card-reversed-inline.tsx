import { FC } from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

// import { theme } from '@styles-config';

import { Link } from '@uikit';

import { ReversedInlineCardProps } from '@interfaces/cards';

// const image = {
//   width: 440,
//   height: 200,
// };

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  reversed: {
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  imageWrapper: {
    width: 440,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 320,
    },
  },
  contentWrapper: {
    width: 500,

    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      maxWidth: 440,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 320,
    },
  },
  image: {
    maxWidth: '100%',
  },
  text: {
    fontSize: '0.875rem',
    fontStyle: 'italic',
  },
}));

export const ReversedInlineCard: FC<ReversedInlineCardProps> = ({
  title,
  imagePath,
  description,
  href,
  reversed = false,
}) => {
  const classes = useStyles();
  return (
    <section className={`${classes.root} ${reversed ? classes.reversed : ''} `}>
      <Box className={classes.imageWrapper}>
        <picture>
          {/* if server sends different images with different dimensions use source tag with media attr */}
          {/* <source srcset="/media/cc0-images/surfer-240-200.jpg"
                media="(min-width: 800px)" /> */}
          <img className={classes.image} src={imagePath} alt='card_image_inline_reversed' />
        </picture>
      </Box>
      <Box pl={5} pr={2} className={classes.contentWrapper}>
        <Box mt={2} fontWeight={300} fontSize='1.5rem'>
          <Typography component='span' variant='inherit'>
            {title}
          </Typography>
        </Box>
        <Box mt={1} mb={2}>
          <Typography component='p' variant='body1'>
            {description}
          </Typography>
        </Box>
        {href && (
          <Link href={href} className='uppercased' style={{ fontSize: '0.875rem' }}>
            Read More
          </Link>
        )}
      </Box>
    </section>
  );
};
