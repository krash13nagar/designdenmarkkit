// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenCardActions } from './cardactions.component';

const meta: Meta<typeof DenCardActions> = {
  component: DenCardActions,
};

export default meta;
type Story = StoryObj<typeof DenCardActions>;

export const Primary: Story = {
  args: {},
};
