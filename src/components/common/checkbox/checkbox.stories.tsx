// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenCheckbox } from './checkbox.component';

const meta: Meta<typeof DenCheckbox> = {
  component: DenCheckbox,
};

export default meta;
type Story = StoryObj<typeof DenCheckbox>;

export const Primary: Story = {
  args: {
    inputProps: {
      'aria-label': 'Primary',
    },
  },
};
