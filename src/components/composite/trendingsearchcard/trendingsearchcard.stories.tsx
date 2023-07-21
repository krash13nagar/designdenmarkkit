import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';

import { TrendingSearchCard } from './trendingsearchcard.component';

const meta: Meta<typeof TrendingSearchCard> = {
    component: TrendingSearchCard,
};

export default meta;
type Story = StoryObj<typeof TrendingSearchCard>;

export const Basic: Story = {
    args: {
        count: '100K+',
        label: 'World Cup Schedule',
        icon: <TwitterIcon style={{ color: '#5da8dc' }} />,
        handleClick : ()=>console.log("clicked!")
    },
};
