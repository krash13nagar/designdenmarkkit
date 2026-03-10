import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ImageContentCard from './imagecontentcard.component';
import ImageIcon from '../../../assets/cdsicons/imageicon';

const meta: Meta<typeof ImageContentCard> = {
    title: 'Composite/ImageContentCard',
    component: ImageContentCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageContentCard>;

export const Default: Story = {
    args: {
        imageUrl: 'https://via.placeholder.com/400x300',
        date: '13 Jan 2026 01:36 PM',
        dimensions: '1600 X 900',
        imageIcon: <ImageIcon />,
        menuOptions: [
            {
                label: 'Create Image Post',
                onClick: () => console.log('Create Image Post clicked'),
            },
            {
                label: 'Edit',
                onClick: () => console.log('Edit clicked'),
            },
            {
                label: 'Search similar images',
                onClick: () => console.log('Search similar images clicked'),
            },
            {
                label: 'Download',
                onClick: () => console.log('Download clicked'),
            },
            {
                label: 'Report',
                onClick: () => console.log('Report clicked'),
            },
        ],
    },
};
