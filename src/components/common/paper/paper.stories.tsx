// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenPaper } from './paper.component';

const meta: Meta<typeof DenPaper> = {
  component: DenPaper,
};

export default meta;
type Story = StoryObj<typeof DenPaper>;

export const Default: Story = {
  args: {},
};
