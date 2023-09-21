import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import ArticlePreviewCard from './articlepreviewcard.component';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../../../styles/storybookBasesStyles.scss';

const meta: Meta<typeof ArticlePreviewCard> = {
  component: ArticlePreviewCard,
};

export default meta;
type Story = StoryObj<typeof ArticlePreviewCard>;

export const Basic: Story = {
  args: {
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: 'July 7, 2023',
    wordCount: '234',
    agency: 'ANI',
    source: 'PTI',
    ctaIcon: <OpenInNewIcon />,
    imgUrl:
      'https://qc8denmark.timesinternet.in/cmslite/api/app/image.jpg?wfid=622048&l=112964&ts=1690526778195',
    imagePlaceholderIcon: <AccountCircleIcon />,
    handleCardClick: () => console.log('card clicked!'),
    handleCTAClick: () => console.log('cta clicked'),
    ctaTooltipText: 'Open in new tab',
    msid: '123456',
  },
};
