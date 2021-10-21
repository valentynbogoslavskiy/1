import { FC } from 'react';

import Image from 'next/image';

import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

import { Link } from '@uikit';
import { ContactCardProps, ProductCardProps, CaseStudyCardProps } from '@interfaces/cards';

const imageSizes = {
  width: 336,
  height: 194,
};

const useCommonStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    width: imageSizes.width,
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)',
  },
  header: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

const useContactsCardStyles = makeStyles((theme: Theme) => ({
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: `80px 1fr`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export const ContactCard: FC<ContactCardProps> = ({ title, image, subtitle, linkedin, contacts }) => {
  const commonClasses = useCommonStyles();
  const classes = useContactsCardStyles();
  return (
    <section className={commonClasses.root}>
      <header className={commonClasses.header}>
        <Box mt={0} mb={1}>
          <Typography component='h3'>
            <strong>{title}</strong>
          </Typography>
        </Box>
        <Box mt={0} mb={2}>
          <Typography component='p' color='textPrimary' variant='body1'>
            {subtitle}
          </Typography>
        </Box>
      </header>
      <picture>
        {/* if server sends different images with different dimensions use source tag with media attr */}
        {/* <source srcset="/media/cc0-images/surfer-240-200.jpg"
                media="(min-width: 800px)" /> */}
        <img className={commonClasses.image} src={image} alt='contact_card_image' />
      </picture>
      <div className={classes.contactGrid}>
        <Typography component='span' color='textSecondary' variant='body1'>
          Region:
        </Typography>
        <Typography component='span' color='textSecondary' variant='body1'>
          {contacts.region}
        </Typography>
        <Typography component='span' color='textSecondary' variant='body1'>
          Phone:
        </Typography>
        <Typography component='span' color='textSecondary' variant='body1'>
          {contacts.phone}
        </Typography>
        <Typography component='span' color='textSecondary' variant='body1'>
          Email:
        </Typography>
        <Typography component='span' color='textSecondary' variant='body1'>
          {contacts.email}
        </Typography>
      </div>

      {linkedin && (
        <Box mt={3} mb={2} width={'100%'} px={2} className={classes.cardFooter}>
          <Link href={linkedin} className='uppercased'>
            <Image src='/icons/linkedin.svg' alt='linkedin' width='96' height='24' />
          </Link>
        </Box>
      )}
    </section>
  );
};

const useProductCardStyles = makeStyles((theme: Theme) => ({
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: `80px 1fr`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
export const ProductCard: FC<ProductCardProps> = ({ title, image, subtitle, details, description, isFavourite }) => {
  const commonClasses = useCommonStyles();
  const classes = useProductCardStyles();
  return (
    <section className={commonClasses.root}>
      <header className={commonClasses.header}>
        <Box mt={0} mb={3}>
          <Typography component='h3'>
            <strong>{title}</strong>
          </Typography>
        </Box>
        <Box mt={0} mb={2}>
          <Typography component='p' className={classes.subtitle} color='textSecondary'>
            {subtitle}
          </Typography>
        </Box>
      </header>
      <picture>
        {/* if server sends different images with different dimensions use source tag with media attr */}
        {/* <source srcset="/media/cc0-images/surfer-240-200.jpg"
                media="(min-width: 800px)" /> */}
        <img className={commonClasses.image} src={image} alt='contact_card_image' />
      </picture>
      <Box px={2} mt={2}>
        {/* !!!@todo this data should be inputed from !!!@{description}!!! object */}
        <Box>
          <Typography component='span' className={classes.subtitle} color='textSecondary' variant='body1'>
            Range: -200°C to +600°C
          </Typography>
        </Box>
        <Box>
          <Typography component='span' className={classes.subtitle} color='textSecondary' variant='body1'>
            Dimentions: 2.3 x 2.0 mm
          </Typography>
        </Box>
        <Box>
          <Typography component='span' className={classes.subtitle} color='textSecondary' variant='body1'>
            Wires: 100 mm
          </Typography>
        </Box>
        <Box>
          <Typography component='span' className={classes.subtitle} color='textSecondary' variant='body1'>
            Product code: 100118
          </Typography>
        </Box>
      </Box>

      <Box mt={3} mb={2} width={'100%'} px={2} className={classes.cardFooter}>
        <Link href={details} className='uppercased' style={{ fontSize: '0.875rem' }}>
          Details
        </Link>
        {/* there are two colors required color='primary' and color='inherit', inherit value uses when product is not in favourite yet */}
        <IconButton edge='end' color={`${isFavourite ? 'primary' : 'inherit'}`}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </section>
  );
};

const useCaseStudyCardStyles = makeStyles((theme: Theme) => ({
  subtitle: {
    fontSize: '0.875rem',
    color: theme.palette.grey[800],
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: `80px 1fr`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  description: {
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
}));
export const CaseStudyCard: FC<CaseStudyCardProps> = ({ title, image, subtitle, details, description }) => {
  const commonClasses = useCommonStyles();
  const classes = useCaseStudyCardStyles();
  return (
    <section className={commonClasses.root}>
      <header className={commonClasses.header}>
        <Box mt={0} mb={3}>
          <Typography component='h3'>
            <strong>{title}</strong>
          </Typography>
        </Box>
        <Box mt={0} mb={2}>
          <Typography component='p' className={classes.subtitle}>
            {subtitle}
          </Typography>
        </Box>
      </header>
      <picture>
        {/* if server sends different images with different dimensions use source tag with media attr */}
        {/* <source srcset="/media/cc0-images/surfer-240-200.jpg"
                media="(min-width: 800px)" /> */}
        <img className={commonClasses.image} src={image} alt='contact_card_image' />
      </picture>
      <Box px={2} mt={2}>
        {/* !!!@todo this data should be inputed from !!!@{description}!!! object */}
        <Box>
          <Typography component='span' className={classes.description} color='textSecondary' variant='body1'>
            {description}
          </Typography>
        </Box>
      </Box>

      {details && (
        <Box mt={3} mb={2} width={'100%'} px={2} className={classes.cardFooter}>
          <Link href={details} className='uppercased' style={{ fontSize: '0.875rem' }}>
            Read More
          </Link>
        </Box>
      )}
    </section>
  );
};
