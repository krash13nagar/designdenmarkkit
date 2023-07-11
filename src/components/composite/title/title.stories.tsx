// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './title.component';

const meta: Meta<typeof Title> = {
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Basic: Story = {
  args: {
    label: 'Basic',
    value: 'value',
    fullWidth: true,
    id: 'gdsaghdf',
  },
};
