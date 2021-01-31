import type { Theme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const getDialogWrapperStyles = (theme: Theme) => {
  return {
    overflowY: 'auto',

    '& .MuiDialog-paper': {
      overflowY: 'inherit',
    },

    '& .MuiBackdrop-root': {
      backgroundColor: fade(theme.palette.text.primary, 0.8),
    },

    '& .MuiPaper-rounded': {
      borderRadius: 15,
    },

    '&::-webkit-scrollbar': {
      width: '0.5em',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: fade(theme.palette.text.primary, 0.8),
    },

    '& .MuiDialog-container': {
      height: 'auto',
    },
  } as const;
};
