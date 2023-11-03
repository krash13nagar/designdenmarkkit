import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AddedStories from './addedstoriescard.component';
import '../../../styles/storybookBasesStyles.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const meta: Meta<typeof AddedStories> = {
  component: AddedStories,
};

export default meta;
type Story = StoryObj<typeof AddedStories>;

export const Basic: Story = {
  args: {
    removeIcon: <DeleteIcon sx={{ fontSize: '16px' }} />,
    popOutIcon: <OpenInNewIcon sx={{ fontSize: '16px' }} />,
    handleRemove: () => {
      console.log('remove clicked');
    },
    handlePopOut: () => {
      console.log('Pop Out button clicked');
    },
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s text.',
  },
};
