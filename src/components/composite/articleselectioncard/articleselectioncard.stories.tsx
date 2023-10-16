import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ArticleSelectionCard from './articleselectioncard.component';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const meta: Meta<typeof ArticleSelectionCard> = {
  component: ArticleSelectionCard,
};

export default meta;
type Story = StoryObj<typeof ArticleSelectionCard>;

export const ArticleSelection: Story = {
  args: {
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry ',
    synopsis:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: 'July 7, 2023',
    wordCount: '234',
    agency: 'ANI',
    source: 'PTI',
    handleCardClick: () => console.log('card clicked!'),
    publishedBy: [
      { hostLabel: 'TOI', hostName: 'Times Of India' },
      {
        hostLabel: 'ET',
        hostName: 'Economic Times',
      },
      {
        hostLabel: 'AR',
        hostName: 'Absolute Radio',
      },
    ],
    id: '123456',
    addIcon: <ControlPointRoundedIcon />,
    addedIcon: <CheckCircleRoundedIcon />,
    popOutIcon: <OpenInNewIcon sx={{ fontSize: '16px' }} />,
    handleAdd: () => {
      console.log('Add button clicked');
    },
    handlePopOut: () => {
      console.log('Pop Out button clicked');
    },
  },
};

export const EventSelectionCard: Story = {
  args: {
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry ',
    synopsis:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    handleCardClick: () => console.log('card clicked!'),
    showReadMoreInSynopsis: true,
  },
};
