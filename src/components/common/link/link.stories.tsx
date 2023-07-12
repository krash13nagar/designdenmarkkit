import type { Meta, StoryObj } from '@storybook/react';

import { DenLink } from './link.component';

const meta: Meta<typeof DenLink> = {
  component: DenLink,
};

export default meta;
type Story = StoryObj<typeof DenLink>;

export const Primary: Story = {
  args: {
    children: 'DenLink',
    underline: 'always',
    variant: 'inherit',
    color: 'primary'
  },
};
