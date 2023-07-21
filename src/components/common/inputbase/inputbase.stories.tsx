import type { Meta, StoryObj } from '@storybook/react';
import { DenInputBase } from './inputbase.component';

const meta: Meta<typeof DenInputBase> = {
  component: DenInputBase,
};

export default meta;
type Story = StoryObj<typeof DenInputBase>;

export const Primary: Story = {
  args: {
    defaultValue: 'primary',
  },
};
