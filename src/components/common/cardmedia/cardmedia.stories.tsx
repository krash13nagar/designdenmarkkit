// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenCardMedia } from './cardmedia.component';

const meta: Meta<typeof DenCardMedia> = {
  component: DenCardMedia,
};

export default meta;
type Story = StoryObj<typeof DenCardMedia>;

export const Primary: Story = {
  args: {
    src: 'https://i.imgur.com/fHyEMsl.jpg',
  },
};
