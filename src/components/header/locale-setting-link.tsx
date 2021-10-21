import { FC, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { AppButton, CasedStyle, AppModal } from '@uikit';

export const LocalesSettingsModal: FC<{ open: boolean; handleClose: () => void }> = ({ open, handleClose }) => {
  return (
    <AppModal open={open} handleClose={handleClose}>
      <h2 id='transition-modal-title'>Region or Language settings</h2>
      <p id='transition-modal-description'>here you can your region settings</p>
      <AppButton variant='contained' color='primary' onClick={handleClose}>
        Close modal
      </AppButton>
    </AppModal>
  );
};

export const LocalesSettingsLinks: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const matches = useMediaQuery('(min-width:1160px)');
  return (
    <>
      <Box component='div' display='inline' mr={3}>
        {matches ? (
          <AppButton
            nohover
            style={{ top: '-1px' }}
            casedStyle={CasedStyle.CAPITAL}
            onClick={() => setShowModal(!showModal)}
          >
            <Typography variant='body2' component='a' noWrap>
              Region | Language
            </Typography>
          </AppButton>
        ) : (
          <IconButton edge='end' color='inherit'>
            <LanguageIcon />
          </IconButton>
        )}
      </Box>
      {showModal && <LocalesSettingsModal open={showModal} handleClose={() => setShowModal(false)} />}
    </>
  );
};

export const LocalesSettingsLinksMobile: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Box component='div' display='inline' mr={3}>
        <AppButton
          nohover
          style={{ top: '-1px' }}
          casedStyle={CasedStyle.CAPITAL}
          onClick={() => setShowModal(!showModal)}
        >
          <Typography variant='body2' component='a' noWrap>
            Region | Language
          </Typography>
        </AppButton>
      </Box>
      {showModal && <LocalesSettingsModal open={showModal} handleClose={() => setShowModal(false)} />}
    </>
  );
};
