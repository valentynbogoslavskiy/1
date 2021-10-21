import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { CardGrid } from '@components/cards';

export const CardsNoImageExample: FC = () => {
  return (
    <>
      {/* Review Cards */}
      <Box mb={5} mt={8}>
        <Typography component='h2' variant='h4'>
          No Image Cards
        </Typography>
      </Box>
      <section className='card-grid' style={{ marginBottom: 100 }}>
        <CardGrid
          title='Development & Technology Partner'
          description='Ultricies sit arcu leo sit euismod phasellus montes, odio nulla. Aliquam rutrum sed scelerisque dui nunc blandit id tincidunt.'
        />
        <CardGrid
          title='Customized product'
          description='Ultricies sit arcu odio nulla. Aliui nunc blandit id tincidunt.'
          href='https://placebear.com/512/200'
        />
      </section>

      <style jsx>{`
        .card-grid {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};
