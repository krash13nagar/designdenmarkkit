// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenChip } from './chip.component';

const meta: Meta<typeof DenChip> = {
  component: DenChip,
};

export default meta;
type Story = StoryObj<typeof DenChip>;

export const Primary: Story = {
  args: {
    // primary: true,
    label: 'primary',
    // icon: '',
    // onDelete: false,
  },
};
