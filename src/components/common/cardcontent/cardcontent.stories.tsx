// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenCardContent } from './cardcontent.component';

const meta: Meta<typeof DenCardContent> = {
  component: DenCardContent,
};

export default meta;
type Story = StoryObj<typeof DenCardContent>;

export const Primary: Story = {
  args: {},
};
