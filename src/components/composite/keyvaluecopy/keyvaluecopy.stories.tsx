import type { Meta, StoryObj } from '@storybook/react';
import KeyValueCopy from './keyvaluecopy.component';

const meta: Meta<typeof KeyValueCopy> = {
  component: KeyValueCopy,
};

export default meta;
type Story = StoryObj<typeof KeyValueCopy>;

export const Primary: Story = {
  args: {
    keyText: '12345',
    valueText: '98765',
  },
};
