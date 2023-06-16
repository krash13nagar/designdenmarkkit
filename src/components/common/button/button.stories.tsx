// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { DenButton } from './button.component';

const meta: Meta<typeof DenButton> = {
  component: DenButton,
};

export default meta;
type Story = StoryObj<typeof DenButton>;

export const Primary: Story = {
  args: {
    // primary: true,
    children: 'DenButton',
  },
};
