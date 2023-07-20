// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenSwitch } from '../switch/switch.component';

const meta: Meta<typeof DenSwitch> = {
  component: DenSwitch,
};

export default meta;
type Story = StoryObj<typeof DenSwitch>;

export const Primary: Story = {
  args: {
    defaultChecked : true
  },
};
