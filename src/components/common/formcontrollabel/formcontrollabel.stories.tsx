// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenFormControlLabel } from './formcontrolllabel.component';

const meta: Meta<typeof DenFormControlLabel> = {
  component: DenFormControlLabel,
};

export default meta;
type Story = StoryObj<typeof DenFormControlLabel>;

export const Primary: Story = {
  args: {
    label: 'primary',
  },
};
