import { FC } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Link } from '@uikit';

import { SimpleCardGridProps } from '@interfaces/cards';

const imageSizes = {
  sm: {
    width: 250,
    height: 177,
  },
  md: {
    width: 330,
    height: 177,
  },
  lg: {
    width: 512,
    height: 200,
  },
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    width: imageSizes.md.width,
    '&.lg': {
      width: imageSizes.lg.width,
    },
    '&.sm': {
      width: imageSizes.sm.width,
    },
  },
  title: {
    margin: `${theme.spacing(2)} 0`,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  underlined: {
    paddingBottom: theme.spacing(1),
    borderBottom: `1px ${theme.palette.grey[300]} solid`,
  },
}));

export const CardGrid: FC<SimpleCardGridProps> = ({ title, imagePath, description, size = 'md', href }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <section className={`${classes.root} ${matches ? 'sm' : size} ${!imagePath ? classes.underlined : ''}`}>
      {imagePath && (
        <picture>
          {/* if server sends different images with different dimensions use source tag with media attr */}
          {/* <source srcset="/media/cc0-images/surfer-240-200.jpg"
                media="(min-width: 800px)" /> */}
          <img className={classes.image} src={imagePath} alt='card_image' />
        </picture>
      )}
      <Box mt={2} mb={size === 'lg' ? 0 : 1} fontWeight={imagePath ? '400' : '600'}>
        <Typography component='h3' variant={imagePath ? 'h5' : 'inherit'}>
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
    </section>
  );
};
