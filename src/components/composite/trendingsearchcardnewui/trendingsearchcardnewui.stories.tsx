import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';

import { TrendingSearchCardNewUi } from './trendingsearchcardnewui.component';

const meta: Meta<typeof TrendingSearchCardNewUi> = {
    component: TrendingSearchCardNewUi,
};

export default meta;
type Story = StoryObj<typeof TrendingSearchCardNewUi>;

export const Basic: Story = {
    args: {
        count: 100000,
        label: 'World Cup Schedule',
        icon: <TwitterIcon style={{ color: '#5da8dc' }} />,
        tags: "India TV",
        description: "India won the t-20 worldcup 2024 in westindies against the mighty England. ",
        handleClick: () => console.log("clicked!")
    },
};
