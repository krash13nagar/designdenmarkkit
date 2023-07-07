// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenFormControl } from './formcontrol.component';

const meta: Meta<typeof DenFormControl> = {
  component: DenFormControl,
};

export default meta;
type Story = StoryObj<typeof DenFormControl>;

export const Primary: Story = {
  args: {
    defaultValue: 'primary',
  },
};
