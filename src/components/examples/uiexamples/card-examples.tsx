import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { CardGrid } from '@components/cards';

export const CardsExamples: FC = () => {
  return (
    <>
      {/* Large sized Cards */}
      <Box mb={5} mt={8}>
        <Typography component='h2' variant='h4'>
          Cards, size -{' '}
          <code>
            <strong>lg</strong>
          </code>
        </Typography>
      </Box>
      <section className='card-grid'>
        <CardGrid
          title='Development & Technology Partner'
          description='Ultricies sit arcu leo sit euismod phasellus montes, odio nulla. Aliquam rutrum sed scelerisque dui nunc blandit id tincidunt.'
          size='lg'
          imagePath='https://placebear.com/512/200'
        />
        <CardGrid
          title='Customized product'
          description='Ultricies sit arcu odio nulla. Aliui nunc blandit id tincidunt.'
          size='lg'
          imagePath='https://placebear.com/512/200'
          href='https://placebear.com/512/200'
        />
      </section>

      {/* Middle sized Cards */}
      <Box mb={5} mt={8}>
        <Typography component='h2' variant='h4'>
          Cards, size -{' '}
          <code>
            <strong>md</strong>
          </code>
        </Typography>
      </Box>
      <section className='card-grid'>
        <CardGrid
          title='Development & Technology Partner'
          description='Ultricies sit arcu leo sit euismod phasellus montes, odio nulla. Aliquam rutrum sed scelerisque dui nunc blandit id tincidunt.'
          // size='lg' md size is set by default
          imagePath='https://picsum.photos/id/870/330/177?grayscale&blur=2'
        />
        <CardGrid
          title='Customized product'
          description='Ultricies sit arcu odio nulla. Aliui nunc blandit id tincidunt.'
          // size='lg' md size is set by default
          imagePath='https://picsum.photos/id/870/330/177?grayscale&blur=2'
          href='https://picsum.photos/id/870/330/177?grayscale&blur=2'
        />
        <CardGrid
          title='Development & Technology Partner'
          description='Ultricies sit arcu leo sit euismod phasellus montes, odio nulla. Aliquam rutrum sed scelerisque dui nunc blandit id tincidunt.'
          // size='lg' md size is set by default
          imagePath='https://picsum.photos/id/870/330/177?grayscale&blur=2'
        />
        <CardGrid
          title='Customized product'
          description='Ultricies sit arcu odio nulla. Aliui nunc blandit id tincidunt.'
          // size='lg' md size is set by default
          imagePath='https://picsum.photos/id/870/330/177?grayscale&blur=2'
          href='https://picsum.photos/id/870/330/177?grayscale&blur=2'
        />
      </section>

      {/* Small sized Cards */}
      <Box mb={5} mt={8}>
        <Typography component='h2' variant='h4'>
          Cards, size -{' '}
          <code>
            <strong>sm</strong>
          </code>
        </Typography>
      </Box>
      <section className='card-grid'>
        <CardGrid
          title='Development & Technology Partner'
          description='Ultricies sit arcu leo sit euismod phasellus montes, odio nulla. Aliquam rutrum sed scelerisque dui nunc blandit id tincidunt.'
          size='sm'
          imagePath='https://picsum.photos/seed/picsum/250/177'
        />
        <CardGrid
          title='Customized product'
          description='Ultricies sit arcu odio nulla. Aliui nunc blandit id tincidunt.'
          size='sm'
          imagePath='https://picsum.photos/seed/picsum/250/177'
        />
        <CardGrid
          title='Development & Technology Partner'
          description='Ultricies sit arcu leo sit euismod phasellus montes, odio nulla. Aliquam rutrum sed scelerisque dui nunc blandit id tincidunt.'
          size='sm'
          imagePath='https://picsum.photos/seed/picsum/250/177'
        />
        <CardGrid
          title='Customized product'
          description='Ultricies sit arcu odio nulla. Aliui nunc blandit id tincidunt.'
          size='sm'
          imagePath='https://picsum.photos/seed/picsum/250/177'
        />
        <CardGrid
          title='Development & Technology Partner'
          description='Ultricies sit arcu leo sit euismod phasellus montes, odio nulla. Aliquam rutrum sed scelerisque dui nunc blandit id tincidunt.'
          size='sm'
          imagePath='https://picsum.photos/seed/picsum/250/177'
          href='https://picsum.photos/seed/picsum/250/177'
        />
        <CardGrid
          title='Customized product'
          description='Ultricies sit arcu odio nulla. Aliui nunc blandit id tincidunt.'
          size='sm'
          imagePath='https://picsum.photos/seed/picsum/250/177'
          href='https://picsum.photos/seed/picsum/250/177'
        />
        <CardGrid
          title='Customized product'
          description='Ultricies sit arcu odio nulla. Aliui nunc blandit id tincidunt.'
          size='sm'
          imagePath='https://picsum.photos/seed/picsum/250/177'
          href='https://picsum.photos/seed/picsum/250/177'
        />
      </section>
      <style jsx>{`
        .card-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};
