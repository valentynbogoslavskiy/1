import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { NewsListItem } from '@components/news-list-item';
import { CheckboxInput } from '@uikit';
import { theme } from '@styles-config';

export const NewsListExamples: FC = () => {
  return (
    <>
    {/* Citates Examples */}
      <Box mb={2} mt={3}>
        <Typography component='h2' variant='h3'>
          Check the type of news by these checkboxes
        </Typography>
      </Box>
      <Box mb={5} mt={2} textAlign='left'>
        <CheckboxInput label='Company News' />
        <CheckboxInput label='Product News' />
        <CheckboxInput label='Focus Article' />
        <CheckboxInput label='Insight Articles' />
      </Box>
      {/* Citates Examples */}
      <Box mb={3} mt={8} textAlign='center'>
        <Typography component='h2' variant='h3'>
          News Examples
        </Typography>
      </Box>
      <Box mb={5} mt={3} textAlign='center' width='60%' margin='auto'>
        <Typography component='p' variant='body1'>
          News List for News page
        </Typography>
      </Box>
      <section className='card-grid'>
        <NewsListItem
          title={'Jobst Technologies ISO 9001 certification'}
          description={
            'After fulfilling the stringent requirements, Jobst Technologies GmbH was certified according to ISO 9001:2015 by the accredited certification company Bureau Veritas.'
          }
          date={1631878013285}
          image={'https://picsum.photos/id/456/160/117'}
          newsCategory={'Product News'}
          readMoreLink={'https://picsum.photos/id/456/160/117'}
        />
        <NewsListItem
          title={'Jobst Technologies ISO 9001 certification'}
          description={
            'After fulfilling the stringent requirements, Jobst Technologies GmbH was certified according to ISO 9001:2015 by the accredited certification company Bureau Veritas.'
          }
          date={1631878013285}
          image={'https://picsum.photos/id/134/160/117'}
          newsCategory={'Product News'}
          readMoreLink={'https://picsum.photos/id/134/160/117'}
        />
        <NewsListItem
          title={'Jobst Technologies ISO 9001 certification'}
          description={
            'After fulfilling the stringent requirements, Jobst Technologies GmbH was certified according to ISO 9001:2015 by the accredited certification company Bureau Veritas.'
          }
          date={1631878013285}
          image={'https://picsum.photos/id/76/160/117'}
          newsCategory={'Product News'}
          readMoreLink={'https://picsum.photos/id/76/160/117'}
        />
        <NewsListItem
          title={'Jobst Technologies ISO 9001 certification'}
          description={
            'After fulfilling the stringent requirements, Jobst Technologies GmbH was certified according to ISO 9001:2015 by the accredited certification company Bureau Veritas.'
          }
          date={1631878013285}
          image={'https://picsum.photos/id/89/160/117'}
          newsCategory={'Product News'}
          readMoreLink={'https://picsum.photos/id/89/160/117'}
        />
      </section>
      <style jsx>{`
        .card-grid {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};
