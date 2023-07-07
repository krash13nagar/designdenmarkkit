// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenInputAdornment } from './inputadornment.component';

const meta: Meta<typeof DenInputAdornment> = {
  component: DenInputAdornment,
};

export default meta;
type Story = StoryObj<typeof DenInputAdornment>;

export const Primary: Story = {
  args: {
    defaultValue: 'primary',
  },
};
