// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenCollapse } from './collapse.component';

const meta: Meta<typeof DenCollapse> = {
  component: DenCollapse,
};

export default meta;
type Story = StoryObj<typeof DenCollapse>;

export const Default: Story = {
  args: {},
};
