import { FC } from 'react';

import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Link } from '@uikit';

import { NewsListItemProps } from '@interfaces/news-list-item';

const imageSize = {
  width: 160,
  height: 117,
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  imageWrapper: {
    flex: `0 0 ${imageSize.width}px`,
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(3),

    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  image: {
    maxWidth: '100%',
  },
  text: {
    fontSize: '0.875rem',
    fontStyle: 'italic',
  },
  dateBlock: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    minWidth: '150px',
  },
}));

export const NewsListItem: FC<NewsListItemProps> = ({
  title,
  image,
  description,
  newsCategory,
  date,
  readMoreLink,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section className={`${classes.root}`}>
      <Box className={classes.imageWrapper}>
        <picture>
          {/* if server sends different images with different dimensions use source tag with media attr */}
          {/* <source srcset="/media/cc0-images/surfer-240-200.jpg"
                media="(min-width: 800px)" /> */}
          <img className={classes.image} src={image} alt='card_image_inline_reversed' />
        </picture>
      </Box>
      <Box pl={5} pr={2} className={classes.contentWrapper}>
        <Box mt={0} fontWeight={600} fontSize='1rem'>
          <Typography component='span' variant='inherit'>
            {title}
          </Typography>
        </Box>
        <Box mt={1} mb={2}>
          <Typography component='p' variant='body1'>
            {description}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' width='100%' alignItems='center'>
          {readMoreLink && (
            <Link href={readMoreLink} className='uppercased' style={{ fontSize: '0.875rem' }}>
              Read More
            </Link>
          )}
          <Box
            mt={0}
            fontWeight={600}
            fontSize='0.875rem'
            color={theme.palette.primary.main}
            className={classes.dateBlock}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <Typography component='span' variant='inherit'>
              {new Date(date).toLocaleDateString()}
            </Typography>
            <Typography component='span' variant='inherit'>
              {newsCategory}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        fontWeight={600}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
        fontSize='0.875rem'
        color={theme.palette.primary.main}
        className={classes.dateBlock}
      >
        <Typography component='span' variant='inherit'>
          {new Date(date).toLocaleDateString()}
        </Typography>
        <Typography component='span' variant='inherit'>
          {newsCategory}
        </Typography>
      </Box>
    </section>
  );
};
