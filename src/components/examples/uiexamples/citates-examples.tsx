import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Citate } from '@uikit';
import { theme } from '@styles-config';

export const CitatesExamples: FC = () => {
  return (
    <>
      {/* Citates Examples */}
      <Box mb={3} mt={8} textAlign='center'>
        <Typography component='h2' variant='h3'>
          Citates Examples
        </Typography>
      </Box>
      <Box mb={5} mt={3} textAlign='center' width='60%' margin='auto'>
        <Typography component='p' variant='body1'>
          Different type of Citates
        </Typography>
      </Box>
      <section>
        <Citate>
          Our versatile technological portfolio covers different substrate material choices, the use of thin- and
          thick-film technologies and patterning technologies as well as diverse test and assembly options.
        </Citate>
        <hr />
        <Citate
          color={theme.palette.primary.main}
          fontWeight={300}
          fontStyle='normal'
          textAlign='left'
          fontSize='1.25rem'
        >
          Our versatile technological portfolio covers different substrate material choices, the use of thin- and
          thick-film technologies and patterning technologies as well as diverse test and assembly options.
        </Citate>
        <hr />
        <Citate
          color={theme.palette.error.light}
          maxWidth={400}
          fontWeight={500}
          fontStyle='italic'
          textAlign='right'
          fontSize='1.5rem'
        >
          Our versatile technological portfolio covers different substrate material choices, the use of thin- and
          thick-film technologies and patterning technologies as well as diverse test and assembly options.
        </Citate>
        <hr />
        <Citate color={theme.palette.grey[400]} maxWidth={200} fontWeight={600} fontStyle='italic' fontSize='1rem'>
          Our versatile technological portfolio covers different substrate material choices, the use of thin- and
          thick-film technologies and patterning technologies as well as diverse test and assembly options.
        </Citate>
      </section>
    </>
  );
};
