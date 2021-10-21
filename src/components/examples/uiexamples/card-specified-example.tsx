import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { CaseStudyCard, ContactCard, ProductCard } from '@components/cards';

export const CardsSpecifiedExamples: FC = () => {
  return (
    <>
      {/* Contact Cards */}
      <Box mb={5} mt={8}>
        <Typography component='h2' variant='h4'>
          Contact Cards
        </Typography>
      </Box>
      <section className='card-grid'>
        <ContactCard
          title={'Scarlet Marta'}
          subtitle={'Sales Manager, esp. Space'}
          image={'https://picsum.photos/id/1025/336/194'}
          contacts={{
            region: 'Switzerland, Italy, France, Spain',
            phone: '+41 71 992 01 00',
            email: 'first.lastname@ist-ag.com',
          }}
          linkedin={'https://picsum.photos/id/1025/336/194'}
        />
        <ContactCard
          title={'Roman Horbunov'}
          subtitle={'Front-End developer'}
          image={'https://picsum.photos/id/1001/336/194'}
          contacts={{
            region: 'Ukraine',
            phone: '+38 71 992 01 00',
            email: 'first.lastname@ist-ag.com',
          }}
          linkedin={'https://picsum.photos/id/1001/336/194'}
        />
      </section>

      {/* Products Cards */}
      <Box mb={5} mt={8}>
        <Typography component='h2' variant='h4'>
          Products Cards
        </Typography>
      </Box>
      <section className='card-grid'>
        <ProductCard
          title={`PT100, (232) IEC 60751 F0.1`}
          subtitle='Temperature > Platinum'
          image={'https://picsum.photos/id/45/336/194'}
          description={{
            region: 'Switzerland, Italy, France, Spain',
            phone: '+41 71 992 01 00',
            email: 'first.lastname@ist-ag.com',
          }}
          details={'https://picsum.photos/id/1025/336/194'}
          isFavourite
        />
        <ProductCard
          title={`PT100, (232) IEC 60751 F0.1`}
          subtitle='Temperature > Platinum'
          image={'https://picsum.photos/id/5/336/194'}
          description={{
            region: 'Switzerland, Italy, France, Spain',
            phone: '+41 71 992 01 00',
            email: 'first.lastname@ist-ag.com',
          }}
          details={'https://picsum.photos/id/5/336/194'}
          isFavourite={false}
        />
      </section>

      {/* Case Study Cards */}
      <Box mb={5} mt={8}>
        <Typography component='h2' variant='h4'>
          Case Study Cards
        </Typography>
      </Box>
      <section className='card-grid'>
        <CaseStudyCard
          title={`Case_study_name 1`}
          subtitle='#Space & Aerospace#Flow sensors #Micro-pumps'
          image={'https://picsum.photos/id/15/336/194'}
          description={'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor. Lorem ipsum sit amet'}
          details={'https://picsum.photos/id/15/336/194'}
        />
        <CaseStudyCard
          title={`Case_study_name 2`}
          subtitle='#Space & Aerospace#Flow sensors #Micro-pumps'
          image={'https://picsum.photos/id/55/336/194'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,'
          }
          details={'https://picsum.photos/id/55/336/194'}
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
