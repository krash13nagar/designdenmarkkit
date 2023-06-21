// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { DenTypography  } from './typography.component';


const meta: Meta<typeof DenTypography> = {
  component: DenTypography,
};

export default meta;
type Story = StoryObj<typeof DenTypography>;

export const h1: Story = {
  args: {
    // primary: true,
    children:"h1.heading",
    variant:"h1",
    gutterBottom:true
  },
};
