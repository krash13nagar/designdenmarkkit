// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ImageCard } from './imagecard.component';

const meta: Meta<typeof ImageCard> = {
  component: ImageCard,
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const Basic: Story = {
  args: {
    src: 'https://picsum.photos/200/300',
    alt: 'sample image',
    aspectRatio: 1.1,
  },
};
