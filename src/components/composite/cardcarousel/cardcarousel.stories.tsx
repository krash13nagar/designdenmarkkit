import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/storybookBasesStyles.scss';
import CardCarousel from './cardcarousel.component';
import { ArticlePreviewCard } from '../articlepreviewcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const meta: Meta<typeof CardCarousel> = {
  component: CardCarousel,
};

export default meta;
type Story = StoryObj<typeof CardCarousel>;

export const Basic: Story = {
  args: {
    Component: ArticlePreviewCard,
    componentPropsList: [
      {
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
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
      },
      {
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
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
      },
      {
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
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
      },
      {
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
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
      },
    ],
  },
};
