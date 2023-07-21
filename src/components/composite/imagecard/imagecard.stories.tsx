// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { DenImageCard } from './imagecard.component';

const meta: Meta<typeof DenImageCard> = {
  component: DenImageCard,
};

export default meta;
type Story = StoryObj<typeof DenImageCard>;

export const Basic: Story = {
  args: {
    src: 'https://picsum.photos/200/300',
    alt: 'sample image',
    aspectRatio: 1.1,
  },
};
