import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { ReversedInlineCard } from '@components/cards';

export const CardsReversedInlineExamples: FC = () => {
  return (
    <>
      {/* Inline Reversed Cards */}
      <Box mb={3} mt={8} textAlign='center'>
        <Typography component='h2' variant='h5'>
          Inline Reversed Cards
        </Typography>
      </Box>
      <Box mb={5} mt={3} textAlign='center' width='60%' margin='auto'>
        <Typography component='p' variant='body1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis aliquam massa, imperdiet euismod vitae.
          Magna sed odio risus libero.
        </Typography>
      </Box>
      <section className='card-grid'>
        <ReversedInlineCard
          title={'Development & Technology Partner'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget amet lacus sit amet ipsum arcu. Tristique sit mauris sem diam et.'
          }
          imagePath={'https://picsum.photos/id/501/640/300'}
          href={'https://picsum.photos/id/501/440/200'}
        />
        <ReversedInlineCard
          title={'Development & Technology Partner'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget amet lacus sit amet ipsum arcu. Tristique sit mauris sem diam et.'
          }
          imagePath={'https://picsum.photos/id/77/640/300'}
          href={'https://picsum.photos/id/77/440/200'}
          reversed
        />
        <ReversedInlineCard
          title={'Development & Technology Partner'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget amet lacus sit amet ipsum arcu. Tristique sit mauris sem diam et.'
          }
          imagePath={'https://picsum.photos/id/199/440/200'}
          href={'https://picsum.photos/id/199/440/200'}
        />
        <ReversedInlineCard
          title={'Development & Technology Partner'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget amet lacus sit amet ipsum arcu. Tristique sit mauris sem diam et.'
          }
          imagePath={'https://picsum.photos/id/399/440/200'}
          href={'https://picsum.photos/id/399/440/200'}
          reversed
        />
        <ReversedInlineCard
          title={'Development & Technology Partner'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget amet lacus sit amet ipsum arcu. Tristique sit mauris sem diam et.'
          }
          imagePath={'https://picsum.photos/id/44/440/200'}
          href={'https://picsum.photos/id/44/440/200'}
        />
        <ReversedInlineCard
          title={'Development & Technology Partner'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget amet lacus sit amet ipsum arcu. Tristique sit mauris sem diam et.'
          }
          imagePath={'https://picsum.photos/id/33/440/200'}
          href={'https://picsum.photos/id/33/440/200'}
          reversed
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
