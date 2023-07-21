// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenCircularProgress } from './circularprogress.component';

const meta: Meta<typeof DenCircularProgress> = {
  component: DenCircularProgress,
};

export default meta;
type Story = StoryObj<typeof DenCircularProgress>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
