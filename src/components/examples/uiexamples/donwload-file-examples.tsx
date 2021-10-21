import { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { DownloadFileLink, DownloadFileButton } from '@uikit';

export const DownloadFilesExamples: FC = () => {
  return (
    <>
      {/* Download file buttons Examples */}
      <Box mb={3} mt={8} textAlign='center'>
        <Typography component='h2' variant='h4'>
          Download file links Examples
        </Typography>
      </Box>
      <Box mb={3} mt={8} textAlign='left'>
        <Typography component='p' variant='h5'>
          Related downloadables
        </Typography>
      </Box>
      <section>
        <DownloadFileLink fileName='Data Sheet Temperature Pt 600 °C' size='682.53 KB' fileType='PDF' />
        <DownloadFileLink fileName='Data Sheet Temperature Pt 600 °C' size='682.53 KB' fileType='PDF' />
        <DownloadFileLink fileName='Data Sheet Temperature Pt 600 °C' size='682.53 KB' fileType='PDF' />
      </section>

      {/* Download file buttons Examples */}
      <Box mb={3} mt={8} textAlign='center'>
        <Typography component='h2' variant='h4'>
          Download file buttons Examples
        </Typography>
      </Box>
      <Box mb={3} mt={8} textAlign='left'>
        <Typography component='p' variant='h5'>
          Related downloadables
        </Typography>
      </Box>
      <section>
        <DownloadFileButton fileName='ESCC QPL Pt temperature sensors' />
        <DownloadFileButton fileName='ESCC specification No. 4006' />
        <DownloadFileButton fileName='ESCC detail specification No. 4006/015' />
      </section>
    </>
  );
};
