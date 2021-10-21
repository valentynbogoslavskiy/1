import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { ReviewCard } from '@components/cards';

export const CardsReviewExamples: FC = () => {
  return (
    <>
      {/* Review Cards */}
      <Box mb={5} mt={8}>
        <Typography component='h2' variant='h4'>
          Review Cards
        </Typography>
      </Box>
      <section className='card-grid' style={{ marginBottom: 100 }}>
        <ReviewCard
          message={
            'I have been able to improve my performance by getting particularly detailed information of my body functions, like recovering and metabolism. I was appreciate using such service provided by IST company'
          }
          image={'https://picsum.photos/id/1005/512/290'}
          author={'Roman, athlete'}
        />
        <ReviewCard
          message={
            'I have been able to improve my performance by getting particularly detailed information of my body functions, like recovering and metabolism. '
          }
          image={'https://picsum.photos/id/25/512/290'}
          author={'Andy, athlete'}
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
