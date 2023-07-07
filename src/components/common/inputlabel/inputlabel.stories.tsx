// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenInputLabel } from './inputlabel.component';

const meta: Meta<typeof DenInputLabel> = {
  component: DenInputLabel,
};

export default meta;
type Story = StoryObj<typeof DenInputLabel>;

export const Primary: Story = {
  args: {
    defaultValue: 'primary',
  },
};
