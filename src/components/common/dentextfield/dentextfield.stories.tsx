// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenTextField } from './dentextfield.component';

const meta: Meta<typeof DenTextField> = {
  component: DenTextField,
};

export default meta;
type Story = StoryObj<typeof DenTextField>;

export const DnmarkDefault: Story = {
  args: {
    label: 'Basic',
    value: 'Basic',
    fullWidth: true,
  },
};
