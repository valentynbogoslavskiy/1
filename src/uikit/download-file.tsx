import React, { FC } from 'react';

import Image from 'next/image';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Link } from '@uikit';
import { appOptions } from '@styles-config';

interface DownloadFileLinkProps {
  fileName: string;
  fileType: string;
  size: string | number;
}

export const DownloadFileLink: FC<DownloadFileLinkProps> = ({ fileName, fileType, size }) => {
  return (
    <Box width='100%' my={2} display='flex' justifyContent='flex-start' alignItems='flex-start'>
      <Box
        width={32}
        height={32}
        bgcolor={appOptions.palette.primaryExtraLight}
        borderRadius='50%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Image src='/images/download.png' alt='download_button' width='16' height='18' />
      </Box>
      <Box display='flex' flexDirection='column' ml={2}>
        <Link style={{ textDecoration: 'underline' }} href='https://file/with/name'>
          {fileName}
        </Link>
        <Typography component='p' variant='inherit'>
          {fileType}, {size}
        </Typography>
      </Box>
    </Box>
  );
};

interface DownloadFileButtonProps {
  fileName: string;
}

export const DownloadFileButton: FC<DownloadFileButtonProps> = ({ fileName }) => {
  return (
    <Link href='https://file/with/name'>
      <Box
        width='100%'
        maxWidth={424}
        my={2}
        py={2}
        px={2}
        display='flex'
        justifyContent='flex-start'
        alignItems='center'
        bgcolor={appOptions.palette.primaryExtraLight}
      >
        <Box width={32} height={32} display='flex' justifyContent='center' alignItems='center'>
          <Image src='/images/download.png' alt='download_button' width='16' height='18' />
        </Box>
        <Box display='flex' flexDirection='column' ml={2}>
          <Typography component='p' variant='body1' color='textPrimary'>
            {fileName}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
