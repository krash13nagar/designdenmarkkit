import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AddedStories from './addedstories.component';
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
    stories: [
      {
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s text.',
        id: '123445',
      },
      {
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s text.',
        id: '1542352',
      },
    ],
    removeIcon: <DeleteIcon sx={{ fontSize: '16px' }} />,
    popOutIcon: <OpenInNewIcon sx={{ fontSize: '16px' }} />,
    handleGenerateStory: () => {
      console.log('genearte story clicked!');
    },
    handleRemove: () => {
      console.log('remove clicked');
    },
    handlePopOut: () => {
      console.log('Pop Out button clicked');
    },
    countLabel: 'This is count label',
  },
};
